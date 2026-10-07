import type { ReviewedAssessment } from "./types";

export const ghanaRegistration: ReviewedAssessment = {
  "packet": "GH-REG-0.1",
  "title": "Registration with Ghana’s Data Protection Commission",
  "intro": "Assess Ghana scope, your role, any precisely applicable exemption, and registration status. Employee-only processing or small size does not itself remove a registration duty.",
  "questions": [
    {
      "id": 1,
      "text": "Does the activity involve personal data?",
      "tooltip": "Personal data is information about an identifiable individual, such as a customer name, contact details or an ID linked to them. For example, an employee database contains personal data even when access is limited to administrators.",
      "options": {
        "yes": {
          "nextQuestion": 2
        },
        "no": {
          "nextQuestion": null,
          "message": "No personal-data registration trigger identified on the documented facts. Reassess if the activity changes."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      },
      "helpReference": "Act 843 sections 27, 45–56."
    },
    {
      "id": 2,
      "text": "Is the activity limited to foreign-origin personal data merely in transit through Ghana?",
      "tooltip": "Mere transit means foreign-origin personal data passes through Ghana without substantive local processing of the kind addressed here. For example, using a Ghana-based service to analyse that data is different from simply routing it through the country.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "No registration trigger identified for the documented transit-only excluded activity under section 45(4). Other processing by the organisation must be assessed separately."
        },
        "no": {
          "nextQuestion": 3
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      },
      "helpReference": "Act 843 section 45(4). A Ghana processor performing substantive processing is not merely transit."
    },
    {
      "id": 3,
      "text": "Does section 45 connect the processing to Ghana through establishment/local processing, equipment or a processor in Ghana, or information originating partly or wholly in Ghana?",
      "tooltip": "Consider the connections listed in the question for this activity. For example, a foreign organisation using a processor in Ghana needs a scope assessment even without a Ghanaian office. Check the particular facts against section 45.",
      "options": {
        "yes": {
          "nextQuestion": 4
        },
        "no": {
          "nextQuestion": null,
          "message": "No Ghana registration trigger identified on the documented excluded facts. Confirm the section 45 scope assessment and review changes."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      },
      "helpReference": "Act 843 section 45. Foreign companies using a Ghana processor need scope assessment."
    },
    {
      "id": 4,
      "text": "Are you claiming a specific exemption from registration for this particular processing?",
      "tooltip": "An exemption is a specific legal exception whose conditions must be met. Identify an exception that actually affects registration. For example, an exception from a non-disclosure rule does not by itself remove registration duties.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "Registration exemption is unresolved: identify the exact provision and extent and obtain a DPC or legal determination before relying on it. Household or legal-disclosure provisions do not automatically remove all obligations."
        },
        "no": {
          "nextQuestion": 5
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      },
      "helpReference": "Act 843 sections 60–61, 63–67. Section 67 concerns household principles; section 66 concerns non-disclosure, not a blanket registration exclusion."
    },
    {
      "id": 5,
      "text": "Are you a controller, including where you act as both controller and processor?",
      "tooltip": "A controller decides why and how personal data is processed; a processor acts on a controller’s behalf. For example, an employer is typically a controller for its employee records, while an outsourced service may be a processor. You can have different roles for different activities.",
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
      },
      "helpReference": "Act 843 sections 27, 46(3), 53. A controller decides why and how personal data is processed."
    },
    {
      "id": 6,
      "text": "Do you hold a valid, current DPC registration?",
      "tooltip": "Check that the DPC registration is valid and current for the relevant activity. For example, submitting an application or holding an expired certificate is different from having a current registration.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "A current registration is recorded in your answers. Check the two-year renewal date under section 50 and notify changes in registered particulars within fourteen days under section 55. Continue the other applicable compliance duties."
        },
        "no": {
          "nextQuestion": null,
          "message": "Registration is required before in-scope controller processing under sections 27, 46(3) and 53. Register or address an expired certificate with the DPC promptly. Do not treat employee-only data or small size as an exemption."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "Confirm registration validity promptly. In-scope controller processing requires registration; uncertainty or an expired certificate is not permission to process unregistered."
        }
      },
      "helpReference": "Act 843 sections 27, 46(3), 50, 53, 55."
    },
    {
      "id": 7,
      "text": "Are you acting only as a processor on behalf of a controller?",
      "tooltip": "A processor uses personal data for a controller under its instructions, without deciding the purpose itself. For example, a service storing customer records for a client may act as processor. The DPC’s published processor guidance is relevant as well as the Act’s controller wording.",
      "options": {
        "yes": {
          "nextQuestion": 8
        },
        "no": {
          "nextQuestion": null,
          "message": "Your role is unresolved. Obtain a DPC or legal determination; do not interpret this as “no registration needed”."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "The facts or legal conditions are uncertain. Obtain a regulator or legal assessment before relying on a conclusion. Record the reasoning; uncertainty does not establish an exemption."
        }
      },
      "helpReference": "DPC For Organisations guidance distinguishes the regulator’s processor instruction from the statutory controller wording."
    },
    {
      "id": 8,
      "text": "Do you hold a valid, current DPC registration for the processor activity?",
      "tooltip": "Check the registration record for the processor activity and whether it remains current. For example, an application acknowledgement alone does not establish that registration has been completed.",
      "options": {
        "yes": {
          "nextQuestion": null,
          "message": "For processor-only activity, current DPC organisation guidance directs registration. This is regulator guidance; section 27 is framed as a controller registration duty. A current registration is recorded in your answers. Check the two-year renewal date under section 50 and notify changes in registered particulars within fourteen days under section 55. Continue the other applicable compliance duties."
        },
        "no": {
          "nextQuestion": null,
          "message": "For processor-only activity, current DPC organisation guidance directs registration. This is regulator guidance; section 27 is framed as a controller registration duty. Use the official organisation registration/renewal route and address any expired registration."
        },
        "notSure": {
          "nextQuestion": null,
          "message": "For processor-only activity, current DPC organisation guidance directs registration. This is regulator guidance; section 27 is framed as a controller registration duty. Confirm current registration and renewal status with the DPC promptly."
        }
      },
      "helpReference": "DPC For Organisations; Act 843 sections 50 and 55."
    }
  ],
  "guidance": [
    "Controllers in scope must register before processing. DPC’s current organisation guidance also directs processors to register. Do not misquote section 27 as expressly imposing an identical duty on every processor.",
    "Check the two-year renewal date and the fourteen-day duty to notify changed registration particulars. Provide accurate identity, processing, data-category, recipient, transfer and security information required by the DPC application.",
    "Exemptions require provision- and purpose-specific analysis. Sections 60–61 and 63–65 have particular conditions; sections 66–67 do not provide an automatic organisation-wide exemption from registration.",
    "Use the official DPC For Organisations landing page for current registration/renewal routes. A replacement text listed as a draft bill on the DPC documents page is not an enacted replacement for Act 843."
  ],
  "links": [
    {
      "label": "DPC registration and renewal — For Organisations",
      "url": "https://dpc.gov.gh/for-organisations/"
    }
  ]
};
