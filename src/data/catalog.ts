export interface GuidanceSource {
  label: string;
  url: string;
  section: string;
  /** Retrieval date reported in the owner-approved research. */
  retrievedAt: string;
}
export interface AssessmentModule {
  title: string;
  description: string;
  link: string;
  status: "available" | "review";
  disabledMessage?: string;
  reviewedAt: string | null;
  reviewer: string | null;
  reviewVersion?: string;
  reviewBasis?: string;
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
// Review metadata is limited to the implemented packets approved by the owner.
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Nigeria Data Protection Act 2023",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
            "section": "Sections 2–3, 24–25, 32, 40 and Part VI (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPA General Application and Implementation Directive 2025, NDPC/NDP ACT-GAID/01/2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
            "section": "Articles 3(2), 5–6 (regulatory directive)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "NG-SCOPE-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Nigeria Data Protection Act 2023",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
            "section": "Sections 25–26, 30–31, 37, 41–43 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPA General Application and Implementation Directive 2025, NDPC/NDP ACT-GAID/01/2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
            "section": "Articles 3(2), 16–26 (regulatory directive)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "NG-BASIS-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
      },
      {
        "title": "Data Breach Assessment",
        "description": "Evaluate your data breach response readiness and obligations",
        "link": "/data-breach",
        "status": "available",
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Nigeria Data Protection Act 2023",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
            "section": "Sections 40, 65 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPA General Application and Implementation Directive 2025, NDPC/NDP ACT-GAID/01/2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
            "section": "Article 33 (regulatory directive)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPC NIMP",
            "url": "https://services.ndpc.gov.ng/breach/",
            "section": "Breach reporting entrypoint (operational service)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPC NIMP",
            "url": "https://services.ndpc.gov.ng/",
            "section": "Breach reporting entrypoint (operational service)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "NG-BREACH-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
      },
      {
        "title": "DPIA Assessment",
        "description": "Screen Nigeria-specific DPIA triggers, filing and consultation under the NDPA and GAID 2025",
        "link": "/nigeria-dpia",
        "status": "available",
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Nigeria Data Protection Act 2023",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
            "section": "Sections 2–3, 28, 65 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPA General Application and Implementation Directive 2025, NDPC/NDP ACT-GAID/01/2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
            "section": "Article 28; Schedule 4 (regulatory directive)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPC Annual Report 2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2026/02/Print_NDPC-Annual-Report-2025-1.pdf",
            "section": "Pages 19–20, GAID effective date (official explanatory report)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "NG-DPIA-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
      },
      {
        "title": "Annual Audit Requirements",
        "description": "Distinguish annual CAR filing, OHL registration renewal and periodic compliance audits",
        "link": "/annual-audit",
        "status": "available",
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "NDPA General Application and Implementation Directive 2025, NDPC/NDP ACT-GAID/01/2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
            "section": "Articles 3, 8–10; Schedules 2, 7, 10 (regulatory directive)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Updated Registration Guidance Notice, NDPC/HQ/GN/VOL.03/B/24",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2025/07/Updated-Guidance-Notice-on-Registtration-2024.pdf",
            "section": "Paragraphs 1–5 (regulatory designation notice)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPC FAQs",
            "url": "https://ndpc.gov.ng/faqs/",
            "section": "CAR and OHL explanations (regulator FAQ)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NDPC Annual Report 2025",
            "url": "https://ndpc.gov.ng/wp-content/uploads/2026/02/Print_NDPC-Annual-Report-2025-1.pdf",
            "section": "Pages 19–20 (official explanatory report)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "NG-CAR-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Rwanda Law No. 058/2021 of 13 October 2021",
            "url": "https://dpo.gov.rw/fileadmin/DPO/Law_relating_to_the_protection_of_personal_data_and_privacy.pdf",
            "section": "Articles 9, 38 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "NCSA Guidelines on DPIA",
            "url": "https://dpo.gov.rw/fileadmin/DPO/ComplianceTools/-_dpia-guide-and-form.pdf",
            "section": "Pages 3–7, 11–12; December 2023 (regulator guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "DPO engages stakeholders to shape Rwanda’s Data Privacy regulations",
            "url": "https://dpo.gov.rw/news-and-updates/news/article/dpo-engages-stakeholders-to-shape-rwandas-data-privacy-regulations",
            "section": "5 March 2026 consultation announcement (draft status, not binding law)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "RW-DPIA-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Rwanda Law No. 058/2021 of 13 October 2021",
            "url": "https://dpo.gov.rw/fileadmin/DPO/Law_relating_to_the_protection_of_personal_data_and_privacy.pdf",
            "section": "Articles 43–45 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Rwanda breach service and form",
            "url": "https://dpo.gov.rw/services/report-a-data-breach",
            "section": "Reporting service and form (operational guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Rwanda breach service and form",
            "url": "https://dpo.gov.rw/fileadmin/DPO/ComplianceTools/Personal%20Data%20Breach%20Notification%20Form.pdf",
            "section": "Reporting service and form (operational guidance)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "RW-BREACH-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Uganda Data Protection and Privacy Act, Cap.97",
            "url": "https://www.nita.go.ug/sites/default/files/2026-09/Data%20Protection%20and%20Privacy%20Act%20cap%2097.pdf",
            "section": "Section 23 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Uganda Data Protection and Privacy Regulations 2021, SI 21/2021",
            "url": "https://oldsite.nita.go.ug/sites/default/files/2022-11/Data_Protection_and_Privacy_Regulations-2021.pdf",
            "section": "Regulation 33; Schedule 1 Form 7 (Regulations)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "PDPO reporting service / Form 7",
            "url": "https://pdpo.go.ug/",
            "section": "Breach service and Form 7 (operational guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "PDPO reporting service / Form 7",
            "url": "https://pdpo.go.ug/media/2022/02/Form_7_-_Notification_of_Data_Breach.pdf",
            "section": "Breach service and Form 7 (operational guidance)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "UG-BREACH-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "South Africa Protection of Personal Information Act 4 of 2013",
            "url": "https://inforegulator.org.za/wp-content/uploads/2020/07/InfoRegSA-act-2013-004.pdf",
            "section": "Sections 21(2), 22 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "South Africa Protection of Personal Information Act 4 of 2013",
            "url": "https://inforegulator.org.za/acts/",
            "section": "Sections 21(2), 22 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Information Regulator security-compromises fact sheet",
            "url": "https://inforegulator.org.za/2025/08/19/fact-sheet-handling-of-security-compromises/",
            "section": "Timing, operators, low risk and incomplete information (regulator guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Information Regulator POPIA FAQs / eServices",
            "url": "https://inforegulator.org.za/popia/",
            "section": "Security-compromises FAQs 4–8; eServices (operational guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "Information Regulator POPIA FAQs / eServices",
            "url": "https://eservices.inforegulator.org.za/",
            "section": "Security-compromises FAQs 4–8; eServices (operational guidance)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "ZA-BREACH-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
      "url": "https://dpc.gov.gh/"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Ghana Data Protection Act 2012, Act 843",
            "url": "https://dpc.gov.gh/wp-content/uploads/2025/05/data-protection-act-2012-act-843.pdf",
            "section": "Sections 27, 45–56, 60–67 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "DPC For Organisations / Compliance",
            "url": "https://dpc.gov.gh/for-organisations/",
            "section": "Registration, renewal and filing routes (regulator guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "DPC For Organisations / Compliance",
            "url": "https://dpc.gov.gh/compliance/",
            "section": "Registration, renewal and filing routes (regulator guidance)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "DPC Documents",
            "url": "https://dpc.gov.gh/documents/",
            "section": "Replacement bill listed as draft (official document index)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "GH-REG-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
        "reviewedAt": "2026-10-06",
        "reviewer": "Site owner",
        "sources": [
          {
            "label": "Ghana Data Protection Act 2012, Act 843",
            "url": "https://dpc.gov.gh/wp-content/uploads/2025/05/data-protection-act-2012-act-843.pdf",
            "section": "Section 31 (Act)",
            "retrievedAt": "2026-10-06"
          },
          {
            "label": "DPC Incident / Data Breach Report Form",
            "url": "https://dpc.gov.gh/wp-content/uploads/2025/07/INCIDENT-BREACH-REPORT-FORM-DPC-SAMPLE.pdf",
            "section": "Page 1; loss/damage and submission instructions (regulator form)",
            "retrievedAt": "2026-10-06"
          }
        ],
        "reviewVersion": "GH-BREACH-0.1",
        "reviewBasis": "Owner-approved research dated 6 October 2026"
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
