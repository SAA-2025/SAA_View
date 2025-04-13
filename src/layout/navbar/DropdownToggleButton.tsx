import 'remixicon/fonts/remixicon.css'

const DropdownToggleButton = () => {
    return (
        <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <i className="ri-menu-line text-danger fw-bold"></i>
        </button>
    )
}

export default DropdownToggleButton;