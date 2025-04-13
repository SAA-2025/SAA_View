
import FormButton from "../buttons/FormButton";
import FormControl from "./FormControl";
import FormTextArea from "./FormTextArea";
import FormHeader from "./FormHeader";
import FormControlGroup from "./FormControlGroup";
import { useEffect } from "react";
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  useEffect(() => {
    const forms =
      document.querySelectorAll<HTMLFormElement>(".needs-validation");

    Array.from(forms).forEach((form) => {
      const handleSubmit = (event: Event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      };

      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    });
  }, []);

  const sendEmail = (e: Event) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', e.target, 'public_key')
  }
  
  return (
    <div>
      <FormHeader title="დაგვიკავშირდი" header="რამე ტექსტი" />
      <form className=" needs-validation" noValidate onSubmit={sendEmail}>
        <FormControlGroup
          formControlItems={[
            {
              id: "firstNameInput"  ,
              label: "First Name",
              placeHolder: "eg: Jon",
            },
            {
              id: "lastNameInput",
              label: "Last Name",
              placeHolder: "eg: Doe",
            },
          ]}
        />
        <FormControl
          id="emailInput"
          label="Email Address"
          type="email"
          placeHolder="name@example.com"
        />
        <FormTextArea
          id="messageBodyTextArea"
          label="Message Body"
          placeHolder="Type your message here..."
        />
        <div className="text-center mt-4">
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
