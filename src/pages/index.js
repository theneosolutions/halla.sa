import { Template1 } from "@/app/components/layouts";
import {
  Feachers,
  TopTrends,
  Pricing,
  Download,
  HomeSection,
  TextSection,
  Contact,
} from "@/app/components/sections";
import { Link as ScrollLink, Element } from "react-scroll";
export default function Home() {
  return (
    <Element name="home">
      <Template1>
        <HomeSection />
        <TextSection />
        <Feachers />
        <TopTrends />

        <Pricing />

        <Download />

        <Contact />
      </Template1>
    </Element>
  );
}
