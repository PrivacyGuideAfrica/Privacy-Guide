import type { ReviewedAssessment } from "./types";

export const rwandaBreach: ReviewedAssessment = {
  "packet": "RW-BREACH-0.1",
  "title": "Data Breach Notification — Rwanda",
  "intro": "Authority notification is not conditional on high risk. Controller reporting and high-risk communication to individuals are separate duties. If you act in both roles, assess both.",
  "questions": [
    {
      "id": 1,
      "text": "Have you become aware of a personal data breach?",
      "tooltip": "A personal data breach affects information about identifiable individuals through unauthorised destruction, loss, alteration or disclosure. For example, losing customer records or disclosing them to the wrong recipient can be a breach even without a cyberattack.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No personal data breach is established on these answers. Document and investigate any unresolved incident, and reassess promptly."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      },
      "helpReference": "Rwanda Law 058/2021, articles 43–45. A breach includes unauthorised destruction, loss, alteration or disclosure."
    },
    {
      "id": 2,
      "text": "Are you the controller for the affected processing (including where you also act as processor)?",
      "tooltip": "A controller decides why and how the affected personal data is processed. For example, an employer decides how employee records are used. If you also provide processing services, assess the role you have for the affected activity.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. Determine your role promptly; do not postpone applicable notification."
        }
      },
      "helpReference": "Article 43 distinguishes controller notification to the authority from processor notification to the controller."
    },
    {
      "id": 3,
      "text": "Are you a processor for the affected processing?",
      "tooltip": "A processor handles personal data for a controller under its instructions. For example, a payroll provider may process employees’ details for their employer. Notification duties differ according to this role.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "As a processor, notify the controller within 48 elapsed hours of awareness under article 43. Report promptly enough to support the controller’s separate duties. Do not postpone to a working day."
        },
        "no": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline. Determine the controller/processor role urgently."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The incident facts or reporting threshold are uncertain. Seek immediate incident and legal assessment, preserve evidence and relevant timestamps, and reassess promptly. Do not wait for an investigation to finish if the reporting trigger is already met; uncertainty does not extend a deadline."
        }
      },
      "helpReference": "Article 43."
    },
    {
      "id": 4,
      "text": "Is the breach likely to result in high risk to affected individuals?",
      "tooltip": "High risk concerns the likelihood and seriousness of harm to affected people, such as identity theft, discrimination or exposure of sensitive information. This question concerns communication to individuals; it is not the trigger for notifying the authority.",
      "options": {
        "yes": {
          "nextQuestion": 5
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the supervisory authority within 48 elapsed hours of awareness under article 43, and submit the separate article 44 report no later than 72 hours. Do not wait for the detailed report to send the initial notice. No automatic high-risk communication to individuals is established, but authority notification remains required."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Notify the supervisory authority within 48 elapsed hours of awareness under article 43, and submit the separate article 44 report no later than 72 hours. Do not wait for the detailed report to send the initial notice. Assess high-risk communication urgently; uncertainty does not remove authority notification."
        }
      },
      "helpReference": "Articles 43–45. High risk concerns subject communication, not the authority-notification trigger."
    },
    {
      "id": 5,
      "text": "Can you establish an article 45 condition for not communicating directly to individuals: effective protective measures, subsequent elimination of high risk, or equally effective public communication?",
      "tooltip": "Check whether protective measures actually made the data unintelligible, later measures removed the high risk, or equally effective public communication meets the relevant condition. For example, encryption only helps if it remained effective and its key was not also exposed.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Notify the supervisory authority within 48 elapsed hours of awareness under article 43, and submit the separate article 44 report no later than 72 hours. Do not wait for the detailed report to send the initial notice. Document the precise article 45 condition before relying on it. The authority can require communication. An exception to direct subject communication does not remove authority notification."
        },
        "no": {
          "nextQuestion": null,
          "message": "Notify the supervisory authority within 48 elapsed hours of awareness under article 43, and submit the separate article 44 report no later than 72 hours. Do not wait for the detailed report to send the initial notice. Communicate with affected individuals under article 45. Submit the proposed communication and timetable for authority approval under article 44; article 45 does not specify a fixed subject-notification hour limit."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Notify the supervisory authority within 48 elapsed hours of awareness under article 43, and submit the separate article 44 report no later than 72 hours. Do not wait for the detailed report to send the initial notice. The article 45 condition is unresolved. Seek urgent assessment and submit the proposed communication and timetable for authority approval."
        }
      },
      "helpReference": "Articles 44–45. Encryption or a public notice is not sufficient without the relevant effectiveness conditions."
    }
  ],
  "guidance": [
    "Record occurrence, discovery, first legally relevant awareness or belief, escalation, notifications and follow-up separately. Hour limits mean elapsed hours, including weekends, not business hours. Sector, cyber-incident, contractual or criminal-law duties may also apply. Preserve evidence, contain the incident and report in parallel; uncertainty or an incomplete investigation does not create an extension.",
    "For the 72-hour report, this module counts from awareness of the same breach as an operational interpretation consistent with article 43; article 44 does not expressly identify a different starting event. Do not start a new 72-hour clock after the 48-hour notice.",
    "If awareness is at 10:00 Monday, the initial authority notice is due by 10:00 Wednesday and the report by 10:00 Thursday under that interpretation. Submit available facts promptly; missing information does not excuse missing notification.",
    "Use the official breach service/form. The published breach mailbox is databreach@dpo.gov.rw. The report addresses the incident, affected data, contact details, mitigation, and proposed communication/timetable."
  ],
  "links": [
    {
      "label": "Rwanda breach reporting service",
      "url": "https://dpo.gov.rw/services/report-a-data-breach"
    },
    {
      "label": "Official breach notification form",
      "url": "https://dpo.gov.rw/fileadmin/DPO/ComplianceTools/Personal%20Data%20Breach%20Notification%20Form.pdf"
    }
  ]
};
