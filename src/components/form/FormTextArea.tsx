interface FormTextAreaProps {
  id: string;
  label?: string;
  rowNumber?: number;
  placeHolder?: string;
  validation?: {
    valid: string;
    invalid: string;
  };
}

const FormTextArea = ({
  id,
  label,
  rowNumber,
  placeHolder,
  validation,
}: FormTextAreaProps) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="form-label fs-6 text-secondary"
      >
        {label}
      </label>
      <textarea
        className="form-control"
        id={id}
        rows={rowNumber || 10}
        placeholder={placeHolder}
        required
      ></textarea>
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

export default FormTextArea;
