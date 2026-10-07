import type { ReviewedAssessment } from "./types";

export const nigeriaAudit: ReviewedAssessment = {
  "packet": "NG-CAR-0.1",
  "title": "Annual Audit and CAR Requirements in Nigeria",
  "intro": "Distinguish periodic compliance audits, annual Compliance Audit Returns (CAR), and OHL registration renewal under GAID 2025.",
  "questions": [
    {
      "id": 1,
      "text": "Are you a controller, processor, or both, with relevant personal-data processing within Nigeria’s scope?",
      "tooltip": "A controller decides why and how data is processed; a processor acts on its behalf. Personal data relates to identifiable people, such as customers or employees. Assess the organisation’s Nigerian connections and activities before considering annual filing requirements.",
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
      },
      "helpReference": "NDPA section 2; GAID articles 8–10."
    },
    {
      "id": 2,
      "text": "Does your registration certificate or applicable NDPC designation establish UHL or EHL classification?",
      "tooltip": "UHL and EHL are NDPC registration classifications: Ultra-High Level and Extra-High Level. Check the certificate or applicable designation rather than guessing from the organisation’s size. For example, a sector-based designation can matter even with a modest number of local data subjects.",
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
      },
      "helpReference": "GAID articles 8–10, Schedule 7; updated Registration Guidance Notice paragraphs 1–4. A multinational with 150 local data subjects must not be excluded solely by count."
    },
    {
      "id": 3,
      "text": "Does your registration certificate or applicable NDPC designation establish OHL classification?",
      "tooltip": "OHL means Ordinary-High Level, an NDPC registration classification. Check the organisation’s certificate or applicable designation. This classification matters because its annual registration renewal treatment differs from the general Compliance Audit Return requirements.",
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
      },
      "helpReference": "GAID article 9(3) supplies the OHL annual-renewal exception to the general CAR wording."
    },
    {
      "id": 4,
      "text": "Is your OHL annual registration renewal current?",
      "tooltip": "Annual registration renewal keeps an OHL registration current; it is distinct from a Compliance Audit Return (CAR). Check the renewal record for the relevant year rather than relying only on the original registration certificate.",
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
      },
      "helpReference": "GAID articles 9(3), 10(1)–(5)."
    },
    {
      "id": 5,
      "text": "Have you assessed all designation criteria, including sector, commercial ICT services on another person’s data-capable device, and distinct data subjects processed in six months?",
      "tooltip": "Designation as a controller or processor of major importance can depend on the sector, specified activities and numbers of distinct people. For example, count people rather than repeated transactions, and check sector criteria even if the volume appears low.",
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
      },
      "helpReference": "Updated Registration Guidance Notice paragraphs 1–4; GAID Schedule 7. Designation is not solely based on volume."
    },
    {
      "id": 6,
      "text": "Does that documented assessment establish that you are not of major importance?",
      "tooltip": "Use a recorded assessment of all applicable designation criteria, not just a headcount. For example, being below a volume threshold does not resolve whether a sector or activity criterion applies. Seek clarification where classification boundaries are unresolved.",
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
      },
      "helpReference": "GAID articles 8, 10(1)–(6); Schedule 7 paragraph 4. Exactly 1,000 or 5,000 people are not cleanly allocated by the volume bands; seek classification if other criteria do not resolve this."
    },
    {
      "id": 7,
      "text": "Is there a specific NDPC instruction or a verified extension applicable to your entity and filing period?",
      "tooltip": "This means an official direction or verified extension that actually covers your organisation and filing period. For example, an extension for a previous year or another entity is not evidence that your current deadline changed.",
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
      },
      "helpReference": "GAID article 10; the approved research verified no general 2026 extension. A case-specific direction requires evidence."
    },
    {
      "id": 8,
      "text": "Was the entity legally established before 12 June 2023?",
      "tooltip": "Use the date the entity was legally established, such as the incorporation date in its official records. This is different from when it registered with the NDPC or first became a controller or processor of major importance.",
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
      },
      "helpReference": "GAID article 10(7)–(9). Establishment date, not the date of becoming major importance, determines this timing rule."
    },
    {
      "id": 9,
      "text": "Was the entity legally established after 12 June 2023?",
      "tooltip": "Check the entity’s legal establishment date in its official records. For example, the date of incorporation is distinct from the date of NDPC registration. Do not treat an entity established exactly on 12 June 2023 as falling before or after that date.",
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
      },
      "helpReference": "GAID article 10(7)–(8)."
    },
    {
      "id": 10,
      "text": "Is this the entity’s first CAR filing?",
      "tooltip": "A Compliance Audit Return (CAR) is a compliance filing, distinct from registration or registration renewal. Check whether the entity has previously filed a CAR; for example, holding a registration certificate does not show that a first CAR has been filed.",
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
      },
      "helpReference": "GAID article 10(8); NDPC FAQ is explanatory rather than a statutory amendment."
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
