import { useParams } from "react-router-dom";
import industries from "../../data/indistries";
import IndustryHero from "../../components/sections/hero/IndustryHero";
import MarkdownTextSection from "../../components/sections/MarkdownTextSection";

const IndustryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const targetIndustry = industries.find((industry) => industry.id === id);

  return (
    <article>
      <IndustryHero
        image={targetIndustry?.image || ""}
        title={targetIndustry?.title || "Loading..."} 
      />

      <MarkdownTextSection text={targetIndustry?.content || 'loading...'}/>
    </article>
  );
};

export default IndustryDetailPage;
