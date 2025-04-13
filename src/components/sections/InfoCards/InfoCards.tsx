import InfoCard from "../../cards/InfoCard";

interface InfoCardsProps {
    infoCards: {
        title: string,
        body: string,
        icon: string,
        link: string
    }[]
}

const InfoCards = ({infoCards}: InfoCardsProps) => {
    return (
        <div>
            {infoCards.map((infoCard) => (
                <InfoCard infoCard={infoCard}/>
            ))}
        </div>
    )
}

export default InfoCards;

