import { Question } from "@/components/shared/AssessmentInterface";

export const dataBreachQuestions: Question[] = [
  {
    id: 1,
    text: "Has there been unauthorised access, loss, destruction, or disclosure of personal data?",
    tooltip: "A data breach includes incidents like hacking, accidental data leaks, or lost devices containing unencrypted personal data.",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "No breach has occurred." 
      }
    }
  },
  {
    id: 2,
    text: "Does the breach involve sensitive personal data (e.g., health, financial, biometric data)?",
    tooltip: "Sensitive data is information that could cause serious harm to someone if it is revealed, like their health records, financial details, or private beliefs.",
    options: {
      yes: { nextQuestion: 3 },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 3,
    text: "Could the data breach cause serious problems for the people whose information was leaked, like someone stealing their identity, losing money, or being treated unfairly?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "This is a high-risk breach. You must notify the NDPC within 72 hours and affected individuals immediately." 
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Does the breach affect a large number of individuals or involve vulnerable data subjects (e.g., children, elderly)?",
    tooltip: '"Large number" means a significant number of individuals. There\'s no exact number, but think about whether the number of people affected is unusual or unexpected for your organisation. "Vulnerable data subjects" are people who might be more at risk of harm because of their age or circumstances, like children or the elderly.',
    options: {
      yes: { 
        nextQuestion: null,
        message: "This is a high-risk breach. You must notify the NDPC within 72 hours and affected individuals immediately." 
      },
      no: { nextQuestion: 5 }
    }
  },
  {
    id: 5,
    text: "Can you fix the breach quickly, for example, by revoking access or getting the data back quickly?",
    options: {
      yes: { nextQuestion: 6 },
      no: { 
        nextQuestion: null,
        message: "This is a high-risk breach. You must notify the NDPC within 72 hours and affected individuals immediately." 
      }
    }
  },
  {
    id: 6,
    text: "Could the breach cause problems for people's rights and freedoms, such as leading to discrimination, stopping people from speaking their minds, or making it hard for people to control their own information?",
    options: {
      yes: { nextQuestion: 7 },
      no: { 
        nextQuestion: null,
        message: "No immediate notification is required, but document the breach in your data breach registry." 
      }
    }
  },
  {
    id: 7,
    text: "Has the breach affected the confidentiality, integrity, or availability of personal data (e.g., unencrypted data was leaked)?",
    options: {
      yes: { nextQuestion: 8 },
      no: { 
        nextQuestion: null,
        message: "No notification is necessary unless the situation changes." 
      }
    }
  },
  {
    id: 8,
    text: "Have more than 72 hours passed since you became aware of the breach?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "You must notify the Nigeria Data Protection Commission (NDPC) immediately." 
      },
      no: { nextQuestion: 9 }
    }
  },
  {
    id: 9,
    text: "Can affected individuals take specific steps to mitigate potential harm (e.g., change passwords, monitor accounts)?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "Notify affected data subjects immediately with advice on mitigation." 
      },
      no: { nextQuestion: 10 }
    }
  },
  {
    id: 10,
    text: "Is it feasible to directly notify all affected individuals?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "Notify individuals immediately." 
      },
      no: { 
        nextQuestion: null,
        message: "Issue a public notice through widespread channels." 
      }
    }
  }
];