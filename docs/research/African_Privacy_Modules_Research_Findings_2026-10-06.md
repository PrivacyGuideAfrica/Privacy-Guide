# African privacy modules

Primary-source research findings and candidate approval packets

Nigeria • Rwanda • Uganda • Ghana • South Africa

Research date: 6 October 2026 | Version: Research 0.1 | Status: UNAPPROVED

The main corrections concern Nigeria’s GAID 2025 DPIA and audit rules, limited statutory exemptions, country-specific breach thresholds, and the distinction between Rwanda’s consent age and DPIA triggers. A common 72-hour breach flow would be inaccurate. Consent must not be an automatic lawful-basis fallback.

This report supplies legal findings, proposed questions and outcomes, source references and regression scenarios. The existing source files, live module text and service configuration were not provided. Exact before-and-after comparisons, completeness against every existing branch, and factual verification of the notices therefore remain outstanding. No code, availability flags, approval metadata or public notices have been changed. The brief’s descriptions of the existing behaviour are treated as reported concerns, not inspected facts.

Sources were retrieved from regulator or government sites. Some Nigeria PDFs were inaccessible to the search reader but were successfully downloaded directly from the official website and read locally. Uganda’s Regulations were retrieved from the official NITA-U archive and the relevant scanned provision was read through OCR. A search result or an obsolete draft has not been substituted for the operative text. Source IDs below refer to the register in section 9. All retrieval dates are 6 October 2026.

## 1. Nigeria DPIA: candidate packet NG-DPIA-0.1

Controlling sources: NDPA section 28; GAID article 28 and Schedule 4 [N1, N2]. The Act requires a controller to assess likely high-risk processing before it starts and to consult the NDPC if high risk remains despite proposed measures. GAID specifies additional mandatory circumstances and filing requirements. Its wording is materially broader than a generic high-risk checklist.

### Proposed decision sequence

| ID / proposed question | Proposed outcome / next step | Authority |
| --- | --- | --- |
| NGD-Q1: Does the processing concern personal data and fall within Nigeria’s territorial scope? | If no, this DPIA module cannot establish an NDPA duty. If uncertain, obtain a scope assessment. If yes, continue. | N1 ss.2, 65 |
| NGD-Q2: Is a specific statutory exemption being claimed for this processing? | Assess the precise exemption, competent authority and purpose. Section 3(2) can exempt section 28, but preserves other duties. Do not treat an entire organisation or sector as exempt. If its application is uncertain, refer for legal review before an exemption outcome. | N1 s.3(1)-(4); N2 arts.3(2), 5-6 |
| NGD-Q3: Does any GAID article 28(3) circumstance apply? | Yes: conduct a Nigeria-specific DPIA and file it with the NDPC before processing under article 28(9). No: continue to the general risk question. Unknown: manual review. | N2 art.28(3), (9) |
| NGD-Q4: Otherwise, could the nature, scope, context or purpose create high risk to individuals? | Yes: conduct a DPIA before processing. No: record the screening rationale and reassess on material change. Unknown: further assessment; no definitive “DPIA unnecessary” result. | N1 s.28(1), (4); N2 art.28(1)-(2) |
| NGD-Q5: After the proposed safeguards, does the DPIA indicate residual high risk? | Yes: consult the NDPC before processing. Filing and prior consultation must be shown as distinct steps. No: document safeguards and the decision; satisfy applicable filing requirements. | N1 s.28(2); N2 art.28(9) |
| NGD-Q6: Was the relevant processing already underway when the instruments were issued? | Assess historic compliance and remediation. Do not give a new grace period from the date the user completes the module. | N2 art.28(8), (10) |

### Each express GAID trigger

| Article 28(3) | Candidate screening wording |
| --- | --- |
| (a)-(c) | Does the activity involve evaluation or scoring, including profiling; automated decisions with legal or similarly significant effects; or systematic monitoring? |
| (d)-(e) | Does it involve sensitive or highly personal data, or vulnerable data subjects? |
| (f) | Does it contemplate innovative technological or organisational solutions which may create significant privacy risk? |
| (g)-(j) | Does it involve development of software for communication with data subjects; financial services through digital devices; healthcare services; or e-commerce services? |
| (k)-(l) | Does it involve cameras in places accessible to the public, or a legal instrument or policy that requires processing data of the general public? |
| (m)-(o) | Does it involve education records concerning students or pupils; hospitality services; or cross-border transfers? |

Do not add “large scale” to every trigger: article 28(3) does not qualify every listed activity in that way. Whether the processing falls within a broadly worded category should be documented. The tree must use Nigeria’s categories and references, rather than present Rwanda’s criteria as Nigerian law.

### Documentation, filing and historic periods

Section 28(4) requires a description and purpose, necessity and proportionality assessment, assessment of risks to individuals, and measures to address those risks. GAID requires its Schedule 4 template, privacy by design and default measures, vetting by an NDPC-accredited certified DPO, and an accredited certified DPO’s signature on the submitted assessment. DPIA outcomes form part of CAR where CAR is filed: article 28(4)-(5), (11)-(13).

Article 28(8) specifies assessment and submission within four months of issuance for software processing sensitive personal data. Article 28(10) specifies six months from issuance for relevant pre-existing processing. On an issuance date of 20 March 2025, those periods point to 20 July and 20 September 2025. The four-month period precedes the NDPC’s reported general effective date of 19 September 2025. Preserve this temporal tension for legal review; do not silently recalculate either period from commencement. Both periods are historical by this research date.

No general exemption based merely on small size, fewer than 200 people, consent, or encryption was identified in the retrieved DPIA provisions. A genuine section 3 exemption must be assessed separately. A low-risk conclusion is an assessed result, not a substitute for an express GAID trigger.

### Worked scenarios and proposed regression cases

| Case ID | Facts | Expected reviewed outcome |
| --- | --- | --- |
| NGD-S1 → NGD-Q3 | A small hotel uses identifiable guest records and has only 40 current guests. | Hospitality is expressly listed in article 28(3)(n). Small volume alone must not yield “no DPIA”. |
| NGD-S2 → NGD-Q3/Q5 | An employer proposes facial recognition attendance; the assessment leaves a serious risk of discriminatory exclusion. | Assess the biometric/sensitive-data and monitoring triggers. Conduct and file the DPIA; consult before processing if residual high risk remains. |
| NGD-S3 → NGD-Q2 | A company relies on “crime prevention” for ordinary customer fraud monitoring. | No automatic competent-authority exemption. Require evidence of the statutory conditions. |
| NGD-S4 → NGD-Q3 | A controller transfers customer data to an overseas host. | Cross-border transfer is listed in article 28(3)(o). Assess DPIA filing as well as the independent transfer requirements. |
| NGD-S5 → NGD-Q4 | A modest routine processing operation falls outside the express categories; a documented assessment finds no likely high risk. | Candidate result: no DPIA trigger identified on these facts; retain the assessment and review changes. Do not state general legal compliance. |

Approval scope: the proposed sequence, each listed trigger, documentation and filing wording. Open points: precise existing questions; the historic implementation periods; evidence of an applicable exemption; any later case-specific NDPC direction. Owner decision: pending. Public reviewer: not recorded.

## 2. Nigeria annual audit: candidate packet NG-CAR-0.1

Controlling sources: GAID articles 8-10, Schedules 2, 7 and 10; updated Registration Guidance Notice dated 19 December 2024 [N2, N3]. Classification precedes the filing decision. An obligation to perform compliance audits is distinct from an obligation to submit annual CAR.

| Class / status | Proposed terminal wording | Exact reference |
| --- | --- | --- |
| Ultra-High Level (UHL) | Annual CAR filing is required. Registration is once, subject to significant-change duties. File through a licensed DPCO unless the NDPC approves another route. | N2 arts.9(2), 10(6)-(8), (12), (14) |
| Extra-High Level (EHL) | Annual CAR filing is required, with the same distinction between registration and filing. | N2 arts.9(2), 10(6)-(8), (14) |
| Ordinary-High Level (OHL) | Renew NDPC registration annually. Article 9(3) says annual CAR is not required when annual registration is renewed. Periodic internal audit and wider compliance duties remain. | N2 arts.9(3), 10(1)-(5) |
| Not of major importance | No routine annual CAR requirement is identified under these provisions solely on that status. Assess periodic audit obligations and any NDPC direction. | N2 arts.8, 10(1)-(6); Sch.7 para.4 |
| Classification unknown or disputed | Determine classification before giving a filing exemption or deadline. | N2 art.8; Sch.7 paras.1-3 |

Article 10(6) refers generally to annual CAR for major-importance entities. Article 9(3) supplies the specific OHL exception. The NDPC FAQ mentions an OHL exemption for fewer than 200 data subjects. That example is narrower than article 9(3); it should not replace the directive’s classification-based rule [N4].

### Revised questions

NGC-Q1: Are you a controller, processor, or both, and is the relevant processing in scope? NGC-Q2: What classification does the NDPC registration certificate or applicable designation establish? NGC-Q3: Is a sector-based designation or another non-volume criterion relevant? NGC-Q4: How many distinct data subjects are processed in six months? NGC-Q5: What is the legal establishment date? NGC-Q6: Is this a first filing, subsequent filing, annual OHL renewal, or correction of overdue compliance? NGC-Q7: Is there a specific NDPC instruction or verified extension for this entity and filing period?

The updated notice designates major importance through more than 200 data subjects in six months, commercial ICT services on another individual’s data-capable device, or a listed sector, subject to its terms. Specific sectors and the classification factors can matter independently of headcount. Commercial banks, telecommunications, insurance, multinational companies, payment gateways and fintechs appear in UHL; MDAs, microfinance and mortgage banks, higher institutions and secondary/tertiary hospitals appear in EHL. Primary/secondary schools, certain health providers and small hotels appear in OHL. Do not reproduce the former NDPR threshold as the current CAR rule [N3 paras.1-4].

The notice’s volume-only bands use “over” 200, 1,000 and 5,000 and “less than” the upper bounds. Exactly 1,000 and exactly 5,000 are not cleanly allocated by those band descriptions. Other designation criteria may resolve the result. If they do not, use a manual classification outcome rather than silently change “over” to “at least”.

### Dates and transition rules

| Condition | Proposed timing condition |
| --- | --- |
| Established before 12 June 2023 | CAR due no later than 31 March each year: article 10(7). |
| Established after 12 June 2023 | First CAR no later than 15 months after establishment; subsequently annually: article 10(8). Do not use the 18-month wording from the 2024 draft. |
| Established on 12 June 2023 | The before/after wording does not expressly resolve the date itself. Obtain confirmation; no automatic extension. |
| Later-established entity, subsequent annual date | Article 10(8) does not expressly say whether later annual filings align to 31 March or an anniversary. The FAQ presents a general March deadline. Seek an entity-specific position if the distinction matters; display the uncertainty. |
| Overdue CAR | Assess filing and remediation. Article 10(9) states a 50% administrative penalty in addition to the stipulated filing fee. |
| Previous NDPR compliance | GAID article 3(3) ceases application of NDPR as the regulatory instrument but preserves prior acts. Do not erase historic filings or carry forward obsolete thresholds. The NDPC reports GAID effective from 19 September 2025 [N5]. |

Current filing entrypoint: https://services.ndpc.gov.ng/. Article 10(12) calls for the Commission’s automated platform; Schedule 2 supplies the CAR template. A public portal page does not prove that every renewal function or submission path is operational. No general 2026 deadline extension was verified in the primary materials retrieved. This is not a guarantee that no entity-specific concession exists.

| Case ID | Facts | Expected reviewed outcome |
| --- | --- | --- |
| NGC-S1 | UHL multinational with only 150 local data subjects. | Do not exempt it merely because the count is below 200; verify the applicable designation and CAR duty. |
| NGC-S2 | OHL primary school that renews its registration. | Annual registration renewal outcome, not a generic annual CAR requirement. |
| NGC-S3 | EHL entity established 1 January 2026. | Article 10(8) first-filing outer date: 1 April 2027. Further annual-cycle wording needs review. |
| NGC-S4 | Volume-only classification at exactly 1,000 or 5,000 people. | Check sector and other factors; otherwise manual classification. |
| NGC-S5 | Old entity became major importance only recently. | Do not grant a fresh 15-month period based on classification date: article 10(8) refers to establishment. |

Approval scope: classification-first logic, OHL renewal outcome and establishment-based timing. Open points: exact current wording, boundary counts, establishment on 12 June 2023 and later annual-cycle interpretation. Owner decision: pending. Public reviewer: not recorded.

## 3. Breach modules: five distinct candidate packets

The matrix addresses the general privacy legislation. Sector, cyber incident, contractual and criminal-law reports may create parallel obligations. A processor label must not automatically route every country to “notify the controller only”. Hour limits should use elapsed hours, not business hours. Record occurrence, discovery, first legally relevant awareness or belief, escalation, notification and follow-up separately.

| Country / authority | Trigger and responsible notifier | Recipients and statutory timing |
| --- | --- | --- |
| Nigeria / N1 s.40; N2 art.33 | Controller: breach likely to result in risk to rights and freedoms. Processor: any breach of personal data it stores or processes, on awareness. | Controller → NDPC within 72 hours of awareness of the relevant breach. High risk → data subject immediately. Processor → engaging controller or processor on awareness. |
| Rwanda / R1 arts.43-45 | Personal data breach. Article 43 does not make authority notification conditional on likely harm or high risk. | Controller → authority within 48 hours of awareness. Processor → controller within 48 hours of awareness. Controller → separate report no later than 72 hours under article 44. |
| Uganda / U1 s.23; U2 reg.33 | Collector, processor or controller believes personal data has been accessed or acquired by an unauthorised person. | Notify the Authority immediately through the PDPO route. The Authority determines whether the affected data subject must be notified. The processor’s regulator duty is not displaced by notice to its client. |
| Ghana / G1 s.31 | Reasonable grounds to believe unauthorised access or acquisition. The provision names the controller or third party processing under its authority. | Notify DPC and data subject as soon as reasonably practicable after discovery. Do not add a high-risk threshold or a 72-hour limit. |
| South Africa / S1 ss.21(2), 22 | Reasonable grounds to believe unauthorised access or acquisition. Responsible party reports; operator immediately tells the responsible party. | Responsible party → Regulator and identifiable data subject as soon as reasonably possible after discovery. No statutory 72-hour safe period or general low-risk exemption. |

### Exceptions, channels and timing qualifications

| Country | Qualification / exception | Current channel and source |
| --- | --- | --- |
| Nigeria | Encryption, de-identification and subsequent measures are risk factors under s.40(7), not automatic exemptions. Public communication can replace disproportionate, infeasible or excessively costly direct high-risk communication. Keep records of every breach. Information may follow in phases without undue delay. GAID art.33(4) also calls for immediate information where it may assist containment. | NDPC NIMP breach entrypoint: https://services.ndpc.gov.ng/breach/ [N6]. |
| Rwanda | High-risk data subject communication is separate. Art.45 lists protective measures, subsequent elimination of high risk, and equally effective public communication. Art.44 requires a proposed communication and timetable for authority approval. No fixed data subject hour limit is specified in art.45. | Official form through https://dpo.gov.rw/services/report-a-data-breach; published breach mailbox databreach@dpo.gov.rw [R3]. |
| Uganda | Section 23 uses the notifier’s belief; regulation 33(1) says immediately after occurrence. Record both occurrence and discovery/belief; do not invent a 72-hour allowance or wait for an investigation to conclude. No general encryption or low-risk exemption appears in these provisions. | Reg.33(2), Schedule 1 Form 7; current official homepage “Report a Breach” service at https://pdpo.go.ug/ [U2, U3]. The public application routes the action into account onboarding; submission inside an account was not tested. |
| Ghana | Delay to the data subject requires an instruction from security agencies or DPC that notice would impede a criminal investigation: s.31(4). It is not a general authority-notification exemption. The DPC form also expressly covers lost or damaged data, broader than the statutory access/acquisition trigger. | Complete the DPC Incident / Data Breach Report Form and send to incidents@dataprotection.org.gh without delay, as the current form instructs [G2]. |
| South Africa | If a data subject’s identity cannot be established, s.22(1)(b) qualifies notice to that subject, not notice to the Regulator. Law enforcement or system-restoration needs qualify reasonable timing. Delaying subject notice under s.22(3) requires the specified public body or Regulator determination. The 2025 fact sheet takes a broad all-compromises reporting position. | eServices: https://eservices.inforegulator.org.za/; official guidance says this route applies from 1 April 2025 [S2, S3]. |

Rwanda’s article 44 does not expressly identify a different starting event for the 72-hour report. The proposed operational rule is to count it from awareness of the same breach, consistent with article 43, rather than start a new 72-hour clock after the 48-hour notification. This is an interpretation to be approved. Submit available facts promptly; do not use missing information as a reason to miss notification.

For Ghana and South Africa, pure destruction or unavailability without evidence of unauthorised access/acquisition requires care. Their regulator materials adopt broader incident language than the literal statutory triggers. The module should explain that difference, prompt escalation and avoid a categorical “no report” result based solely on no proven exfiltration.

### Proposed terminal outcomes

| Packet / outcome ID | Candidate wording |
| --- | --- |
| NG-BREACH-0.1 / NGB-T1 | Notify the NDPC within 72 elapsed hours of becoming aware of a breach likely to create risk to individuals. Assess high risk separately and communicate immediately where that test is met. |
| NGB-T2 | As a processor, notify the controller or processor that engaged you on becoming aware of the breach. Supply the required details and assist its response. Do not wait for its regulator deadline. |
| NGB-T3 | No ordinary section 40(2) notification trigger has been established on the documented facts. Record the breach and reasoning; reassess new facts and any immediate-containment reporting duty. |
| RW-BREACH-0.1 / RWB-T1 | Notify the authority within 48 hours of awareness and submit the article 44 report no later than 72 hours. Assess high-risk communication and submit its proposed timetable for authority approval. |
| RWB-T2 | As a processor, notify the controller within 48 hours of awareness. Report promptly enough to support the controller’s separate obligations. |
| RWB-T3 | The high-risk data subject communication test or an article 45 exception affects that communication only. It does not remove article 43 authority notification. |
| UG-BREACH-0.1 / UGB-T1 | Notify PDPO immediately using Form 7 when you believe personal data has been accessed or acquired by an unauthorised person. This applies to collectors, controllers and processors. Follow the authority’s direction on subject notification. |
| UGB-T2 | The statutory access/acquisition belief has not been established. Escalate and investigate promptly, document the assessment and reassess immediately if belief arises. Do not describe this as a blanket exemption from incident reporting. |
| GH-BREACH-0.1 / GHB-T1 | Notify DPC and the data subject as soon as reasonably practicable after discovery of reasonable grounds for unauthorised access or acquisition. Use the published DPC incident form and mailbox. |
| GHB-T2 | Delay subject notification only where the security agencies or DPC instruct that notification would impede a criminal investigation. Record that instruction; continue authority reporting. |
| GHB-T3 | No statutory access/acquisition trigger is established on these facts. Assess the DPC form’s broader loss/damage reporting position before deciding against a report. |
| ZA-BREACH-0.1 / ZAB-T1 | Notify the Regulator through eServices and identifiable affected subjects as soon as reasonably possible. A low risk assessment does not remove the duty once the reporting trigger is met. |
| ZAB-T2 | As an operator, notify the responsible party immediately when there are reasonable grounds to believe unauthorised access or acquisition. The responsible party makes the section 22 reports. |
| ZAB-T3 | If subject identity cannot be established, document that fact. Regulator notification remains required. Assess the regulator’s broader all-compromises guidance where access or acquisition is uncertain. |
| ALL-T4 | The facts or threshold are uncertain. Seek immediate incident and legal assessment. Preserve evidence and relevant timestamps; uncertainty does not create an extension. |

### Regression scenarios linked to proposed outcomes

| Case ID | Facts | Expected outcome |
| --- | --- | --- |
| B-S1 → NGB-T1 / RWB-T1 | Authority notification concerns a breach first known at 10:00 Monday. | Nigeria risk-trigger deadline: 10:00 Thursday. Rwanda initial notice: 10:00 Wednesday, report: 10:00 Thursday, subject to the stated report-clock interpretation. |
| B-S2 → RWB-T3 | Rwanda breach has no likely high risk. | No automatic subject communication; authority notice remains required. |
| B-S3 → UGB-T1 | Ugandan processor believes an unauthorised party accessed data. | Direct immediate PDPO duty; “controller only” must not be the terminal result. |
| B-S4 → GHB-T1 / ZAB-T1 | Unauthorised recipient obtains ordinary contact data; harm seems low. | Low risk must not automatically suppress reporting under the access/acquisition triggers. |
| B-S5 → ZAB-T3 | Responsible party cannot establish the identity of affected subjects. | Regulator reporting remains; subject identity qualification recorded. |
| B-S6 → ALL-T4 | Ransomware destroys availability; access is uncertain. | Assess each country’s law and regulator position; no generic encryption, no-exfiltration or low-risk exemption. |
| B-S7 → GHB-T2 | HR requests delay because notice is embarrassing. | Insufficient for the statutory criminal-investigation delay. |
| B-S8 → NGB-T2 / RWB-T2 / UGB-T1 / ZAB-T2 | A processor discovers a breach on a weekend. | Country-specific processor duties still apply; do not postpone to a working day. |

Approval scope: each country is a separate packet. Open points: exact current questions, Rwanda report-clock presentation, broader Ghana and South Africa reporting guidance, and Uganda authenticated submission usability. Owner decision for each: pending. Public reviewers: not recorded.

## 4. Nigeria applicability: candidate packet NG-SCOPE-0.1

Section 3 distinguishes a conditional household exclusion from exemptions for specified Part V obligations. Sections 24, 25, 32 and 40 remain applicable under section 3(2); Part VI rights are not exempted by that provision. GAID article 5 expressly reinforces retained duties, and article 3(2) says the Act prevails in a conflict [N1, N2].

| Branch to inspect | Proposed narrower wording | Reason / authority |
| --- | --- | --- |
| Personal / household | The exclusion may apply only to processing solely for personal or household purposes, provided it does not violate another person’s fundamental privacy right. Commercial, professional or mixed use needs a separate assessment. | N1 s.3(1); N2 art.6 |
| Crime prevention / prosecution | Specified Part V exemptions may apply to a competent authority acting for the listed criminal-law purposes under applicable law. Other duties remain. | N1 s.3(2)(a); ordinary corporate anti-fraud is not automatically enough. |
| Public health | A competent authority’s processing for prevention or control of a national public health emergency may qualify. Ordinary healthcare is not a blanket exemption. | N1 s.3(2)(b) |
| National security | Assess competent-authority status and necessity for national security. Do not mark every security-related organisation exempt. | N1 s.3(2)(c) |
| Journalism / education / art / literature | Assess publication in the public interest and the extent to which the specified obligations and rights are incompatible with that purpose. Do not exempt all education or media processing. | N1 s.3(2)(d) |
| Legal claims | Assess whether this processing is necessary to establish, exercise or defend a legal claim, including out-of-court procedure. The exemption does not cover all law-firm or legal-department processing. | N1 s.3(2)(e) |
| Other regulatory exemption | Identify the actual NDPC regulation, the affected processing and its conditions. A claim that an exemption exists is insufficient. | N1 s.3(3)-(4) |
| Foreign organisation | Test processing of a data subject in Nigeria; local incorporation is not necessary for applicability. | N1 s.2(2)(c) |

Regression cases: NGS-S1, law firm payroll → ordinary assessment; NGS-S2, necessary litigation bundle → assess s.3(2)(e) and retained duties; NGS-S3, private anti-fraud team → no automatic competent-authority exemption; NGS-S4, school records → no general education exemption; NGS-S5, purely private address book → assess s.3(1), purpose and privacy proviso; NGS-S6, overseas service processes data of a person in Nigeria → territorial scope may apply.

Existing wording: unavailable for all rows. Approval requires inspection of NDPAApplicability.tsx and the actual outcome text. Owner decision: pending. Public reviewer: not recorded.

## 5. Nigeria lawful basis: candidate packet NG-BASIS-0.1

Section 25 supplies six lawful bases. A sequence that exhausts five answers and then recommends consent has not established that valid consent is possible. The terminal result should instead identify the absence of an established basis. Consent cannot legalise an unlawful purpose [N1 ss.25-26; N2 arts.16-26].

| Basis / outcome | Proposed conditions and example |
| --- | --- |
| Consent | Use only where freely and intentionally given, specific, informed, affirmative, demonstrable and not withdrawn. Explain withdrawal. Silence and preselected confirmations do not suffice. Example: a genuinely optional newsletter with a separate opt-in. |
| Contract | Processing must be necessary for a contract with the subject, or requested pre-contract steps. A term in a contract alone does not establish necessity. Example: an address needed to deliver a purchase, not unrelated advertising. |
| Legal obligation | Identify the actual applicable duty and why the personal data are needed. Example: a specific statutory tax reporting obligation. An internal policy is not itself the legal obligation. |
| Vital interests | Identify the life or essential personal interest and necessity. Example: emergency disclosure to obtain urgent medical assistance. Convenience or ordinary financial interests are insufficient. |
| Public interest / official authority | Identify the relevant task or vested authority and necessity. Example: processing for a defined statutory public function. A useful commercial service is not automatically a public-interest task. |
| Legitimate interests | Identify the interest, necessity, reasonable expectations and rights assessment. Section 25(2) also excludes incompatible bases and interests that override subjects’ rights. GAID art.26 requires prior LIA and its additional safeguards. Example: proportionate account security after a documented assessment. |
| No established basis | No lawful basis has been established from these answers. Reassess the purpose and conditions before processing. Consent is only an option if its requirements can actually be met. |
| Sensitive data or special processing | Assess the additional statutory condition independently of the ordinary basis. Do not treat a section 25 answer as sufficient for every dataset or transfer. |

Important reconciliation: GAID article 18 lists processing for which it calls for consent, including direct marketing, sensitive data, children, incompatible further purposes, certain transfers and solely automated significant decisions. It is expressly subject to the Act. The Act separately permits non-consent conditions for sensitive data (s.30), children in specified circumstances (s.31), certain automated decisions (s.37) and transfers (ss.41-43). GAID article 3(2) confirms statutory priority. A module must neither ignore article 18 nor convert it into an unconditional statement that the Act always requires consent for those categories.

GAID article 17(8) also discusses constructive or implied consent in limited contexts. This must be read against s.26(3) and (7), which reject silence/inactivity and require affirmative consent. Do not derive general cookie consent from continued browsing or closing a notice. Article 19 separately distinguishes necessary cookies from other tools.

Regression cases: NGL-S1, mandatory employee monitoring → do not assume freely given consent; NGL-S2, delivery data → contract subject to necessity; NGL-S3, newsletter → assess direct marketing consent; NGL-S4, emergency assistance → assess vital interests; NGL-S5, no basis established → no automatic consent recommendation; NGL-S6, occupational health record → assess s.30 condition independently; NGL-S7, legitimate-interest processing outside reasonable expectations → reject unsupported LIA result.

Existing wording and behaviour: unavailable. Code remains unchanged. Approval scope: conditional basis wording and the no-established-basis terminal. Owner decision: pending. Public reviewer: not recorded.

## 6. Rwanda DPIA: candidate packet RW-DPIA-0.1

Controlling sources: Law No. 058/2021 article 38 and the NCSA DPIA Guide, internally dated December 2023 [R1, R2]. The later crawl or upload date of a PDF is not its legal date. Article 38 addresses controllers and processors; the guide describes the controller as primarily responsible and the processor as a source of assistance.

| Activity / current question to inspect | Grounding and candidate correction |
| --- | --- |
| Automated evaluation / profiling | Art.38: retain systematic and extensive personal evaluation, automated processing including profiling, and decisions with effects on those persons. Do not substitute all automated processing. |
| Sensitive data | Art.38: large-scale sensitive-data processing. The guide considers people, data range/volume, duration and geographic extent, rather than a universal numerical cutoff. |
| Public-space surveillance | Art.38: systematic monitoring of a publicly accessible area on a large scale. Preserve all three conditions; private or smaller monitoring may still meet the general high-risk test. |
| Vulnerable people | Guide pp.5-6 identifies children, disability, asylum seekers, refugees, older people and power imbalances as high-risk operations. Describe this as NCSA’s identification under art.38, not a verbatim age threshold in the Act. |
| Matching / combining datasets | Guide p.6 identifies combination from different purposes/controllers beyond reasonable expectations. Do not equate every routine database join with that example. |
| New technologies | Art.38 expressly lists new technology. Guide p.6 discusses AI, neuro-measurement and IoT. No blanket rule that familiar technology is low risk. |
| Under-16 threshold | Art.9 supplies a parental-consent rule for a child under 16, with a vital-interests exception. It is not a DPIA threshold. The guide’s vulnerable-data-subject trigger does not exclude children aged 16 or 17. |
| Other high risk | Retain an open general high-risk question. A list of examples is not an exhaustive safe list. |

Consultation: the guide p.11 says NCSA should be consulted where the controller is uncertain whether a DPIA is mandatory, whether one DPIA covers multiple operations, or has other DPIA doubts. It requires the full assessment to be supplied during consultation or on request (p.12). The retrieved Rwanda provisions do not reproduce Nigeria’s section 28(2) residual-high-risk consultation formula. Describe unresolved high risk as a reason to seek advice and prevent an unreviewed go-live; do not attribute a GDPR-style formula to Rwanda without another primary instrument.

Regression cases: RWD-S1, 17-year-old pupils → no automatic “not vulnerable” result; RWD-S2, one doctor’s patient records → distinguish large-scale sensitive-data trigger from other high risk; RWD-S3, city-wide public CCTV → art.38 trigger; RWD-S4, uncertain common DPIA across several projects → guide consultation; RWD-S5, consequential systematic automated scoring → preserve the complete trigger.

The DPO reported a workshop on draft regulations on 5 March 2026 [R4]. A consultation announcement is not evidence of enacted replacement rules. No later final instrument that changes these findings was verified in the retrieved materials. Approval requires all activities and outcomes from dpiaQuestions.ts. Owner decision: pending. Public reviewer: not recorded.

## 7. Ghana registration: candidate packet GH-REG-0.1

Act 843 sections 27, 46(3) and 53 address controller registration and prohibit unregistered controller processing. Section 45 determines scope. The DPC’s current organisation guidance also directs processors to register and renewal every two years [G1, G3]. An employee/client-only question or an organisation-size threshold cannot establish the full result.

| Proposed question | Candidate outcome / authority |
| --- | --- |
| GHR-Q1: Is personal data processed, and does s.45 connect the activity to Ghana? | Assess Ghana establishment/local processing, Ghana equipment or processor, or information originating partly or wholly in Ghana. Foreign-origin data merely in transit are excluded by s.45(4). |
| GHR-Q2: Are you a controller, processor, or both? | Controller: statutory registration duty. Processor only: the current regulator guidance directs registration; describe that source rather than misquote s.27 as expressly addressing all processors. |
| GHR-Q3: Is a specific exemption claimed for the particular processing? | Check the exact provision and its extent. Sections 60-61 and 63-65 require purpose-specific analysis. Section 67 concerns personal/family/household principles; s.66 concerns non-disclosure. Do not convert every exemption into exemption from registration. |
| GHR-Q4: Is there a valid current registration? | If no: register before controller processing. If yes: check the two-year renewal date under s.50 and the fourteen-day change notification duty under s.55. |
| GHR-Q5: Is scope, exemption or processor-only status uncertain? | Use a regulator/legal review result. Do not present uncertainty as a definitive “no registration needed”. |

Suggested outcomes: GHR-T1, registration required before in-scope controller processing; GHR-T2, current registration exists, check renewal and changes; GHR-T3, processor registration required under current DPC guidance; GHR-T4, no registration trigger identified on documented excluded facts; GHR-T5, exemption/scope unresolved, obtain a determination. A two-outcome display could still be used only if the upstream questions and conditional text fully capture those cases; the existing two-outcome flow cannot be certified without its source.

Official filing links: the current DPC organisation page links to https://app.dataprotection.org.gh/ and a Microsoft Forms registration/renewal route. Use the official landing page https://dpc.gov.gh/for-organisations/ as the maintainable entrypoint; retain the exact current form link in the approved packet. The documents page still labels the 2025 replacement text as a draft bill. No enacted replacement was verified; draft clauses are not current obligations [G4].

Regression cases: GHR-S1, foreign company uses Ghana processor → scope assessment; GHR-S2, foreign-origin data merely transits Ghana → s.45(4); GHR-S3, in-scope controller with only employee data → registration; GHR-S4, expired certificate → renewal/action required; GHR-S5, claim that household or legal disclosure exempt all obligations → assess precise exemption; GHR-S6, processor only → show regulator instruction and statutory distinction.

Approval scope: scope, role and registration-status questions, qualified exemption result and official entrypoint. Exact existing wording and current form destination remain to be attached. Owner decision: pending. Public reviewer: not recorded.

## 8. Privacy and legal notices: candidate packet NOTICE-0.1

No factual claim about the service has been verified. Public legislation cannot establish whether this particular service collects answers, runs analytics, keeps logs, uses overseas vendors or sends printed reports to a server. A corrected notice needs the actual deployment and configuration evidence. Nigeria s.27, Rwanda art.42, Ghana ss.23-24/27, Uganda s.13 and POPIA s.18 provide relevant transparency checks, subject to actual territorial applicability [N1, R1, G1, U1, S1].

| Claim to inspect | Evidence needed | Proposed wording approach |
| --- | --- | --- |
| We collect no personal data | Hosting/CDN logs, access logs, forms, accounts, support emails, analytics and error reporting. | State separately what happens to answers and what infrastructure records. Avoid “no personal data” if addresses, identifiers or correspondence are processed. |
| Answers stay in your browser | Network activity during answering, saved answers, local/session storage, telemetry and server routes. | Use a browser-only statement only after evidence confirms it. Explain any persistent browser storage and clearing controls. |
| No tracking or cookies | Scripts, SDKs, external fonts, embeds, consent setup, cookies and similar storage. | Name verified tools and purposes. A no-cookie finding does not by itself establish no tracking. |
| No retention / fixed retention | Log settings, backups, support mailbox periods, database retention and local storage. | Give actual periods or meaningful criteria for each data class. Do not promise immediate deletion if backups retain copies. |
| No international transfers | Vendor locations, access arrangements, hosting, CDN, analytics and support. | State verified recipients, locations and applicable safeguards. A local web interface does not establish local hosting. |
| Print / PDF export | Whether print uses the browser, a remote PDF generator, export API, external scripts or logging. | Explain the actual print flow. A device-generated output can contain answers; assess any new server export or analytics events separately. |
| Copying is prohibited | Owner’s intellectual-property rights, intended personal/internal-use permission and third-party source rights. | Align terms with the print feature. Define permitted use and attribution; do not claim exclusive rights over statutes or third-party materials. |
| Legal review claims | Approved content version, named reviewer permission, sources and actual approval date. | Display module-specific scope and approved version. A general research date must not imply approval of all outcomes. |

### Conditional draft for completion and owner approval

[Service operator and contact details] operates this service. It provides general information and decision support concerning specified data protection requirements. The result depends on the facts supplied and the cited sources. It does not determine every legal obligation applicable to an organisation.

When you use the service, [describe verified handling of answers, local storage and server submissions]. Our service providers process [verified technical data] for [purposes and lawful bases]. We retain those data for [periods or criteria]. [Identify recipients, relevant locations, transfer safeguards and how the user can obtain information about them].

The print feature [describe verified device or server operation]. A printout or saved PDF may include the answers and result displayed on screen. You control subsequent copies that you create or share. [State whether the service operator retains an export, after verification].

You may [owner-approved personal or internal business use] print or save results, subject to [approved attribution and redistribution conditions]. Rights in third-party material remain with the relevant rights holders. Module review information identifies the version and date actually approved; later changes require fresh review.

[Insert applicable rights, complaint route, contact process, update mechanism and any mandatory information appropriate to the verified processing]. This bracketed draft is not publication-ready. It must not be used to fill gaps with assumed technical facts.

Approval scope: final completed notice and copying permissions after configuration verification. Owner decision: pending. Public reviewer: not recorded.

## 9. Primary-source register

Binding statutes and regulatory directives are separated from guides, forms and operational webpages. Dates below are instrument dates or confirmed commencement dates, not search-crawl dates. Retrieval: 6 October 2026 for every entry.

### N1 | Nigeria Data Protection Act 2023

Binding Act; presidential assent / commencement 12 June 2023. Relevant provisions: ss.2-3, 25-31, 37, 40-45, 63-65.

Official URL: https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf

### N2 | NDPA General Application and Implementation Directive 2025, NDPC/NDP ACT-GAID/01/2025

Regulatory directive issued 20 March 2025; NDPC reports effective 19 September 2025. Relevant provisions: arts.3, 5-10, 16-28, 33; Schs.2, 4, 7, 8, 10.

Official URL: https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf

### N3 | Updated Registration Guidance Notice, NDPC/HQ/GN/VOL.03/B/24

Regulatory designation notice; dated 19 December 2024; reproduced in GAID Sch.7. Relevant provisions: paras.1-5; classification, sectors and exclusions.

Official URL: https://ndpc.gov.ng/wp-content/uploads/2025/07/Updated-Guidance-Notice-on-Registtration-2024.pdf

### N4 | NDPC FAQs

Regulator explanation; undated webpage, not a statutory amendment. Relevant provisions: CAR filing, DPCO route and OHL example.

Official URL: https://ndpc.gov.ng/faqs/

### N5 | NDPC Annual Report 2025

Official explanatory report published on regulator site in 2026; not a new instrument. Relevant provisions: pp.19-20: GAID issuance, effective date and implementation.

Official URL: https://ndpc.gov.ng/wp-content/uploads/2026/02/Print_NDPC-Annual-Report-2025-1.pdf

### N6 | NDPC NIMP

Operational webpages; no legal commencement date. Relevant provisions: Breach and registration/CAR entrypoints.

Official URL: https://services.ndpc.gov.ng/breach/ ; https://services.ndpc.gov.ng/

### R1 | Rwanda Law No. 058/2021 of 13 October 2021

Binding Act; Gazette and commencement 15 October 2021 (art.70); two-year compliance period art.67 is historical. Relevant provisions: arts.9, 38, 41-45, 67, 70.

Official URL: https://dpo.gov.rw/fileadmin/DPO/Law_relating_to_the_protection_of_personal_data_and_privacy.pdf

### R2 | NCSA Guidelines on DPIA

Official guidance; internally dated December 2023. Relevant provisions: pp.3-7: triggers; pp.11-12: consultation and disclosure.

Official URL: https://dpo.gov.rw/fileadmin/DPO/ComplianceTools/-_dpia-guide-and-form.pdf

### R3 | Rwanda breach service and form

Operational webpage and reporting form; no independent law commencement date. Relevant provisions: Form and published databreach@dpo.gov.rw contact.

Official URL: https://dpo.gov.rw/services/report-a-data-breach ; https://dpo.gov.rw/fileadmin/DPO/ComplianceTools/Personal%20Data%20Breach%20Notification%20Form.pdf

### R4 | DPO engages stakeholders to shape Rwanda’s Data Privacy regulations

Regulator news dated 5 March 2026; draft consultation, not binding law. Relevant provisions: Confirms draft status at that workshop.

Official URL: https://dpo.gov.rw/news-and-updates/news/article/dpo-engages-stakeholders-to-shape-rwandas-data-privacy-regulations

### U1 | Uganda Data Protection and Privacy Act, Cap.97

Binding Act; current NITA-U copy states commencement 3 May 2019. Relevant provisions: ss.13, 21-23; s.23 trigger, actors and subject notification.

Official URL: https://www.nita.go.ug/sites/default/files/2026-09/Data%20Protection%20and%20Privacy%20Act%20cap%2097.pdf

### U2 | Uganda Data Protection and Privacy Regulations 2021, SI 21/2021

Binding Regulations; Gazette supplement dated 12 March 2021. Exact independent commencement not established from the retrieved cover; do not infer from file-upload date. Relevant provisions: reg.33, Gazette p.732; Sch.1 Form 7.

Official URL: https://oldsite.nita.go.ug/sites/default/files/2022-11/Data_Protection_and_Privacy_Regulations-2021.pdf

### U3 | PDPO reporting service / Form 7

Operational service and official form; service path inspected without account creation or submission. Relevant provisions: Homepage breach route; Form 7 cited by reg.33(2).

Official URL: https://pdpo.go.ug/ ; https://pdpo.go.ug/media/2022/02/Form_7_-_Notification_of_Data_Breach.pdf

### G1 | Ghana Data Protection Act 2012, Act 843

Binding Act; assent 10 May 2012; DPC compliance page confirms in effect 16 October 2012. Gazette date 18 May 2012 is not treated as commencement. Relevant provisions: ss.27, 31, 45-56, 60-74.

Official URL: https://dpc.gov.gh/wp-content/uploads/2025/05/data-protection-act-2012-act-843.pdf

### G2 | DPC Incident / Data Breach Report Form

Official reporting form, undated; administrative instruction, not a statutory amendment. Relevant provisions: p.1 submission to incidents@dataprotection.org.gh; broader loss/damage language.

Official URL: https://dpc.gov.gh/wp-content/uploads/2025/07/INCIDENT-BREACH-REPORT-FORM-DPC-SAMPLE.pdf

### G3 | DPC For Organisations / Compliance

Official guidance and filing entrypoints; undated pages. Relevant provisions: Controller/processor registration; renewal; reported commencement.

Official URL: https://dpc.gov.gh/for-organisations/ ; https://dpc.gov.gh/compliance/

### G4 | DPC Documents

Official document index; lists replacement bill as draft. Relevant provisions: Act 843; draft bill; form and current resources.

Official URL: https://dpc.gov.gh/documents/

### S1 | South Africa Protection of Personal Information Act 4 of 2013

Binding Act; relevant ss.21-22 commenced 1 July 2020; s.114 compliance transition expired 1 July 2021. Relevant provisions: ss.21(2), 22; commencement notice linked on regulator Acts page.

Official URL: https://inforegulator.org.za/wp-content/uploads/2020/07/InfoRegSA-act-2013-004.pdf ; https://inforegulator.org.za/acts/

### S2 | Information Regulator security-compromises fact sheet

Official guidance; published 19 August 2025, page also displays 29 August update. Relevant provisions: Low risk, timing, operators, incomplete information.

Official URL: https://inforegulator.org.za/2025/08/19/fact-sheet-handling-of-security-compromises/

### S3 | Information Regulator POPIA FAQs / eServices

Official operational guidance; reporting channel applies from 1 April 2025. Relevant provisions: Security-compromises FAQ questions 4-8.

Official URL: https://inforegulator.org.za/popia/ ; https://eservices.inforegulator.org.za/

## 10. Existing wording comparison and implementation approval

The following is a review agenda, not a representation of exact current wording. No existing sentence is quoted because the files were unavailable. The module inventory must be attached before an owner can approve a complete revised module.

| Reported concern in the brief | Proposed treatment | Why / remaining evidence |
| --- | --- | --- |
| Nigeria DPIA unavailable; Rwanda tree may have been reused | Separate Nigeria sequence and GAID express triggers in NG-DPIA-0.1. | Nigeria instruments differ; exact former flow not supplied. |
| Nigeria annual-audit guidance unavailable | Classification-first CAR versus OHL renewal result in NG-CAR-0.1. | Current GAID; inspect all former threshold and timing text. |
| Five breach modules | Separate triggers, actors, deadlines, exceptions and channels. | No common risk or clock assumption; exact outcome inventory missing. |
| Nigeria categorical exemptions | Replace whole-law conclusions with purpose-specific exemptions and retained duties. | NDPA s.3; inspect every branch. |
| Nigeria default consent outcome | Add “no established basis” and conditional consent; reconcile special-processing provisions. | Consent suitability is not established by failure of other bases. |
| Rwanda activities and age threshold | Distinguish art.38/guide triggers from art.9 under-16 consent rule. | Every existing activity still needs one-to-one source mapping. |
| Ghana two-outcome registration flow | Add scope, role, exemptions, current registration and uncertainty conditions. | Statute and regulator guidance must be distinguished. |
| Notices and print feature | Complete NOTICE-0.1 after factual configuration review. | No actual service configuration was inspected. |

Approval procedure for each packet: attach the complete question and terminal-outcome inventory; map each to a source and scenario; show exact current and proposed text; resolve or publish the stated uncertainties; obtain approval of the named packet and immutable content version; record the owner’s chosen public reviewer name only if supplied and authorised.

After approval and implementation, add citations, reviewedAt and reviewer to src/data/catalog.ts only for the approved version. Record the content version or commit and the approval record. If substantive content changes, invalidate or withhold the old approval indication until the changed version is reviewed. Availability changes require implemented approved content and passing regression cases. The scenarios above are candidate legal-review cases, not executed tests. Software tests establish routing and wording behaviour; they do not establish the correctness of the law.

| Packet | Decision | Approved content version / date | Public reviewer |
| --- | --- | --- | --- |
| NG-DPIA-0.1 | Pending | Not recorded | Not recorded |
| NG-CAR-0.1 | Pending | Not recorded | Not recorded |
| NG-BREACH-0.1 | Pending | Not recorded | Not recorded |
| RW-BREACH-0.1 | Pending | Not recorded | Not recorded |
| UG-BREACH-0.1 | Pending | Not recorded | Not recorded |
| GH-BREACH-0.1 | Pending | Not recorded | Not recorded |
| ZA-BREACH-0.1 | Pending | Not recorded | Not recorded |
| NG-SCOPE-0.1 | Pending | Not recorded | Not recorded |
| NG-BASIS-0.1 | Pending | Not recorded | Not recorded |
| RW-DPIA-0.1 | Pending | Not recorded | Not recorded |
| GH-REG-0.1 | Pending | Not recorded | Not recorded |
| NOTICE-0.1 | Pending | Not recorded | Not recorded |
