import { useParams } from "react-router-dom";
import aboutUsData from "../../data/about"
import BasicHero from "../../components/sections/hero/BasicHero";
import ContactSection from "../../components/sections/ContactSection";
import MarkdownTextSection from "../../components/sections/MarkdownTextSection";

const AboutUsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const targetAboutUs = aboutUsData.find((about) => about.id === id);

  return (
    <article>
      <BasicHero
        title={targetAboutUs?.title || "Loading..."}
        shortDescription={targetAboutUs?.shortDescription || "Loading..."}
        icon={targetAboutUs?.icon || "info"}
      />
      <MarkdownTextSection text={targetAboutUs?.text || 'loading...'}/>
      <ContactSection />
    </article>
  )
}

export default AboutUsDetailPage