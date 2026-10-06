import type { ReviewedAssessment } from "./types";

export const ugandaBreach: ReviewedAssessment = {
  "packet": "UG-BREACH-0.1",
  "title": "Data Breach Notification — Uganda",
  "intro": "Collectors, controllers and processors have a direct regulator-reporting duty when the statutory belief arises. Notification to a client does not replace that duty.",
  "questions": [
    {
      "id": 1,
      "text": "Do you believe personal data has been accessed or acquired by an unauthorised person?",
      "tooltip": "Uganda Act section 23; Regulations 2021, regulation 33 and Schedule 1 Form 7.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Notify the Authority through PDPO immediately using Form 7. This duty applies to collectors, controllers and processors. Follow the Authority’s direction on notification to affected data subjects. A processor’s notice to its client does not displace its direct PDPO duty. Do not wait for containment or investigation to finish."
        },
        "no": {
          "nextQuestion": null,
          "message": "The statutory access/acquisition belief has not been established. Escalate and investigate promptly, document the assessment and reassess immediately if that belief arises. This is not a blanket exemption from incident reporting."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      }
    }
  ],
  "guidance": [
    "Record occurrence, discovery, first legally relevant awareness or belief, escalation, notifications and follow-up separately. Hour limits mean elapsed hours, including weekends, not business hours. Sector, cyber-incident, contractual or criminal-law duties may also apply. Preserve evidence, contain the incident and report in parallel; uncertainty or an incomplete investigation does not create an extension.",
    "Section 23 refers to the notifier’s belief; regulation 33(1) says immediately after occurrence. Record both occurrence and discovery/belief and act immediately when the trigger is met. Neither provision supplies a general 72-hour allowance, low-risk exemption or encryption exemption.",
    "Form 7 calls for the nature of the breach, affected data, categories and approximate number of people, likely consequences, remedial measures, and DPO or other contact details. The Authority decides whether affected individuals must be notified.",
    "The PDPO homepage has a “Report a Breach” service which routes into account onboarding. The approved research did not test submission inside an account; use the official route and seek PDPO assistance promptly if access fails."
  ],
  "links": [
    {
      "label": "PDPO — Report a Breach service",
      "url": "https://pdpo.go.ug/"
    },
    {
      "label": "Official Form 7",
      "url": "https://pdpo.go.ug/media/2022/02/Form_7_-_Notification_of_Data_Breach.pdf"
    }
  ]
};
