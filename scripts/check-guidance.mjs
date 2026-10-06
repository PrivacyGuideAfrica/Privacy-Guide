import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { countries } from "../src/data/catalog.ts";

const directory = new URL("../src/data/reviewed/", import.meta.url);
const approved = countries.flatMap(country => country.modules).filter(module => module.reviewVersion);
const packets = new Set();
let questionCount = 0;
let outcomeCount = 0;
for (const file of (await readdir(directory)).filter(file => file.endsWith(".ts") && file !== "types.ts")) {
  const [definition] = Object.values(await import(new URL(file, directory).href));
  assert(!packets.has(definition.packet), `Duplicate packet ${definition.packet}`);
  packets.add(definition.packet);
  const entry = approved.find(module => module.reviewVersion === definition.packet);
  assert(entry?.reviewedAt && entry.reviewer && entry.reviewBasis && entry.sources.length, `Missing approval/source metadata: ${file}`);
  assert.equal(entry.status, "available");
  for (const source of entry.sources) {
    assert.equal(new URL(source.url).protocol, "https:");
    assert(source.section && source.retrievedAt);
  }
  const questions = new Map(definition.questions.map(question => [question.id, question]));
  assert.equal(questions.size, definition.questions.length, `Duplicate question IDs: ${file}`);
  const reached = new Set();
  const visit = (id, path) => {
    assert(!path.has(id), `Cycle in ${file}, question ${id}`);
    const question = questions.get(id);
    assert(question, `Missing target ${id} in ${file}`);
    reached.add(id);
    assert(question.text && question.tooltip && question.options.notSure, `Missing text, reference or uncertainty option: ${file}, ${id}`);
    for (const name of ["yes", "no", "notSure"]) {
      const option = question.options[name];
      assert(option, `Missing ${name} option in ${file}, ${id}`);
      if (option.nextQuestion === null) {
        assert(option.message?.trim(), `Empty terminal outcome in ${file}, ${id}`);
      } else {
        visit(option.nextQuestion, new Set([...path, id]));
      }
    }
  };
  visit(definition.questions[0].id, new Set());
  assert.equal(reached.size, questions.size, `Unreachable questions in ${file}`);
  questionCount += questions.size;
  outcomeCount += definition.questions.reduce((count, question) => count + Object.values(question.options).filter(option => option.nextQuestion === null).length, 0);
}
assert.equal(packets.size, approved.length, "Approval metadata without a matching assessment");
console.log(`Validated ${packets.size} approved packets, ${questionCount} questions and ${outcomeCount} terminal branches.`);
