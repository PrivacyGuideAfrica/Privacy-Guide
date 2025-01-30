import { useState } from "react";
import DPIAQuestion from "./DPIAQuestion";
import DPIAActivities from "./DPIAActivities";
import { dpiaActivities, dpiaQuestions } from "@/data/dpiaQuestions";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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

  const goBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goForward = () => {
    const question = dpiaQuestions.find(q => q.id === currentQuestion);
    if (!question) return;

    const answer = answers[`q${currentQuestion}`];
    if (!answer) return;

    const nextQuestion = question.nextQuestions[answer as 'yes' | 'no'];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const progress = (currentQuestion / dpiaQuestions.length) * 100;

  const currentQuestionData = dpiaQuestions.find(q => q.id === currentQuestion);

  if (currentQuestion === 2) {
    return (
      <div className="space-y-6">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-muted-foreground">
          Question {currentQuestion} of {dpiaQuestions.length}
        </p>
        <DPIAActivities
          activities={dpiaActivities}
          selectedActivities={answers.q2}
          onActivityToggle={handleActivityToggle}
          onNext={handleActivitiesNext}
        />
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={goBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </Button>
        </div>
      </div>
    );
  }

  if (!currentQuestionData) return null;

  return (
    <div className="space-y-6">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-muted-foreground">
        Question {currentQuestion} of {dpiaQuestions.length}
      </p>
      <DPIAQuestion
        text={currentQuestionData.text}
        tooltip={currentQuestionData.tooltip}
        value={answers[`q${currentQuestionData.id}`]}
        onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
      />
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={goBack}
          disabled={currentQuestion === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>
        <Button
          variant="outline"
          onClick={goForward}
          disabled={!answers[`q${currentQuestion}`]}
          className="flex items-center gap-2"
        >
          Next <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DPIARequirement;