interface FormControlProps {
  id: string;
  label?: string;
  type?: string;
  placeHolder?: string;
  validation?: {
    valid: string;
    invalid: string;
  };
}

const FormControl = ({
  id,
  label,
  type,
  placeHolder,
  validation,
}: FormControlProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fs-6 text-secondary">
        {label}
      </label>
      <input
        type={type || "text"}
        className="form-control"
        id={id}
        name={id}
        placeholder={placeHolder}
        required
      />
      {validation == null ? (
          <>
              <div className="valid-feedback">
                {`${label} is valid`}
              </div>
              <div className="invalid-feedback">
                {`${label} is not valid!`}
              </div>
          </>
      ) : (
          <>
              <div className="valid-feedback">
                {validation?.valid}
              </div>
              <div className="invalid-feedback">
                {validation?.invalid}
              </div>
          </>
      )}
        
    </div>
  );
};

export default FormControl;
