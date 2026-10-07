import { ArrowUpRight, CheckCircle2, Gamepad2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UlinziQuest = () => <section className="page-container quest-section" aria-labelledby="quest-heading">
  <div className="quest-card">
    <div className="quest-copy"><h2 id="quest-heading">Want to learn data protection by playing a game?</h2><p>Explore privacy concepts through UlinziQuest.</p><Button asChild size="lg"><a href="https://quest.privacyguide.africa" target="_blank" rel="noopener noreferrer">Try UlinziQuest <ArrowUpRight aria-hidden="true" /></a></Button></div>
    <div className="quest-art" aria-hidden="true"><span className="quest-orbit" /><span className="quest-icon-card"><Gamepad2 strokeWidth={1.4} /></span><span className="quest-chip"><CheckCircle2 strokeWidth={1.6} /></span><span className="quest-token"><Puzzle strokeWidth={1.6} /></span></div>
  </div>
</section>;
export default UlinziQuest;
