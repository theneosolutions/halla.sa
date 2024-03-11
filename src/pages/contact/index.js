import { Template1 } from "@/app/components/layouts";
import {
  ContactSection1,
  TestoNomial,
  Contact,
} from "@/app/components/sections";

export default function ContactPage() {
  return (
    <Template1>
      <ContactSection1 />
      <Contact />
      <TestoNomial />
    </Template1>
  );
}
