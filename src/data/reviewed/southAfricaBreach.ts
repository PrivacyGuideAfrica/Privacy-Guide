import type { ReviewedAssessment } from "./types";

export const southAfricaBreach: ReviewedAssessment = {
  "packet": "ZA-BREACH-0.1",
  "title": "Security Compromise Notification — South Africa",
  "intro": "Separate POPIA section 21 operator escalation from section 22 responsible-party reporting. If acting in both roles, assess both duties.",
  "questions": [
    {
      "id": 1,
      "text": "Are there reasonable grounds to believe an unauthorised person accessed or acquired personal information?",
      "tooltip": "POPIA sections 21(2), 22; Information Regulator security-compromises fact sheet (August 2025).",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No statutory access/acquisition trigger is established on these facts. Assess the Regulator’s broader all-compromises reporting guidance and seek prompt incident/legal assessment before deciding against reporting. No proven exfiltration does not automatically establish an exemption."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. Assess the Regulator’s broader all-compromises reporting guidance."
        }
      }
    },
    {
      "id": 2,
      "text": "Are you acting only as an operator for the affected processing?",
      "tooltip": "POPIA sections 21(2), 22. If also responsible party, assess that role separately.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Notify the responsible party immediately under section 21(2). The responsible party makes the section 22 reports. Provide relevant information promptly, including on weekends."
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. An operator must notify the responsible party immediately once the trigger is met."
        }
      }
    },
    {
      "id": 3,
      "text": "Are you the responsible party for the affected processing?",
      "tooltip": "POPIA sections 21–22.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. Establish your role urgently; do not assume that no reporting duty applies."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      }
    },
    {
      "id": 4,
      "text": "Can the identity of affected data subjects be established?",
      "tooltip": "POPIA section 22(1)(a)–(b). This is different from assuming all data are effectively de-identified.",
      "options": {
        "yes": {
          "nextQuestion": 5
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the Information Regulator through eServices as soon as reasonably possible. Document why affected subjects’ identities cannot be established. Section 22(1)(b) qualifies notification to those subjects only; Regulator notification remains required."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Regulator notification remains required as soon as reasonably possible. Urgently establish which affected subjects can be identified and notified; uncertainty does not excuse the Regulator report."
        }
      }
    },
    {
      "id": 5,
      "text": "Has the specified public body or Regulator determined that subject notification would impede a criminal investigation?",
      "tooltip": "POPIA section 22(2)–(3). Timing also takes account of legitimate law-enforcement needs and measures reasonably necessary to restore system integrity.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Regulator notification remains required as soon as reasonably possible. Document the section 22(3) determination and follow its terms for delaying subject notification. Do not treat this as an exemption from Regulator reporting."
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the Information Regulator through eServices and identifiable affected data subjects as soon as reasonably possible after discovery. Low risk does not remove the duty once the section 22 trigger is met."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Notify the Information Regulator through eServices and identifiable affected data subjects as soon as reasonably possible after discovery. Low risk does not remove the duty once the section 22 trigger is met. Do not assume a permitted subject-notification delay without the specified determination."
        }
      }
    }
  ],
  "guidance": [
    "Record occurrence, discovery, first legally relevant awareness or belief, escalation, notifications and follow-up separately. Hour limits mean elapsed hours, including weekends, not business hours. Sector, cyber-incident, contractual or criminal-law duties may also apply. Preserve evidence, contain the incident and report in parallel; uncertainty or an incomplete investigation does not create an extension.",
    "POPIA section 22 uses reasonable grounds for unauthorised access or acquisition. The Regulator’s 2025 fact sheet takes a broader all-compromises reporting position. Explain and assess this distinction for loss, destruction or unavailability; neither low risk nor uncertainty about exfiltration creates a general exemption.",
    "Authority and identifiable-subject notification is as soon as reasonably possible, taking account of legitimate law-enforcement needs and measures reasonably necessary to restore system integrity. There is no statutory 72-hour safe period.",
    "Use the Regulator’s eServices reporting route, specified from 1 April 2025. Notify individuals in writing with likely consequences, measures taken or proposed, protective steps they can take, and the unauthorised person’s identity if known. A permitted delay or inability to identify subjects does not remove Regulator reporting."
  ],
  "links": [
    {
      "label": "Information Regulator eServices",
      "url": "https://eservices.inforegulator.org.za/"
    },
    {
      "label": "Security-compromises fact sheet",
      "url": "https://inforegulator.org.za/2025/08/19/fact-sheet-handling-of-security-compromises/"
    }
  ]
};
