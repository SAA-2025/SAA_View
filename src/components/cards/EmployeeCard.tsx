import Button from "../buttons/Button";


interface EmployeeCardProps {
  employee: {
    id: number;
    name: string;
    position: string;
    email: string;
    phone: string;
    image: string;
    bio: string;
  }
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <div className="card border-0 rounded-4 text-center m-2 d-flex flex-column align-content-between h-100"
    style={{minHeight: '430px'}}>
      <img
        src={employee.image}
        className="img-fluid rounded-4"
        alt={employee.name}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "3 / 4",
          objectFit: "cover",
        }}
      />
      <div className="card-body h-100 d-flex flex-column align-items-center justify-content-between">
        <p className="mb-3 fw-bold" style={{fontSize: '14px'}}>{employee.name}</p>
        <Button text="გაიგე მეტი" href={`employee/${employee.id.toString()}`} />
      </div>
    </div>
  );
};

export default EmployeeCard;
