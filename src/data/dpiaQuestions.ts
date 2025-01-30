import { Question } from "@/components/shared/AssessmentInterface";

export interface DPIAActivity {
  label: string;
  tooltip?: string;
}

export const dpiaActivities: DPIAActivity[] = [
  {
    label: "Systematic and extensive profiling with significant effects",
    tooltip: "Large scale automated processing used to analyze or predict aspects about individuals"
  },
  {
    label: "Large scale processing of sensitive data",
    tooltip: "Processing special categories of data or criminal convictions on a large scale"
  },
  {
    label: "Systematic monitoring of public areas",
    tooltip: "Regular monitoring of individuals in public spaces using technology"
  }
];

export const dpiaQuestions: Question[] = [
  {
    id: 1,
    text: "Are you processing personal data that could result in a high risk to individuals' rights and freedoms?",
    tooltip: "Consider if your processing could lead to discrimination, identity theft, financial loss, or other significant impacts",
    options: {
      yes: {
        nextQuestion: 2
      },
      no: {
        nextQuestion: null,
        message: "Based on your response, a DPIA may not be required. However, it's recommended to document your decision-making process and regularly review your processing activities."
      }
    }
  },
  {
    id: 2,
    text: "Does your processing involve any of these high-risk activities?",
    tooltip: "Select any activities that apply to your processing operations",
    options: {
      yes: {
        nextQuestion: 3
      },
      no: {
        nextQuestion: 4
      }
    }
  },
  {
    id: 3,
    text: "Will you be processing sensitive data on a large scale?",
    tooltip: "Sensitive data includes health data, biometric data, or data about racial/ethnic origin",
    options: {
      yes: {
        nextQuestion: null,
        message: "A DPIA is required. You should document the nature, scope, context, and purposes of the processing, assess necessity and risks, and identify measures to address those risks."
      },
      no: {
        nextQuestion: 4
      }
    }
  },
  {
    id: 4,
    text: "Are you using new technologies or applying existing technologies in novel ways?",
    tooltip: "Consider if you're using innovative technology or applying existing technology in new ways that could impact individuals",
    options: {
      yes: {
        nextQuestion: 5
      },
      no: {
        nextQuestion: 5
      }
    }
  },
  {
    id: 5,
    text: "Does the processing involve making decisions about individuals using automated means?",
    tooltip: "This includes profiling and automated decision-making with legal or similarly significant effects",
    options: {
      yes: {
        nextQuestion: null,
        message: "A DPIA is required. You need to assess the impact of the automated processing and implement appropriate safeguards."
      },
      no: {
        nextQuestion: null,
        message: "Based on your responses, you should still consider conducting a DPIA as a best practice, even if not strictly required. This will help ensure compliance and demonstrate accountability."
      }
    }
  }
];