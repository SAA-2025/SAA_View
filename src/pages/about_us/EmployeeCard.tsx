import Button from "../../components/buttons/Button";


interface EmployeeCardProps {
  name: string;
  role: string;
  image: string;
  link: string;
}

const EmployeeCard = ({ name, role, image, link }: EmployeeCardProps) => {
  return (
    <div className="card border-0 rounded-4 overflow-hidden text-center h-100">
      <img
        src={image}
        className="img-fluid rounded-4"
        alt={name}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "3 / 4",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <p className="mb-4 fw-bold">{role}</p>
        <Button text="გაიგე მეტი" href={link} />
      </div>
    </div>
  );
};

export default EmployeeCard;
