
import { Card, CardContent } from "@/components/ui/card";

export const NigeriaLawfulBasisDescription = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-lg font-semibold mb-4">Understanding Lawful Basis Under NDPA</h2>
        <p className="mb-4">
          The Nigeria Data Protection Act (NDPA) 2023 requires that all personal data processing must have a valid lawful basis. 
          This assessment will help you determine the most appropriate lawful basis for your data processing activities.
        </p>
        <p className="mb-4">
          There are six lawful bases available under Section 25 of the NDPA:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Consent</strong>: When the data subject has given explicit, informed consent for specific purposes.</li>
          <li><strong>Contractual Necessity</strong>: When processing is necessary to fulfill a contract with the data subject.</li>
          <li><strong>Legal Obligation</strong>: When processing is necessary to comply with a legal requirement.</li>
          <li><strong>Vital Interests</strong>: When processing is necessary to protect someone's life or physical integrity.</li>
          <li><strong>Public Interest</strong>: When processing is necessary for a task carried out in the public interest.</li>
          <li><strong>Legitimate Interests</strong>: When processing is necessary for legitimate interests that don't override the data subject's rights.</li>
        </ul>
        <p>
          Answer the following questions to help determine which lawful basis is most appropriate for your processing activity.
        </p>
      </CardContent>
    </Card>
  );
};
