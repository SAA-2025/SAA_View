import FormControl from "./FormControl";

interface FormControlGroupProps {
  formControlItems: {
    id: string;
    label?: string;
    type?: string;
    placeHolder?: string;
    validation?: {
      valid: string;
      invalid: string;
    };
  }[];
}

const FormControlGroup = ({formControlItems}: FormControlGroupProps) => {
  return (
    <div className="row">
        {formControlItems.map((formControlItem) => {
            return(
                <div className={`col-md-${Math.floor(12/formControlItems.length)}`}>
                    <FormControl
                        id={formControlItem.id}
                        label={formControlItem.label}
                        placeHolder={formControlItem.placeHolder}
                        type={formControlItem.type}
                        validation={formControlItem.validation}
                    />
                </div>
            )
        })}
    </div>
  )
};

export default FormControlGroup;
