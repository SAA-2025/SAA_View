
interface FormHeaderProps {
    title: string,
    header?: string
}

const FormHeader = ({title, header}: FormHeaderProps) => {
  return (
    <div className="text-center mb-5">
      <h4>
        <strong>{title}</strong>
      </h4>
      <p className="text-secondary">{header}</p>
    </div>
  );
};

export default FormHeader;
