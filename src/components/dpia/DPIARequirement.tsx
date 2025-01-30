import { useState } from "react";
import DPIAQuestion from "./DPIAQuestion";
import DPIAActivities from "./DPIAActivities";
import { dpiaActivities, dpiaQuestions } from "@/data/dpiaQuestions";

interface Props {
  onComplete: (required: boolean) => void;
}

const DPIARequirement = ({ onComplete }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: [] as string[],
    q3: "",
    q4: "",
    q5: "",
  });

  const handleAnswer = (questionId: number, value: string) => {
    const question = dpiaQuestions.find(q => q.id === questionId);
    if (!question) return;

    const newAnswers = { ...answers, [`q${questionId}`]: value };
    setAnswers(newAnswers);

    if (question.requiresDPIA?.[value as 'yes' | 'no']) {
      onComplete(true);
      return;
    }

    const nextQuestion = question.nextQuestions[value as 'yes' | 'no'];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else if (value === 'no' && questionId === 1) {
      onComplete(false);
    }
  };

  const handleActivityToggle = (activity: string) => {
    const currentActivities = answers.q2.includes(activity)
      ? answers.q2.filter((a) => a !== activity)
      : [...answers.q2, activity];
    setAnswers({ ...answers, q2: currentActivities });
  };

  const handleActivitiesNext = () => {
    setCurrentQuestion(answers.q2.length > 0 ? 3 : 4);
  };

  const currentQuestionData = dpiaQuestions.find(q => q.id === currentQuestion);

  if (currentQuestion === 2) {
    return (
      <DPIAActivities
        activities={dpiaActivities}
        selectedActivities={answers.q2}
        onActivityToggle={handleActivityToggle}
        onNext={handleActivitiesNext}
      />
    );
  }

  if (!currentQuestionData) return null;

  return (
    <DPIAQuestion
      text={currentQuestionData.text}
      tooltip={currentQuestionData.tooltip}
      value={answers[`q${currentQuestionData.id}`]}
      onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
    />
  );
};

export default DPIARequirement;