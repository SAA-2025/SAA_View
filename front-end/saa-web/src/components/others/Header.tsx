interface HeaderProps {
    title: string;
    body: string;
}


const Header = ({title, body}: HeaderProps) => {
  return (
    <div className="row mb-3 p">
        <div className="col-lg-3 col-12">
            <strong>{title}</strong>
        </div>
        <div className="col-lg-9 col-12 text-secondary">
            <small>{body}</small>
        </div>
    </div>
  )
}

export default Header