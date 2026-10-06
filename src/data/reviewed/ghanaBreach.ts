import type { ReviewedAssessment } from "./types";

export const ghanaBreach: ReviewedAssessment = {
  "packet": "GH-BREACH-0.1",
  "title": "Data Breach Notification — Ghana",
  "intro": "Section 31 addresses a controller or third party processing under its authority. Notification is not limited to high-risk incidents and does not have a statutory 72-hour allowance.",
  "questions": [
    {
      "id": 1,
      "text": "Are there reasonable grounds to believe an unauthorised person accessed or acquired the personal data?",
      "tooltip": "Act 843 section 31; DPC Incident / Data Breach Report Form.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No statutory access/acquisition trigger is established on these facts. Assess the DPC form’s broader loss/damage reporting position, escalate and investigate before deciding against a report. Absence of proven exfiltration is not a blanket exemption."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. Assess the DPC’s broader loss/damage reporting position."
        }
      }
    },
    {
      "id": 2,
      "text": "Have the security agencies or DPC instructed that notifying data subjects would impede a criminal investigation?",
      "tooltip": "Act 843 section 31(3)–(4). Embarrassment, an internal HR request or an incomplete investigation is not the specified instruction.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Continue DPC notification as soon as reasonably practicable after discovery. Record and follow the specific instruction to delay subject notification under section 31(4). The instruction does not exempt authority reporting."
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the Data Protection Commission (DPC) and affected data subjects as soon as reasonably practicable after discovery of reasonable grounds for unauthorised access or acquisition. Low risk does not remove that trigger. Use the official incident form and incidents@dataprotection.org.gh."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Notify the Data Protection Commission (DPC) and affected data subjects as soon as reasonably practicable after discovery of reasonable grounds for unauthorised access or acquisition. Low risk does not remove that trigger. Use the official incident form and incidents@dataprotection.org.gh. Do not assume a lawful delay to subject notification without the specified instruction."
        }
      }
    }
  ],
  "guidance": [
    "Record occurrence, discovery, first legally relevant awareness or belief, escalation, notifications and follow-up separately. Hour limits mean elapsed hours, including weekends, not business hours. Sector, cyber-incident, contractual or criminal-law duties may also apply. Preserve evidence, contain the incident and report in parallel; uncertainty or an incomplete investigation does not create an extension.",
    "The statutory wording concerns reasonable grounds for unauthorised access or acquisition. The DPC incident form also covers loss or damage; that is a broader administrative reporting position, not a rewritten statutory trigger. Pure destruction or unavailability needs prompt assessment rather than a categorical “no report”.",
    "The official form instructs sending the completed report to incidents@dataprotection.org.gh without delay. Restore system security alongside notification. Provide individuals with sufficient information to take protective measures and the unauthorised recipient’s identity if known.",
    "Only the specified security-agency or DPC instruction that notification would impede a criminal investigation permits the section 31(4) delay to individuals. Embarrassment or an internal HR request does not meet that condition. The Commission may direct publicity to protect affected people."
  ],
  "links": [
    {
      "label": "DPC Incident / Data Breach Report Form",
      "url": "https://dpc.gov.gh/wp-content/uploads/2025/07/INCIDENT-BREACH-REPORT-FORM-DPC-SAMPLE.pdf"
    }
  ]
};
