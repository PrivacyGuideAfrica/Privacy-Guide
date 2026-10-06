import type { ReviewedAssessment } from "./types";

export const nigeriaScope: ReviewedAssessment = {
  "packet": "NG-SCOPE-0.1",
  "title": "NDPA Applicability in Nigeria",
  "intro": "Assess the processing activity, Nigeria’s territorial connections, and the precise extent of any exemption.",
  "questions": [
    {
      "id": 1,
      "text": "Are you processing personal data relating to an identifiable individual?",
      "tooltip": "NDPA sections 2 and 65.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No NDPA personal-data processing is established on these answers. Document why the information is not personal data and reassess changes."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 2,
      "text": "Is the controller or processor established, resident or operating in Nigeria, or does the processing take place in Nigeria?",
      "tooltip": "NDPA section 2(2)(a)–(b). Assess processing location separately from incorporation.",
      "options": {
        "yes": {
          "nextQuestion": 4
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
      "text": "Does an organisation outside Nigeria process personal data of a data subject in Nigeria?",
      "tooltip": "NDPA section 2(2)(c). Local incorporation is not necessary, and this question does not add a goods/services or monitoring condition.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": null,
          "message": "No Nigerian territorial connection identified on the stated facts. Document the scope assessment and check other applicable laws."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      }
    },
    {
      "id": 4,
      "text": "Is this processing solely for personal or household purposes without violating another person’s fundamental right to privacy?",
      "tooltip": "NDPA section 3(1); GAID article 6. This is not a general organisational exemption.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "The conditional personal or household exclusion may apply under section 3(1). Keep the purpose and privacy proviso under review. Commercial, professional or mixed use needs a separate assessment."
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
      "text": "Are you claiming a specific statutory or NDPC regulatory exemption for this particular processing?",
      "tooltip": "NDPA section 3(2)–(4); GAID articles 3(2), 5–6.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A section 3(2) exemption is purpose-specific and affects specified Part V obligations. Sections 24, 25, 32 and 40 remain applicable, and Part VI rights are not exempted by that provision. Do not treat the organisation as outside the whole Act. Check the exact purpose, authority, provision and conditions before applying it. If unresolved, obtain a legal determination."
        },
        "no": {
          "nextQuestion": null,
          "message": "The NDPA applies to this processing on the stated facts. No exemption has been established. Assess the applicable duties; this screening does not itself demonstrate compliance."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "A section 3(2) exemption is purpose-specific and affects specified Part V obligations. Sections 24, 25, 32 and 40 remain applicable, and Part VI rights are not exempted by that provision. Do not treat the organisation as outside the whole Act. Resolve the claimed exemption before relying on it."
        }
      }
    }
  ],
  "guidance": [
    "A section 3(2) exemption is purpose-specific and affects specified Part V obligations. Sections 24, 25, 32 and 40 remain applicable, and Part VI rights are not exempted by that provision. Do not treat the organisation as outside the whole Act.",
    "Crime prevention/prosecution, a national public health emergency and national security require the relevant competent-authority and purpose conditions under section 3(2)(a)–(c). Ordinary corporate anti-fraud monitoring and routine healthcare are not automatically exempt.",
    "Journalistic, educational, artistic or literary publication requires the public-interest and incompatibility analysis in section 3(2)(d). School administration and all media processing are not automatically exempt.",
    "Legal claims require processing necessary to establish, exercise or defend the particular claim, including out-of-court procedures (section 3(2)(e)). A law firm’s payroll is not exempt merely because a law firm processes it.",
    "For a claimed regulatory exemption, identify the actual NDPC regulation, processing and conditions under section 3(3)–(4). The Act prevails over conflicting GAID wording under article 3(2)."
  ],
  "links": []
};
