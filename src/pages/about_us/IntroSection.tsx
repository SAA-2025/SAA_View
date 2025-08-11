import Title from "../../components/others/Title";
import Header from "../../components/others/Header";
import Button from "../../components/buttons/Button";

interface IntroSectionProps {
  item: {
    id: string;
    title: string;
    into: Array<{
      title: string;
      content: string;
    }>;
    text: string;
  };
}

const IntroSection = ({ item }: IntroSectionProps) => {
  const finalTitle = item.title.replace(' ', ' - ');
  return (
    <section>
      <div className="container py-5">
        <Title title={finalTitle}></Title>
        <div className="row">
          <div className="col">
            {item.into.map((item, index) => (
              <Header key={index} title={item.title} body={item.content} />
            ))}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center align-items-center">
            <Button text="სრულად" href={item.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
