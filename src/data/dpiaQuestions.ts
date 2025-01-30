export interface DPIAActivity {
  label: string;
  tooltip?: string;
}

export interface DPIAQuestion {
  id: number;
  text: string;
  tooltip?: string;
  nextQuestions: {
    yes: number | null;
    no: number | null;
  };
  requiresDPIA?: {
    yes: boolean;
    no: boolean;
  };
}

export const dpiaQuestions: DPIAQuestion[] = [
  {
    id: 1,
    text: "Are you processing personal data that could result in a high risk to the rights and freedoms of individuals?",
    tooltip: "\"High risk\" refers to situations where data processing could lead to identity theft, financial loss, discrimination, or significant invasion of privacy.",
    nextQuestions: {
      yes: 2,
      no: null
    },
    requiresDPIA: {
      yes: false,
      no: false
    }
  },
  {
    id: 3,
    text: "Are you using new technologies or are there any innovative processing activities involved?",
    tooltip: "New technologies like AI may involve unknown risks, making a DPIA essential.",
    nextQuestions: {
      yes: null,
      no: 4
    },
    requiresDPIA: {
      yes: true,
      no: false
    }
  },
  {
    id: 4,
    text: "Could the processing result in denial of services or legal rights to individuals?",
    nextQuestions: {
      yes: null,
      no: 5
    },
    requiresDPIA: {
      yes: true,
      no: false
    }
  },
  {
    id: 5,
    text: "Are you processing data in a way that may lead to significant harm?",
    nextQuestions: {
      yes: null,
      no: null
    },
    requiresDPIA: {
      yes: true,
      no: false
    }
  }
];

export const dpiaActivities: DPIAActivity[] = [
  {
    label: "Automated decision-making or profiling",
    tooltip: "Processing personal data without human intervention, often to make predictions or decisions about individuals (e.g., credit scoring, automated job screening)."
  },
  {
    label: "Large-scale processing of sensitive data",
    tooltip: "Handling large volumes of sensitive data such as health, financial, biometric, or criminal records that can cause significant harm if breached."
  },
  {
    label: "Systematic monitoring of public areas",
    tooltip: "Ongoing observation or tracking of individuals in public spaces, typically using surveillance technologies (e.g., CCTV)."
  },
  {
    label: "Processing of children's data",
    tooltip: "Collection, use, or sharing of personal data from minors, which requires additional safeguards due to their vulnerability."
  },
  {
    label: "Cross-border data transfer to a country with weaker data protection",
    tooltip: "Moving personal data to a weaker country which requires adherence to specific regulations to ensure data protection standards."
  },
  {
    label: "Processing data that could lead to discrimination",
    tooltip: "Using data in a way that could unfairly disadvantage certain groups of people."
  },
  {
    label: "Invisible processing",
    tooltip: "Processing data in ways that people are not aware of."
  },
  {
    label: "Data matching",
    tooltip: "Comparing different sets of data to find links and reveal new information."
  },
  {
    label: "Combining data from various sources",
    tooltip: "Bringing together data from different places to create a more complete picture of an individual."
  }
];

export const dpiaGuidanceSteps = [
  {
    title: "Step 1: Identify and Describe the Processing",
    items: [
      "Define the nature, scope, context, and purposes of the data processing",
      "Outline the type of personal data and the methods of collection"
    ]
  },
  {
    title: "Step 2: Assess Necessity and Proportionality",
    items: [
      "Evaluate whether the processing is essential for achieving the specified objectives",
      "Consider whether less intrusive methods could achieve the same results"
    ]
  },
  {
    title: "Step 3: Identify Risks",
    items: [
      "List risks to the rights and freedoms of data subjects",
      "Rank the risks as low, medium, or high based on likelihood and impact"
    ]
  },
  {
    title: "Step 4: Mitigate Risks",
    items: [
      "Implement technical and organisational measures to reduce risks",
      "Document how these measures reduce the likelihood or impact of identified risks"
    ]
  },
  {
    title: "Step 5: Consult with Stakeholders",
    items: [
      "Involve your Data Protection Officer (DPO)",
      "If necessary, seek advice from external legal advisors",
      "Consult the Data Protection Authority (NDPC) if high risks remain unresolved"
    ]
  },
  {
    title: "Step 6: Document and Review",
    items: [
      "Keep comprehensive documentation of the DPIA process",
      "Periodically review and update the DPIA if the processing activity changes"
    ]
  }
];