import { Template1 } from "@/app/components/layouts";
import {
  TopTrends,
  FeacherSection1,
  FeacherPageSection,
} from "@/app/components/sections";

export default function FeachersPage() {
  return (
    <Template1>
      <FeacherSection1 />
      <FeacherPageSection />
      <TopTrends />
    </Template1>
  );
}
