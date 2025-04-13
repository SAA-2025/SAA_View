import './style.css'

interface DropdownItemProps {
  itemProp: {
    text: string;
    link: string;
  };
}

const DropdownItem = ({ itemProp }: DropdownItemProps) => {
  return (
    <>
      <li>
        <a className="dropdown-item py-2 py-lg-1 text-center fw-bold" href={itemProp.link}>
          {itemProp.text}
        </a>
      </li>
    </>
  );
};

export default DropdownItem;
