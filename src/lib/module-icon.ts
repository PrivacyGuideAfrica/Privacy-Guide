import { FileText, ScanLine, Users, Scale, ShieldAlert, ClipboardCheck, CalendarDays, UserRoundCheck, Fingerprint, Mail, Baby } from "lucide-react";

export function moduleIcon(title: string) {
  if (/breach/i.test(title)) return ShieldAlert;
  if (/DPIA|impact/i.test(title)) return ClipboardCheck;
  if (/audit|annual/i.test(title)) return CalendarDays;
  if (/basis/i.test(title)) return Scale;
  if (/controller|processor|party|operator/i.test(title)) return Users;
  if (/apply|application|applicability/i.test(title)) return ScanLine;
  if (/officer|DPO|representative|supervisor/i.test(title)) return UserRoundCheck;
  if (/rights|sensitive|special/i.test(title)) return Fingerprint;
  if (/children/i.test(title)) return Baby;
  if (/marketing/i.test(title)) return Mail;
  return FileText;
}
