import DropdownItem from "./DropdownItem";
import './style.css'

interface DropdownMenuProps {
  dropdownItems?: {
    text: string;
    link: string;
  }[];
}

const DropdownMenu = ({ dropdownItems = [] }: DropdownMenuProps) => {
  return (
    <ul className="dropdown-menu dropdown-menu px-4 py-3">
      {dropdownItems.map((item, index) => (
        <div key={index}>
          <DropdownItem itemProp={item} />
          {index < dropdownItems.length - 1 && (
            <li>
              <hr className="dropdown-divider short-divider hr-theme" />
            </li>
          )}
        </div>
      ))}
    </ul>
  );
};

export default DropdownMenu;
