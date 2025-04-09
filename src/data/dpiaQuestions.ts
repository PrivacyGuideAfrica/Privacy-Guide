
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
    text: "Is the processing of personal data likely to result in a high risk to the rights and freedoms of individuals?",
    tooltip: "A higher-risk scenario may require you to carry out a DPIA to assess and address potential impacts on individuals' privacy.",
    options: {
      yes: {
        nextQuestion: 2,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "You might not need a DPIA, but it's good practice to consider privacy risks."
      },
      notSure: {
        nextQuestion: 2,
        message: null
      }
    }
  },
  {
    id: 2,
    text: "Does your processing involve any of the following?",
    tooltip: "If you answered 'Yes' to any of the above, you must conduct a DPIA.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Based on your responses, you must conduct a DPIA.\n\nA DPIA should include:\nA description of the processing operations and their purposes.\nAn assessment of whether the processing is necessary and proportional.\nAn evaluation of the risks to individuals' rights and freedoms.\nThe measures you plan to take to address those risks and demonstrate compliance.\nA plan for monitoring and reviewing the DPIA.\n\nWho should be involved:\nThe Data Controller (responsible for carrying out the DPIA).\nThe Data Processor (must assist, if involved).\nThe Data Protection Officer (if you have one).\nIt's good practice to seek input from the individuals whose data will be processed.\n\nWhen to conduct/review:\nBefore starting processing.\nDPIAs should be ongoing and regularly reviewed.\n\nConsultation and publication:\nConsult the NCSA if you're unsure whether a DPIA is necessary or if a single DPIA covers multiple operations.\nWhile publishing the full DPIA is not mandatory, a summary is recommended for transparency.\nYou must provide the full DPIA to the supervisory authority if requested."
      },
      no: {
        nextQuestion: null,
        message: "Based on your responses, a DPIA may not be required. However, it's advisable to adopt best practices in privacy risk management:\n\nEven if not mandatory, consider documenting:\nA description of your processing operations and their purposes.\nAn assessment of whether the processing is necessary and proportional.\nAny potential risks to individuals' rights and freedoms.\nMeasures to mitigate risks and ensure compliance.\nA plan for ongoing monitoring and review.\n\nFollowing these measures promotes trust and accountability if your processing changes in the future."
      }
    }
  }
];
