interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamMemberCard = ({ name, position, image }: TeamMemberCardProps) => {
  return (
    <div
      className="card border-0 rounded-4 shadow p-3 mb-4"
      style={{ width: "100%", height: "270px" }}
    >
      <img
        src={image}
        alt="team member pfp"
        className="rounded-2 mb-2"
        style={{
          height: "160px",
          objectFit: "contain",
          backgroundColor: "#CDD8DE",
        }}
      />
      <div
        className="card-body text-center p-0 d-flex flex-column justify-content-center"
        style={{ overflow: "hidden" }}
      >
        <p
          className="mb-1 fw-semibold text-break"
          style={{
            fontSize: "1rem",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {name}
        </p>
        <p
          className="mb-0 text-secondary text-break"
          style={{
            fontSize: "0.85rem",
            lineHeight: "1.2",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {position}
        </p>
      </div>
    </div>
  );
};


export default TeamMemberCard;
