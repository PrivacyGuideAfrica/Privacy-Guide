import type { ReviewedAssessment } from "./types";

export const nigeriaBasis: ReviewedAssessment = {
  "packet": "NG-BASIS-0.1",
  "title": "Lawful Basis Assessment — Nigeria",
  "intro": "Identify a possible section 25 basis for a specific purpose. More than one purpose may require a separate assessment; special processing conditions must also be checked.",
  "questions": [
    {
      "id": 1,
      "text": "Are you processing personal data to comply with a Nigerian legal obligation?",
      "tooltip": "NDPA section 25; GAID articles 16–26.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 2,
      "text": "Can you identify the actual applicable legal duty and why this processing is necessary to comply?",
      "tooltip": "NDPA section 25. Record the specific provision.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Legal Obligation may be available, subject to the identified duty and necessity. An internal policy alone is not a legal obligation. Example: data required by a specific statutory tax-reporting duty."
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 3,
      "text": "Is the processing for a contract with the data subject or pre-contract steps requested by that person?",
      "tooltip": "NDPA section 25.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": 5
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 4,
      "text": "Is this processing necessary for that contract or those requested steps, rather than merely useful or written into a term?",
      "tooltip": "NDPA section 25; GAID contract conditions.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Contractual Necessity may be available for the necessary processing. Example: a delivery address needed to fulfil a purchase, not unrelated advertising."
        },
        "no": {
          "nextQuestion": 5
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 5,
      "text": "Is this processing intended to protect a person’s life or essential personal interests?",
      "tooltip": "NDPA section 25. Convenience or ordinary financial interests are insufficient.",
      "options": {
        "yes": {
          "nextQuestion": 6
        },
        "no": {
          "nextQuestion": 7
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 6,
      "text": "Can you identify the vital interest and why this processing is necessary to protect it?",
      "tooltip": "NDPA section 25; sections 30–31 where applicable.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Vital Interests may be available where the identified life or essential personal interest makes processing necessary. Example: emergency disclosure needed for urgent medical assistance. Check additional conditions for sensitive data separately."
        },
        "no": {
          "nextQuestion": 7
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 7,
      "text": "Is this processing for a task in the public interest or the exercise of vested official authority?",
      "tooltip": "NDPA section 25.",
      "options": {
        "yes": {
          "nextQuestion": 8
        },
        "no": {
          "nextQuestion": 9
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 8,
      "text": "Can you identify the relevant task or vested authority and why the processing is necessary?",
      "tooltip": "NDPA section 25; GAID public-interest conditions.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Public Interest or Official Authority may be available for the identified necessary processing. A useful commercial service does not automatically qualify as a public-interest task."
        },
        "no": {
          "nextQuestion": 9
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 9,
      "text": "Is there an identified legitimate interest pursued by you or a third party?",
      "tooltip": "NDPA section 25(1)–(2); GAID article 26.",
      "options": {
        "yes": {
          "nextQuestion": 10
        },
        "no": {
          "nextQuestion": 11
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 10,
      "text": "Have you completed a prior legitimate interests assessment establishing necessity, reasonable expectations, compatibility and that individuals’ rights and interests do not override the interest?",
      "tooltip": "GAID article 26 requires a prior LIA; reasonable expectations and statutory exclusions matter.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Legitimate Interests may be available subject to the documented prior LIA, section 25(2) and GAID article 26 safeguards. Example: proportionate account security supported by the assessment. Do not proceed on an unsupported balancing conclusion."
        },
        "no": {
          "nextQuestion": 11
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 11,
      "text": "Can you obtain and demonstrate freely and intentionally given, specific, informed, affirmative consent for this purpose, with a genuine choice and withdrawal?",
      "tooltip": "NDPA sections 25–26; GAID articles 17–19. Mandatory employee monitoring must not assume freely given consent.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Consent may be available only if its requirements are met and it has not been withdrawn. Explain withdrawal and retain evidence. Silence, inactivity and preselected confirmations do not suffice. Example: a genuinely optional newsletter with a separate opt-in."
        },
        "no": {
          "nextQuestion": null,
          "message": "No lawful basis has been established from these answers. Reassess the purpose and conditions before processing. Consent is not an automatic fallback and cannot legalise an unlawful purpose."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "No lawful basis has been established from these answers. Reassess the purpose and conditions before processing. Consent is not an automatic fallback and cannot legalise an unlawful purpose. Resolve whether valid consent is possible rather than assuming it."
        }
      }
    }
  ],
  "guidance": [
    "An ordinary section 25 basis does not by itself establish the additional condition for sensitive data, children, solely automated significant decisions or international transfers. Assess sections 30, 31, 37 and 41–43 independently, including occupational health records.",
    "GAID article 18 calls for consent for direct marketing and several special categories of processing, but is expressly subject to the Act. The Act also permits specified non-consent conditions for sensitive data, children, automated decisions and transfers. Apply statutory priority under GAID article 3(2); neither ignore article 18 nor assume consent is always the only permitted condition.",
    "GAID article 17(8)’s limited constructive/implied-consent discussion must be read against section 26(3), (7), which reject silence or inactivity and require affirmative consent. Continued browsing or closing a notice does not establish general cookie consent. Article 19 distinguishes necessary cookies from other tools."
  ],
  "links": []
};
