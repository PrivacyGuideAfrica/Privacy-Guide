export interface GuidanceSource {
  label: string;
  url: string;
  section: string;
  verifiedAt: string;
}
export interface AssessmentModule {
  title: string;
  description: string;
  link: string;
  status: "available" | "review";
  disabledMessage?: string;
  reviewedAt: string | null;
  reviewer: string | null;
  sources: GuidanceSource[];
}
export interface Country {
  id: string;
  name: string;
  flagEmoji: string;
  description?: string;
  lawName?: string;
  lawYear?: string;
  status: "available" | "upcoming";
  startPath?: string;
  regulator?: { label: string; url: string };
  modules: AssessmentModule[];
}
// Review fields remain empty until primary sources and the owner's approval are recorded.
export const countries: Country[] = [
  {
    "id": "nigeria",
    "name": "Nigeria",
    "description": "Africa's most populous country with a rapidly evolving digital landscape.",
    "flagEmoji": "🇳🇬",
    "lawName": "Nigeria Data Protection Act",
    "lawYear": "2023",
    "status": "available",
    "startPath": "/ndpa-applicability",
    "regulator": {
      "label": "Nigeria Data Protection Commission",
      "url": "https://ndpc.gov.ng/"
    },
    "modules": [
      {
        "title": "NDPA Applicability",
        "description": "Determine if the Nigerian Data Protection Act applies to your organization",
        "link": "/ndpa-applicability",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Controller or Processor",
        "description": "Assess whether your organization acts as a data controller or processor",
        "link": "/controller-processor",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Lawful Basis Assessment",
        "description": "Identify the appropriate lawful basis for your data processing activities",
        "link": "/nigeria-lawful-basis",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Data Breach Assessment",
        "description": "Evaluate your data breach response readiness and obligations",
        "link": "/data-breach",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "DPIA Assessment",
        "description": "Guidance for Nigeria is being reviewed. This assessment is not yet available.",
        "link": "/nigeria-dpia",
        "disabledMessage": "Under Review",
        "status": "review",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Annual Audit Requirements",
        "description": "Find out if your organization needs to conduct an annual data protection audit",
        "link": "/annual-audit",
        "disabledMessage": "Being Updated",
        "status": "review",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      }
    ]
  },
  {
    "id": "rwanda",
    "name": "Rwanda",
    "description": "A leader in technological advancement and digital transformation in East Africa.",
    "flagEmoji": "🇷🇼",
    "lawName": "Rwanda Data Protection Law",
    "lawYear": "2021",
    "status": "available",
    "startPath": "/rwanda-applicability",
    "regulator": {
      "label": "Data Protection and Privacy Office",
      "url": "https://www.dpo.gov.rw/"
    },
    "modules": [
      {
        "title": "Does Rwanda's Data Protection Law Apply to You?",
        "description": "Determine if Rwanda's Data Protection Law applies to your organization",
        "link": "/rwanda-applicability",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Are You a Data Controller or Processor?",
        "description": "Assess your organization's role under Rwanda's data protection framework",
        "link": "/rwanda-controller-processor",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Registering with the Data Protection Authority?",
        "description": "Understand your registration requirements with Rwanda's Data Protection Authority",
        "link": "/rwanda-registration",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Do You Need to Do a DPIA?",
        "description": "Determine if your processing requires a Data Protection Impact Assessment",
        "link": "/rwanda-dpia",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Do You Need to Appoint a Local Representative?",
        "description": "Find out if your organization needs a local representative in Rwanda",
        "link": "/representative-assessment",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Do You Need to Appoint a DPO?",
        "description": "Assess whether your organization needs a Data Protection Officer",
        "link": "/dpo-assessment",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Data Breach Notification",
        "description": "Understand your data breach notification obligations under Rwanda's law",
        "link": "/rwanda-data-breach",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      }
    ]
  },
  {
    "id": "uganda",
    "name": "Uganda",
    "description": "East Africa's emerging digital economy with comprehensive data protection legislation.",
    "flagEmoji": "🇺🇬",
    "lawName": "Uganda Data Protection and Privacy Act",
    "lawYear": "2019",
    "status": "available",
    "startPath": "/uganda-registration",
    "regulator": {
      "label": "Personal Data Protection Office",
      "url": "https://www.pdpo.go.ug/"
    },
    "modules": [
      {
        "title": "Registration with Personal Data Protection Office",
        "description": "Determine your registration requirements with Uganda's data protection authority",
        "link": "/uganda-registration",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Annual Data Protection Compliance Report",
        "description": "Understand your obligation to file an Annual Data Protection and Privacy Compliance Report with the PDPO",
        "link": "/uganda-annual-compliance",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Lawful Basis for Processing",
        "description": "Identify the appropriate lawful basis for your data processing activities under Uganda law",
        "link": "/uganda-lawful-basis",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Data Protection Impact Assessments",
        "description": "Determine when you need to conduct a DPIA under Uganda's requirements",
        "link": "/uganda-dpia",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Responding to Data Subject Rights",
        "description": "Learn how to handle data subject requests and rights under Uganda law",
        "link": "/uganda-data-subject-rights",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Data Breach Notification",
        "description": "Understand your obligations for reporting data breaches to authorities and individuals",
        "link": "/uganda-data-breach",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Processing of Sensitive Data",
        "description": "Assess requirements and safeguards for processing sensitive personal data",
        "link": "/uganda-sensitive-data",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Appointment of a Data Protection Officer (DPO)",
        "description": "Determine if your organisation needs to appoint a Data Protection Officer under Uganda's Data Protection and Privacy Act.",
        "link": "/uganda-dpo",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      }
    ]
  },
  {
    "id": "south-africa",
    "name": "South Africa",
    "description": "Africa's economic powerhouse with comprehensive data protection legislation.",
    "flagEmoji": "🇿🇦",
    "lawName": "Protection of Personal Information Act (POPIA)",
    "lawYear": "2013",
    "status": "available",
    "startPath": "/south-africa-applicability",
    "regulator": {
      "label": "Information Regulator",
      "url": "https://inforegulator.org.za/"
    },
    "modules": [
      {
        "title": "Applicability Assessment",
        "description": "Determine if the Protection of Personal Information Act (POPIA) applies to your organization",
        "link": "/south-africa-applicability",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Prior Authorisation from the Information Regulator",
        "description": "Assess whether your processing activities require prior authorisation from IRSA",
        "link": "/south-africa-prior-authorisation",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Are you a Responsible Party or Operator?",
        "description": "Determine whether your organization acts as a Responsible Party (Controller) or Operator (Processor)",
        "link": "/south-africa-responsible-party",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Data Breach Notification",
        "description": "Understand your obligations for reporting security compromises under POPIA",
        "link": "/south-africa-data-breach",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Handling Data Subject Rights Requests in South Africa",
        "description": "Learn how to respond to data subject access, correction, and deletion requests",
        "link": "/south-africa-data-subject-rights",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Processing Special Personal Information in South Africa",
        "description": "Assess requirements for processing sensitive personal information under POPIA",
        "link": "/south-africa-special-information",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Processing Personal Information of Children",
        "description": "Understand the special requirements for processing children's personal information",
        "link": "/south-africa-children-information",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Appointment of Information Officer and Responsibilities",
        "description": "Determine if you need to appoint an Information Officer and understand their duties",
        "link": "/south-africa-information-officer",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Direct Marketing",
        "description": "Assess your compliance obligations for direct marketing activities under POPIA",
        "link": "/south-africa-direct-marketing",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      }
    ]
  },
  {
    "id": "ghana",
    "name": "Ghana",
    "description": "West Africa's pioneer in data protection legislation with a well-established regulatory framework.",
    "flagEmoji": "🇬🇭",
    "lawName": "Data Protection Act, 2012 (Act 843)",
    "lawYear": "2012",
    "status": "available",
    "startPath": "/ghana-applicability",
    "regulator": {
      "label": "Data Protection Commission",
      "url": "https://dataprotection.org.gh/"
    },
    "modules": [
      {
        "title": "Application of the Law",
        "description": "Determine if Ghana's Data Protection Act, 2012 (Act 843) applies to your organisation",
        "link": "/ghana-applicability",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Registration with the Data Protection Commission",
        "description": "Understand registration requirements with Ghana's Data Protection Commission",
        "link": "/ghana-registration",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Understanding Data Subject Rights",
        "description": "Assess how well your organisation upholds individuals' data rights under Ghanaian law",
        "link": "/ghana-data-subject-rights",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Data Breach Notification",
        "description": "Determine whether an incident constitutes a data breach and the steps to take",
        "link": "/ghana-data-breach",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      },
      {
        "title": "Appointment of Data Protection Supervisor (DPO)",
        "description": "Assess if your organisation needs to appoint a Data Protection Supervisor",
        "link": "/ghana-dpo",
        "status": "available",
        "reviewedAt": null,
        "reviewer": null,
        "sources": []
      }
    ]
  },
  {
    "id": "kenya",
    "name": "Kenya",
    "flagEmoji": "🇰🇪",
    "status": "upcoming",
    "modules": []
  },
  {
    "id": "tanzania",
    "name": "Tanzania",
    "flagEmoji": "🇹🇿",
    "status": "upcoming",
    "modules": []
  }
];
export const findCountry = (id: string) => countries.find(country => country.id === id.replace(/\/+$/, ""));
export const findAssessment = (path: string) => {
  const normalized = path.replace(/\/+$/, "") || "/";
  const canonicalPath = normalized === "/dpia-assessment" ? "/rwanda-dpia" : normalized;
  for (const country of countries) {
    const module = country.modules.find(module => module.link === canonicalPath);
    if (module) return { country, module };
  }
  return undefined;
};
