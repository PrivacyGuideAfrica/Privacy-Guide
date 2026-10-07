import type { ReviewedAssessment } from "./types";

export const nigeriaBreach: ReviewedAssessment = {
  "packet": "NG-BREACH-0.1",
  "title": "Data Breach Notification — Nigeria",
  "intro": "Separate controller risk-based NDPC reporting, high-risk communication to individuals, and processor escalation. If you act in both roles, assess both sets of duties.",
  "questions": [
    {
      "id": 1,
      "text": "Has a security incident caused accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data?",
      "tooltip": "A personal data breach is a security incident affecting information about identifiable people. Examples include sending customer records to the wrong recipient, unauthorised access to employee files, or accidental loss of those files. It is not limited to hacking.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No personal data breach has been established on these answers. Document the assessment, investigate any unresolved incident and reassess new facts."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      },
      "helpReference": "NDPA sections 40 and 65; GAID article 33."
    },
    {
      "id": 2,
      "text": "Are you the controller for the affected processing (including where you also act as a processor)?",
      "tooltip": "A controller decides why and how the affected data is processed. For example, an employer usually makes those decisions for its employee records. Assess your role for this incident, even if you act as a processor for other activities.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. If acting as processor, notify the engaging controller or processor on awareness."
        }
      },
      "helpReference": "NDPA section 40 distinguishes controller and processor duties."
    },
    {
      "id": 3,
      "text": "Are you processing the affected data on behalf of a controller or another processor?",
      "tooltip": "A processor handles data on another organisation’s instructions. For example, a payroll service may process employee records for an employer. A subcontracted processor may handle data on behalf of another processor.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "As a processor, notify the controller or processor that engaged you on becoming aware of the personal data breach. Supply required details and assist its response. Do not wait for its regulator deadline or the next working day."
        },
        "no": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. Determine your role urgently; do not assume no reporting duty."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      },
      "helpReference": "NDPA section 40(1)."
    },
    {
      "id": 4,
      "text": "Is the breach likely to result in risk to individuals’ rights and freedoms?",
      "tooltip": "Consider possible harm to the people affected, such as fraud, loss of confidentiality, discrimination or loss of control over their data. Assess the information involved, who could access it and how likely harm is. Encryption is a factor to examine, not an automatic exemption.",
      "options": {
        "yes": {
          "nextQuestion": 5
        },
        "no": {
          "nextQuestion": null,
          "message": "No ordinary section 40(2) notification trigger has been established on the documented facts. Record the breach and reasoning; reassess new facts and any immediate-containment reporting duty under GAID article 33(4)."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      },
      "helpReference": "NDPA section 40(2), (7); GAID article 33. Encryption and subsequent measures are risk factors, not automatic exemptions."
    },
    {
      "id": 5,
      "text": "Is that risk high?",
      "tooltip": "High risk involves the likelihood and seriousness of harm to individuals. For example, exposed identity documents combined with financial details may create more serious consequences than limited, low-sensitivity information. Record the reasons for the assessment.",
      "options": {
        "yes": {
          "nextQuestion": 6
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the NDPC within 72 elapsed hours of awareness of the breach likely to create risk to individuals (section 40(2)). Submit through the NDPC NIMP breach service. If already late, notify promptly and explain the delay. No high-risk communication duty is established on these answers; reassess new facts and record the decision."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Notify the NDPC within 72 elapsed hours of awareness of the breach likely to create risk to individuals (section 40(2)). Submit through the NDPC NIMP breach service. If already late, notify promptly and explain the delay. The high-risk subject-communication assessment remains unresolved; obtain immediate assessment."
        }
      },
      "helpReference": "NDPA section 40(2), (3), (7)."
    },
    {
      "id": 6,
      "text": "Is direct communication with affected individuals feasible without disproportionate effort or excessive cost?",
      "tooltip": "Direct communication means reaching the affected people individually, for example by email or letter. Assess practical feasibility, effort and cost in the circumstances, rather than assuming that inconvenience alone justifies a public notice.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Notify the NDPC within 72 elapsed hours of awareness of the breach likely to create risk to individuals (section 40(2)). Submit through the NDPC NIMP breach service. If already late, notify promptly and explain the delay. Communicate with affected data subjects immediately because high risk is established, including protective steps they can take."
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the NDPC within 72 elapsed hours of awareness of the breach likely to create risk to individuals (section 40(2)). Submit through the NDPC NIMP breach service. If already late, notify promptly and explain the delay. Communicate the high-risk breach immediately through effective public communication where direct contact is disproportionate, infeasible or excessively costly. Record the reason for that route."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Notify the NDPC within 72 elapsed hours of awareness of the breach likely to create risk to individuals (section 40(2)). Submit through the NDPC NIMP breach service. If already late, notify promptly and explain the delay. High-risk communication is required immediately; urgently establish an effective direct or permitted public route."
        }
      },
      "helpReference": "NDPA section 40(3) and communication provisions."
    }
  ],
  "guidance": [
    "Record occurrence, discovery, first legally relevant awareness or belief, escalation, notifications and follow-up separately. Hour limits mean elapsed hours, including weekends, not business hours. Sector, cyber-incident, contractual or criminal-law duties may also apply. Preserve evidence, contain the incident and report in parallel; uncertainty or an incomplete investigation does not create an extension.",
    "Keep records of every personal data breach and the decision about reporting. Information may be supplied in phases without undue delay. GAID article 33(4) also calls for immediate information where it may assist containment; a 72-hour outer limit is not a reason to delay useful information.",
    "Encryption, de-identification and subsequent protective measures are factors in the section 40(7) risk assessment, not blanket exemptions. Assess the actual likelihood and severity of harm.",
    "For a controller first aware at 10:00 Monday, the 72-hour outer limit is 10:00 Thursday where the risk trigger is met. A processor’s duty arises on awareness, without a 72-hour allowance."
  ],
  "links": [
    {
      "label": "Report to the NDPC",
      "url": "https://services.ndpc.gov.ng/breach/"
    }
  ]
};
