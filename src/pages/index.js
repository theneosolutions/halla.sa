import { Template1 } from "@/app/components/layouts";
import {
  Feachers,
  TopTrends,
  Pricing,
  Download,
  HomeSection,
  TextSection,
} from "@/app/components/sections";

export default function Home() {
  return (
    <Template1>
      <HomeSection />
      <TextSection />
      <Feachers />
      <TopTrends />
      <Pricing />
      <Download />
    </Template1>
  );
}
