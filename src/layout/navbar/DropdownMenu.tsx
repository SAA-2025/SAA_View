import DropdownItem from "./DropdownItem";

interface DropdownMenuProps {
  dropdownItems?: {
    text: string;
    link: string;
  }[];
}

const DropdownMenu = ({ dropdownItems = [] }: DropdownMenuProps) => {
  return (
    <ul className="dropdown-menu px-4 py-3">
      {dropdownItems.map((item, index) => (
        <DropdownItem key={index} itemProp={item} hasDivider={index < dropdownItems.length - 1} />
      ))}
    </ul>
  );
};

export default DropdownMenu;
