import { Template1 } from "@/app/components/layouts";
import {
  Feachers,
  Pricing,
  PricingSection1,
  TestoNomial,
} from "@/app/components/sections";

export default function PricingPage() {
  return (
    <Template1>
      <PricingSection1 />
      <Pricing />
      <Feachers />
      <TestoNomial />
    </Template1>
  );
}
