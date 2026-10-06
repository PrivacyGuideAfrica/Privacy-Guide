import type { ReviewedAssessment } from "./types";

export const nigeriaAudit: ReviewedAssessment = {
  "packet": "NG-CAR-0.1",
  "title": "Annual Audit and CAR Requirements in Nigeria",
  "intro": "Distinguish periodic compliance audits, annual Compliance Audit Returns (CAR), and OHL registration renewal under GAID 2025.",
  "questions": [
    {
      "id": 1,
      "text": "Are you a controller, processor, or both, with relevant personal-data processing within Nigeria’s scope?",
      "tooltip": "NDPA section 2; GAID articles 8–10.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No routine NDPA CAR duty is established by these scope answers. Document the assessment and check any specific NDPC direction."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        }
      }
    },
    {
      "id": 2,
      "text": "Does your registration certificate or applicable NDPC designation establish UHL or EHL classification?",
      "tooltip": "GAID articles 8–10, Schedule 7; updated Registration Guidance Notice paragraphs 1–4. A multinational with 150 local data subjects must not be excluded solely by count.",
      "options": {
        "yes": {
          "nextQuestion": 7
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        }
      }
    },
    {
      "id": 3,
      "text": "Does your registration certificate or applicable NDPC designation establish OHL classification?",
      "tooltip": "GAID article 9(3) supplies the OHL annual-renewal exception to the general CAR wording.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": 5
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        }
      }
    },
    {
      "id": 4,
      "text": "Is your OHL annual registration renewal current?",
      "tooltip": "GAID articles 9(3), 10(1)–(5).",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Annual registration renewal is the OHL requirement. When annual registration is renewed, article 9(3) says annual CAR is not required. Periodic internal audits and other compliance duties remain."
        },
        "no": {
          "nextQuestion": null,
          "message": "Complete or remedy your OHL annual registration renewal. Do not rely on the article 9(3) CAR exception while renewal remains unresolved. Confirm overdue obligations with the NDPC; internal audit duties remain."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Check your OHL renewal status with the NDPC before relying on the CAR exception. Internal audit duties remain."
        }
      }
    },
    {
      "id": 5,
      "text": "Have you assessed all designation criteria, including sector, commercial ICT services on another person’s data-capable device, and distinct data subjects processed in six months?",
      "tooltip": "Updated Registration Guidance Notice paragraphs 1–4; GAID Schedule 7. Designation is not solely based on volume.",
      "options": {
        "yes": {
          "nextQuestion": 6
        },
        "no": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        }
      }
    },
    {
      "id": 6,
      "text": "Does that documented assessment establish that you are not of major importance?",
      "tooltip": "GAID articles 8, 10(1)–(6); Schedule 7 paragraph 4. Exactly 1,000 or 5,000 people are not cleanly allocated by the volume bands; seek classification if other criteria do not resolve this.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "No routine annual CAR requirement is identified solely on your documented non-major-importance status. Assess periodic compliance audit obligations and any specific NDPC direction; retain the classification rationale."
        },
        "no": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Determine classification before relying on a filing exemption or deadline. Check the registration certificate, sector designation and all applicable non-volume criteria with the NDPC. Do not assume OHL from low headcount."
        }
      }
    },
    {
      "id": 7,
      "text": "Is there a specific NDPC instruction or a verified extension applicable to your entity and filing period?",
      "tooltip": "GAID article 10; the approved research verified no general 2026 extension. A case-specific direction requires evidence.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Annual CAR applies to UHL/EHL. Verify the scope and timing of the specific NDPC instruction or extension before applying it. Do not infer a general extension for other entities or periods."
        },
        "no": {
          "nextQuestion": 8
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. Check for specific instructions and confirm your establishment date before selecting a deadline."
        }
      }
    },
    {
      "id": 8,
      "text": "Was the entity legally established before 12 June 2023?",
      "tooltip": "GAID article 10(7)–(9). Establishment date, not the date of becoming major importance, determines this timing rule.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. File no later than 31 March each year under article 10(7). If overdue, address filing and remediation now; do not wait for the next annual deadline."
        },
        "no": {
          "nextQuestion": 9
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. Establishment date is unresolved: obtain confirmation without assuming a new grace period."
        }
      }
    },
    {
      "id": 9,
      "text": "Was the entity legally established after 12 June 2023?",
      "tooltip": "GAID article 10(7)–(8).",
      "options": {
        "yes": {
          "nextQuestion": 10
        },
        "no": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. Establishment on 12 June 2023 is not expressly resolved by the before/after wording. Obtain NDPC confirmation; do not assume an extension."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. Confirm the legal establishment date; no automatic extension follows from uncertainty."
        }
      }
    },
    {
      "id": 10,
      "text": "Is this the entity’s first CAR filing?",
      "tooltip": "GAID article 10(8); NDPC FAQ is explanatory rather than a statutory amendment.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. The first CAR is due no later than 15 months after legal establishment under article 10(8), not 18 months. For example, establishment on 1 January 2026 gives an outer date of 1 April 2027. If that date has passed, address overdue filing now."
        },
        "no": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. Subsequent filing is annual. Article 10(8) does not expressly resolve whether it follows the anniversary or 31 March; the NDPC FAQ gives a general March deadline. Obtain an entity-specific position if the difference matters, without assuming an extension."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Annual CAR filing is required for your confirmed UHL or EHL classification. File through a licensed DPCO unless the NDPC approves another route. Confirm whether this is a first or subsequent filing and address any overdue compliance."
        }
      }
    }
  ],
  "guidance": [
    "Classification comes first. The updated notice includes more than 200 data subjects in six months, commercial ICT services on another person’s data-capable device, and listed sectors, subject to its terms. UHL examples include commercial banks, telecommunications, insurance, multinationals, payment gateways and fintechs. EHL examples include MDAs, microfinance and mortgage banks, higher institutions and secondary/tertiary hospitals. OHL examples include primary/secondary schools, certain health providers and small hotels. Verify the applicable designation rather than using examples as an exhaustive classification test.",
    "Volume-only bands use “over” 200, 1,000 and 5,000 and “less than” upper bounds. Exactly 1,000 and exactly 5,000 are ambiguous if sector and other criteria do not resolve classification. Seek manual classification rather than silently changing the boundaries.",
    "UHL/EHL registration is once, subject to significant-change duties; annual CAR remains separate. OHL renews registration annually. The FAQ’s fewer-than-200 OHL example does not replace article 9(3)’s classification-based exception.",
    "Use GAID Schedule 2 and the NDPC automated platform for CAR. Article 10(9) states a 50% administrative penalty in addition to the stipulated filing fee for overdue CAR. Confirm the applicable fee and any entity-specific direction. Portal availability alone does not establish that a particular submission has been completed.",
    "GAID ceased application of NDPR as the regulatory instrument while preserving prior acts; do not discard historic filings or use obsolete NDPR thresholds. The reported GAID effective date is 19 September 2025."
  ],
  "links": [
    {
      "label": "NDPC registration and CAR services",
      "url": "https://services.ndpc.gov.ng/"
    }
  ]
};
