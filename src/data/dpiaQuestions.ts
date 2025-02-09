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
    text: "Are you processing personal data that could result in a high risk to the rights and freedoms of individuals (e.g., large-scale processing, special categories of data)?",
    tooltip: "'High risk' refers to situations where data processing could lead to identity theft, financial loss, discrimination, or significant invasion of privacy. Are you using personal data in a way that could cause problems for people's rights and freedoms, such as using personal data to make important decisions about people, tracking people's location or online activity, sharing personal data with many different organisations, or processing sensitive personal data?",
    options: {
      yes: {
        nextQuestion: 2
      },
      no: {
        nextQuestion: null,
        message: "A DPIA may not be necessary, but keep records of your processing activities."
      }
    }
  },
  {
    id: 2,
    text: "Are you conducting any of the following activities? Automated decision-making or profiling, large-scale processing of sensitive data (e.g., health, financial), systematic monitoring of public areas, processing of children's data, cross-border data transfer to a country with weaker data protection, processing data that could lead to discrimination, invisible processing, data matching, combining data from various sources",
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
    text: "Are you using new technologies, or are there any innovative processing activities involved (e.g., AI or IoT)?",
    tooltip: "New technologies like AI may involve unknown risks which makes a DPIA essential.",
    options: {
      yes: {
        nextQuestion: null,
        message: "A DPIA is required. Consult a Data Protection Officer to mitigate risks related to new technologies."
      },
      no: {
        nextQuestion: 4
      }
    }
  },
  {
    id: 4,
    text: "Could the processing result in denial of services or legal rights to individuals (e.g., loan refusals, employment decisions)?",
    options: {
      yes: {
        nextQuestion: null,
        message: "A DPIA is required due to potential harm to individuals' legal rights."
      },
      no: {
        nextQuestion: 5
      }
    }
  },
  {
    id: 5,
    text: "Are you processing data in a way that may lead to significant harm (e.g., discrimination, loss of employment)?",
    options: {
      yes: {
        nextQuestion: null,
        message: "A DPIA is required."
      },
      no: {
        nextQuestion: null,
        message: "A DPIA is not mandatory based on your current processing activities. However, it is recommended that you document your activities for accountability. If the scope, nature, or purpose of your data processing changes in the future—such as implementing new technologies, processing sensitive data, or engaging in large-scale processing—you should reassess whether a DPIA is required. Regularly reviewing your data practices ensures continued compliance with data protection regulations."
      }
    }
  }
];
