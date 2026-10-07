import type { ReviewedAssessment } from "./types";

export const nigeriaDpia: ReviewedAssessment = {
  "packet": "NG-DPIA-0.1",
  "title": "Data Protection Impact Assessment (DPIA) in Nigeria",
  "intro": "Screen Nigeria’s NDPA section 28 and GAID 2025 article 28 requirements. Small size, consent and encryption are not general DPIA exemptions.",
  "questions": [
    {
      "id": 1,
      "text": "Does the activity involve personal data and fall within Nigeria’s territorial scope?",
      "tooltip": "Personal data identifies a person directly or indirectly; processing includes collecting, storing, using or sharing it. Consider connections such as processing in Nigeria, operating there, or processing data about a person in Nigeria. For example, customer records held by a Nigerian business are relevant.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "This screening has not established an NDPA DPIA duty on the stated facts. Document the scope assessment and check other applicable laws."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "DPIA screening is unresolved. Obtain a further assessment before starting processing; do not treat uncertainty as a finding that no DPIA is needed."
        }
      },
      "helpReference": "NDPA sections 2 and 65. Processing in Nigeria, establishment or operation there, or processing a data subject in Nigeria may establish scope."
    },
    {
      "id": 2,
      "text": "Are you claiming a specific statutory exemption for this processing?",
      "tooltip": "A statutory exemption is a particular legal exception for an activity. Identify its conditions and which duties it affects. For example, a limited exception for one purpose does not automatically exempt the organisation’s other processing.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Assess the precise section 3 exemption, competent authority and purpose before relying on it. Section 3(2) can exempt section 28, but preserves other duties. Ordinary corporate fraud monitoring is not automatically competent-authority processing. Obtain a legal determination where uncertain."
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "DPIA screening is unresolved. Obtain a further assessment before starting processing; do not treat uncertainty as a finding that no DPIA is needed."
        }
      },
      "helpReference": "NDPA section 3(1)–(4); GAID articles 3(2), 5–6. An organisation or sector is not automatically exempt."
    },
    {
      "id": 3,
      "text": "Does any of these GAID article 28(3) circumstances apply?\n\n• Evaluation or scoring, including profiling\n• Automated decisions with legal or similarly significant effects\n• Systematic monitoring\n• Sensitive or highly personal data\n• Vulnerable data subjects\n• Innovative technological or organisational solutions which may create significant privacy risk\n• Software development for communication with data subjects\n• Financial services through digital devices\n• Healthcare services\n• E-commerce services\n• Cameras in places accessible to the public\n• A legal instrument or policy requiring processing of the general public’s data\n• Student or pupil education records\n• Hospitality services\n• Cross-border transfers",
      "tooltip": "These are express DPIA triggers in the GAID. A DPIA examines how a proposed activity could affect people and how to reduce the risks. Examples in this list include a hotel handling guest records and transfers to overseas hosting; a large scale is not required for every listed trigger.",
      "options": {
        "yes": {
          "nextQuestion": 5
        },
        "no": {
          "nextQuestion": 4
        },
        "notSure": {
          "nextQuestion": null,
          "message": "DPIA screening is unresolved. Obtain a further assessment before starting processing; do not treat uncertainty as a finding that no DPIA is needed."
        }
      },
      "helpReference": "GAID article 28(3)(a)–(o). Do not add a large-scale condition to every trigger: even a small hotel or an overseas hosting transfer can fall within the express list."
    },
    {
      "id": 4,
      "text": "Otherwise, could the nature, scope, context or purpose of the processing create high risk to individuals?",
      "tooltip": "Consider how likely harm is and how serious it could be, given the data, people and purpose involved. Examples include risks of identity theft, discrimination or intrusive surveillance. An activity may create high risk even if it does not fit the preceding list.",
      "options": {
        "yes": {
          "nextQuestion": 6
        },
        "no": {
          "nextQuestion": null,
          "message": "No DPIA trigger identified on the documented facts. Retain the screening rationale, review material changes, and reassess any later NDPC direction. This is not a conclusion of general legal compliance."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "DPIA screening is unresolved. Obtain a further assessment before starting processing; do not treat uncertainty as a finding that no DPIA is needed."
        }
      },
      "helpReference": "NDPA section 28(1), (4); GAID article 28(1)–(2)."
    },
    {
      "id": 5,
      "text": "Has a completed DPIA assessed the risk remaining after the proposed safeguards?",
      "tooltip": "A Data Protection Impact Assessment (DPIA) documents the activity, its necessity, risks to people and safeguards. Residual risk is what remains after those safeguards. For example, assess whether access restrictions actually reduce the risk of exposure.",
      "options": {
        "yes": {
          "nextQuestion": 7
        },
        "no": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). This activity meets an express GAID article 28(3) trigger: file the DPIA with the NDPC before processing under article 28(9). Filing is distinct from prior consultation. Complete the residual-risk assessment. If high risk remains, consult the NDPC before processing."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). This activity meets an express GAID article 28(3) trigger: file the DPIA with the NDPC before processing under article 28(9). Filing is distinct from prior consultation. Residual risk is unresolved; obtain further assessment before starting."
        }
      },
      "helpReference": "NDPA section 28(2); GAID article 28(9)."
    },
    {
      "id": 6,
      "text": "Has a completed DPIA assessed the risk remaining after the proposed safeguards?",
      "tooltip": "A Data Protection Impact Assessment (DPIA) documents the activity, its necessity, risks to people and safeguards. Residual risk is what remains after those safeguards. For example, assess whether access restrictions actually reduce the risk of exposure.",
      "options": {
        "yes": {
          "nextQuestion": 8
        },
        "no": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). Complete the residual-risk assessment. Consult the NDPC before processing if high risk remains, and satisfy any applicable GAID filing requirement."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). Residual risk is unresolved; obtain further assessment before starting."
        }
      },
      "helpReference": "NDPA section 28(2); GAID article 28(9)."
    },
    {
      "id": 7,
      "text": "Does high risk remain despite the proposed safeguards?",
      "tooltip": "Consider the risk that remains after the measures assessed in the DPIA. For example, encryption may reduce exposure risk but leave risks from authorised users misusing information. A list of planned controls alone does not establish that high risk has been resolved.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). This activity meets an express GAID article 28(3) trigger: file the DPIA with the NDPC before processing under article 28(9). Filing is distinct from prior consultation. Consult the NDPC before processing because residual high risk remains."
        },
        "no": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). This activity meets an express GAID article 28(3) trigger: file the DPIA with the NDPC before processing under article 28(9). Filing is distinct from prior consultation. Document the safeguards and residual-risk decision; filing remains required despite the absence of residual high risk."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). This activity meets an express GAID article 28(3) trigger: file the DPIA with the NDPC before processing under article 28(9). Filing is distinct from prior consultation. Residual risk is unresolved. Seek further assessment and do not proceed on an assumed low-risk result."
        }
      },
      "helpReference": "NDPA section 28(2); GAID article 28(9)."
    },
    {
      "id": 8,
      "text": "Does high risk remain despite the proposed safeguards?",
      "tooltip": "Consider the risk that remains after the measures assessed in the DPIA. For example, encryption may reduce exposure risk but leave risks from authorised users misusing information. A list of planned controls alone does not establish that high risk has been resolved.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). Consult the NDPC before processing because residual high risk remains. Satisfy applicable filing requirements separately."
        },
        "no": {
          "nextQuestion": null,
          "message": "Conduct a Nigeria-specific DPIA before processing. Describe the operations and purpose, assess necessity and proportionality, identify risks to individuals, and document safeguards (NDPA section 28(4)). Document the safeguards and residual-risk decision, and satisfy any applicable filing requirement."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "DPIA screening is unresolved. Obtain a further assessment before starting processing; do not treat uncertainty as a finding that no DPIA is needed."
        }
      },
      "helpReference": "NDPA section 28(2); GAID article 28(9)."
    }
  ],
  "guidance": [
    "Use GAID Schedule 4, address privacy by design and default, obtain vetting by an NDPC-accredited certified DPO and an accredited certified DPO’s signature on the submitted assessment. Include DPIA outcomes in CAR where CAR is filed (article 28(4)–(5), (11)–(13)).",
    "For pre-existing processing, assess historic compliance and remediation. GAID article 28(8) uses four months from issuance for software processing sensitive personal data; article 28(10) uses six months from issuance for relevant existing processing. From 20 March 2025 these point to 20 July and 20 September 2025. The four-month date precedes the reported general effective date of 19 September 2025: this tension needs legal review. Both are historical dates, not a new grace period from today.",
    "An express trigger is independent of a general low-risk conclusion. Filing the DPIA and consulting about residual high risk are separate actions."
  ],
  "links": [
    {
      "label": "NDPC services",
      "url": "https://services.ndpc.gov.ng/"
    }
  ]
};
