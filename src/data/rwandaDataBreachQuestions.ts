
import { Question } from "@/components/shared/AssessmentInterface";

export const rwandaDataBreachQuestions: Question[] = [
  {
    id: 1,
    text: "Have you experienced a personal data breach?",
    tooltip: "Any incident that causes personal data to be accidentally or unlawfully destroyed, lost, altered, or disclosed without authorisation.",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "This module does not apply to you at this time." 
      }
    }
  },
  {
    id: 2,
    text: "Are you a Data Controller?",
    tooltip: "A Data Controller determines the purposes and means of processing personal data. If you're a Data Processor, select 'No'.",
    options: {
      yes: { nextQuestion: 3 },
      no: { 
        nextQuestion: null,
        message: "As a Data Processor, you must notify your Data Controller within 48 hours of becoming aware of the breach." 
      },
      notSure: { 
        nextQuestion: null,
        message: "This module does not directly apply to you if you're neither a Controller nor a Processor." 
      }
    }
  },
  {
    id: 3,
    text: "Can you submit a detailed breach notification to the supervisory authority (NCSA) within 72 hours of becoming aware of the breach?",
    options: {
      yes: { nextQuestion: 4 },
      no: { 
        nextQuestion: null,
        message: "You must gather the required information and submit it within 72 hours." 
      }
    }
  },
  {
    id: 4,
    text: "Is the breach likely to result in a high risk to individuals' rights and freedoms?",
    options: {
      yes: { nextQuestion: 5 },
      no: { 
        nextQuestion: null,
        message: "You may not need to inform affected individuals, but you still have obligations to the NCSA." 
      }
    }
  },
  {
    id: 5,
    text: "Have you taken measures that make the high risk unlikely (e.g. encryption), or have you already informed the public effectively?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "You may not need to inform data subjects. Be prepared to do so if the NCSA instructs." 
      },
      no: { 
        nextQuestion: null,
        message: "You must inform affected data subjects." 
      }
    }
  }
];
