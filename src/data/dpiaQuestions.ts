import { Question } from "@/components/shared/AssessmentInterface";

export interface DPIAActivity {
  label: string;
  tooltip?: string;
}

export const dpiaActivities: DPIAActivity[] = [
  {
    label: "Automated decision-making or profiling",
    tooltip: "Using automated systems to make decisions or analyze personal data"
  },
  {
    label: "Large-scale processing of sensitive data (e.g., health, financial)",
    tooltip: "Processing special categories of data or sensitive information on a large scale"
  },
  {
    label: "Systematic monitoring of public areas",
    tooltip: "Regular monitoring of individuals in public spaces using technology"
  },
  {
    label: "Processing of children's data",
    tooltip: "Handling personal data of individuals under 18 years of age"
  },
  {
    label: "Cross-border data transfer to a country with weaker data protection",
    tooltip: "Transferring personal data to countries with different data protection standards"
  },
  {
    label: "Processing data that could lead to discrimination",
    tooltip: "Handling data that might result in unfair treatment based on personal characteristics"
  },
  {
    label: "Invisible processing",
    tooltip: "Processing personal data without the individual's knowledge"
  },
  {
    label: "Data matching",
    tooltip: "Combining data sets to identify patterns or relationships"
  },
  {
    label: "Combining data from various sources",
    tooltip: "Merging personal data from multiple different sources or databases"
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
    text: "Are you conducting any of the following activities?",
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