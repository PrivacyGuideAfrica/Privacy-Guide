
import { Question } from "@/components/shared/AssessmentInterface";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";

const dpoQuestions: Question[] = [
  {
    id: 1,
    text: "Are you a Data Controller or a Data Processor?",
    options: {
      yes: {
        nextQuestion: 2,
        message: null,
      },
      no: {
        nextQuestion: null,
        message: "Based on your answer, you might not be required to designate a DPO under Rwandan law.\n\nHowever, if your organisation processes personal data in any capacity, it's advisable to review your obligations under the Rwandan Data Protection Law. Even if not legally required, appointing a DPO can demonstrate commitment to data protection and help ensure compliance.",
      },
    },
  },
  {
    id: 2,
    text: "Is your organisation a public or private corporate body or a legal entity (except for courts)?",
    options: {
      yes: {
        nextQuestion: null,
        message: "You must designate a Data Protection Officer (DPO).\n\nUnder Rwandan Data Protection Law, all public and private corporate bodies and legal entities (except for courts) are required to appoint a DPO to oversee data protection compliance.\n\nPlease refer to the guidance below for information on who can be appointed, their required qualifications, duties, and how to register your DPO with the National Cyber Security Authority (NCSA).",
      },
      no: {
        nextQuestion: 3,
        message: null,
      },
    },
  },
  {
    id: 3,
    text: "Do your core activities involve personal data processing that requires regular and systematic monitoring of individuals on a large scale?",
    tooltip: "Regular and systematic monitoring includes online tracking, profiling, data-driven marketing, loyalty programs, location tracking, or any continuous/periodic data collection and evaluation of individuals.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You must designate a Data Protection Officer (DPO).\n\nYour organisation conducts regular and systematic monitoring of individuals on a large scale, which triggers the requirement to appoint a DPO under Rwandan Data Protection Law.\n\nPlease refer to the guidance below for information on who can be appointed as a DPO, their required qualifications, and how to register your DPO with the National Cyber Security Authority (NCSA).",
      },
      no: {
        nextQuestion: 4,
        message: null,
      },
    },
  },
  {
    id: 4,
    text: "Do your core activities involve large-scale processing of:\n\n• Special categories of data (e.g. race, ethnicity, health data)?\n• Personal data related to criminal convictions?",
    tooltip: "Special categories include racial/ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, sex life, or sexual orientation data.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You must designate a Data Protection Officer (DPO).\n\nYour organisation processes special categories of data or criminal data on a large scale, which triggers the requirement to appoint a DPO under Rwandan Data Protection Law.\n\nPlease refer to the guidance below for information on who can be appointed, their required qualifications, duties, and how to register your DPO with the National Cyber Security Authority (NCSA).",
      },
      no: {
        nextQuestion: null,
        message: "Based on your answers, you might not be required to designate a DPO under Rwandan law.\n\nHowever, you can voluntarily appoint a DPO as best practice. This demonstrates your commitment to data protection and can help ensure compliance with the Rwandan Data Protection Law.\n\nEven without a formal DPO, your organisation remains responsible for implementing appropriate technical and organisational measures to ensure data protection compliance.",
      },
    },
  },
];

const AdditionalGuidance = () => (
  <div className="mt-12 bg-card border rounded-lg p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Additional Guidance on DPO Appointment</h2>
    
    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-medium mb-2">Joint DPO</h3>
        <p className="text-muted-foreground">
          A group of undertakings may appoint a single DPO, as long as they are easily accessible to each establishment. 
          Public authorities or bodies may also designate one DPO for several entities.
        </p>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-2">Who Can Be a DPO</h3>
        <p className="text-muted-foreground">
          The DPO can be a permanent staff member or an external contractor with expert knowledge of data protection law and practices.
        </p>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-2">Qualifications</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Understanding of national data protection laws</li>
          <li>Familiarity with the organisation's processing operations and risks</li>
          <li>Knowledge of information technology and data security</li>
          <li>Ability to train colleagues and promote a culture of data protection</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-2">DPO Duties</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Inform and advise on legal obligations</li>
          <li>Monitor compliance with data protection laws and policies</li>
          <li>Guide and track Data Protection Impact Assessments (DPIAs)</li>
          <li>Cooperate with the supervisory authority (NCSA)</li>
          <li>Act as the main contact point for data subjects and regulators</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-2">Resources and Responsibility</h3>
        <p className="text-muted-foreground">
          Senior management must provide adequate budget, staffing, and support for the DPO role.
          The DPO is not personally liable for non-compliance; the Data Controller or Processor retains overall responsibility.
        </p>
      </section>
      
      <section>
        <h3 className="text-lg font-medium mb-2">Publishing DPO Contact Details</h3>
        <p className="text-muted-foreground">
          The organisation must make the DPO's contact information publicly available and share it with the supervisory authority.
        </p>
      </section>
    </div>
  </div>
);

export const DPOAssessment = () => {
  const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Do You Need to Designate a Data Protection Officer?</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This module helps you determine whether your organisation must appoint a DPO under Rwandan law. 
          A DPO oversees your data protection strategy and compliance efforts.
        </p>

        <AssessmentInterface
          title="DPO Appointment Assessment"
          questions={dpoQuestions}
          onComplete={() => setIsAssessmentComplete(true)}
          onReset={() => setIsAssessmentComplete(false)}
        />
      </div>

      {isAssessmentComplete && <AdditionalGuidance />}
    </div>
  );
};
