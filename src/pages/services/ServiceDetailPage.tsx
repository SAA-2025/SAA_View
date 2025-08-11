import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../../data/services.ts";
import { Service } from "../../lib/infocard.props.ts";
import ContactSection from "../../components/sections/ContactSection.tsx";
import ServicesSection from "../../components/sections/ServicesSection.tsx";
import BasicHero from "../../components/sections/hero/BasicHero.tsx";
import MarkdownTextSection from "../../components/sections/MarkdownTextSection.tsx";

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [targetService, setTargetService] = useState<Service | null>(null);

  useEffect(() => {
    const found = services.find((service) => service.id === id) || null;
    setTargetService(found);
  }, [id]);

  if (!targetService) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-accent" role="status" />
      </div>
    );
  }

  return (
    <article>
      <BasicHero
        title={targetService.title}
        shortDescription={targetService.shortDescription}
        icon={targetService.icon}
      />

      <MarkdownTextSection text={targetService.content} />

      <ContactSection />
      <ServicesSection />
    </article>
  );
};

export default ServiceDetailPage;
