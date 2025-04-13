const ContactsList = () => {
  return (
    <ul className="list-unstyled fs-5">
      <li className="mb-4">
        <i className="ri-phone-fill me-3"></i>
        <a
          href="mailto:+995514534345"
          className="text-decoration-none text-white"
        >
          +(995) 571 80 00 80
        </a>
      </li>
      <li className="mb-4">
        <i className="ri-mail-fill me-3"></i>
        <a
          href="mailto:info@saa.ge  "
          className="text-decoration-none text-white"
        >
          info@saa.ge
        </a>
      </li>
      <li className="mb-4">
        <i className="ri-map-pin-fill me-3"></i>
        <a
          href="https://maps.app.goo.gl/hjRtJ8ULyFKX1sbd8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-white"
        >
          ალექსანდრე ყაზბეგის გამზირი 3ა
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
