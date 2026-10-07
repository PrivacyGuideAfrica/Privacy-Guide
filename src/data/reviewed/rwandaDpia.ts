import type { ReviewedAssessment } from "./types";

export const rwandaDpia: ReviewedAssessment = {
  "packet": "RW-DPIA-0.1",
  "title": "Data Protection Impact Assessment (DPIA) in Rwanda",
  "intro": "Screen article 38 and NCSA’s December 2023 DPIA Guide. Express triggers and guidance examples are considered before the general high-risk question.",
  "questions": [
    {
      "id": 1,
      "text": "Does the activity involve systematic and extensive personal evaluation based on automated processing (including profiling), on which decisions with effects on those people are based?",
      "tooltip": "This means organised and extensive evaluation of people using automated processing, with decisions based on it that affect them. For example, automated profiling used to decide access to a service may be relevant. Routine automation alone does not meet every condition.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles."
        },
        "no": {
          "nextQuestion": 2
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "Law 058/2021 article 38. Preserve the systematic, extensive and consequential conditions; this is not every automated operation."
    },
    {
      "id": 2,
      "text": "Does the activity involve large-scale processing of sensitive personal data?",
      "tooltip": "Sensitive personal data needs particular protection, such as health or biometric information. Large scale depends on factors including the number of people, data volume and variety, duration and geographic reach. For example, a nationwide health database differs from a small, occasional record set.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles."
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "Article 38; NCSA DPIA Guide pages 3–7. Consider people, data range/volume, duration and geographic extent, not a universal numerical threshold."
    },
    {
      "id": 3,
      "text": "Does the activity involve systematic monitoring of a publicly accessible area on a large scale?",
      "tooltip": "Systematic monitoring is organised or repeated observation. This trigger also requires a publicly accessible area and a large scale, such as a broad network of cameras monitoring public spaces. Other monitoring can still create high risk under a different criterion.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles."
        },
        "no": {
          "nextQuestion": 4
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "Article 38. All three conditions matter; smaller/private monitoring may still present other high risk."
    },
    {
      "id": 4,
      "text": "Does the activity involve new technology in processing personal data?",
      "tooltip": "Consider technology that introduces new ways to collect, analyse or use personal data. Examples discussed in the NCSA guide include artificial intelligence and connected devices. Assess the privacy effects in the particular use case.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles."
        },
        "no": {
          "nextQuestion": 5
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "Article 38; NCSA Guide page 6 discusses AI, neuro-measurement and IoT."
    },
    {
      "id": 5,
      "text": "Does the activity involve vulnerable data subjects, including children, people with disabilities, asylum seekers, refugees, older people or a power imbalance?",
      "tooltip": "Vulnerable data subjects may have less ability to understand, object to or influence processing because of their circumstances or a power imbalance. Examples include children, refugees and employees. Children aged 16 or 17 are not excluded from this risk consideration.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles. Vulnerability is identified in NCSA guidance under article 38; the under-16 consent rule is not a DPIA age threshold."
        },
        "no": {
          "nextQuestion": 6
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "NCSA Guide pages 5–6. Children aged 16 or 17 are not excluded. Article 9’s under-16 parental-consent rule is distinct."
    },
    {
      "id": 6,
      "text": "Does the activity match or combine datasets from different purposes or controllers beyond individuals’ reasonable expectations?",
      "tooltip": "This means combining information gathered for different purposes or by different controllers in ways people would not reasonably expect. For example, joining unrelated records to build a new profile can reveal more about someone than either dataset alone.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles. Assess the combination and expectations described by NCSA guidance."
        },
        "no": {
          "nextQuestion": 7
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "NCSA Guide page 6. This does not automatically include every routine database join."
    },
    {
      "id": 7,
      "text": "Otherwise, is the processing likely to create high risk to individuals’ rights and freedoms?",
      "tooltip": "Consider whether people could face serious harm, such as exclusion from services, discrimination, loss of confidentiality or intrusive surveillance. Assess both likelihood and severity, including risks that do not fit neatly into the earlier questions.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A Rwanda DPIA trigger is identified. Conduct the DPIA before processing, documenting operations and purpose, necessity and proportionality, risks, safeguards and review arrangements. The controller is primarily responsible and the processor assists; article 38 addresses both roles."
        },
        "no": {
          "nextQuestion": null,
          "message": "No DPIA trigger identified on the documented facts. Retain the screening rationale and reassess material changes. The listed examples are not an exhaustive safe list; other processing and transfer obligations remain."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result."
        }
      },
      "helpReference": "Article 38; NCSA DPIA Guide pages 3–7."
    }
  ],
  "guidance": [
    "Article 38’s automated-evaluation, large-scale sensitive-data, large-scale public-monitoring and new-technology triggers must be read with their actual conditions. A single doctor’s patient records do not automatically meet the large-scale limb, but vulnerability or other high risk can still require a DPIA.",
    "NCSA’s guide identifies vulnerable people and combinations beyond reasonable expectations as high-risk operations. The parental-consent rule for children under 16 in article 9, including its vital-interests exception, is not a DPIA threshold and does not exclude 16- or 17-year-olds from vulnerability analysis.",
    "Consult NCSA where unsure whether a DPIA is mandatory, whether one assessment can cover several operations, or about other DPIA doubts. Supply the full assessment during consultation or on request. Do not treat uncertainty as a no-DPIA result.",
    "Unresolved high risk is a reason to seek advice and prevent an unreviewed go-live. The retrieved Rwanda provisions do not reproduce Nigeria’s residual-high-risk consultation formula; do not present that formula as Rwanda’s law.",
    "The DPO’s 5 March 2026 workshop concerned draft regulations. A consultation announcement is not an enacted replacement. The approved research did not verify a later final instrument changing these findings."
  ],
  "links": [
    {
      "label": "NCSA DPIA Guide and form",
      "url": "https://dpo.gov.rw/fileadmin/DPO/ComplianceTools/-_dpia-guide-and-form.pdf"
    }
  ]
};
