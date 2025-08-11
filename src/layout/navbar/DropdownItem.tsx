interface DropdownItemProps {
  itemProp: {
    text: string;
    link: string;
  };
  hasDivider?: boolean;
}

const DropdownItem = ({ itemProp, hasDivider }: DropdownItemProps) => {
  return (
    <>
      <li>
        <a
          className="dropdown-item py-3 text-center fw-bold"
          href={`/${itemProp.link}`}
        >
          {itemProp.text}
        </a>
      </li>
      {hasDivider && (
        <div className="d-flex align-items-center justify-content-center">
          <hr className="dropdown-divider short-divider border-secondary opacity-25" />
        </div>
      )}
    </>
  );
};

export default DropdownItem;
