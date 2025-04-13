

const TeamMemberCard = () => {
    return (
        <div className="card border-0 rounded-3 shadow p-2 mb-4">
            <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="team member pfp"
                className="rounded-2"
                style={{
                    objectFit: "cover",
                    // height: "120px",
                }}
            />
            <div className="card-body text-center">
                <h6>სახელი გვარი</h6>
                <p className="mb-0">პოზიცია</p>
            </div>
        </div>
    )
}

export default TeamMemberCard