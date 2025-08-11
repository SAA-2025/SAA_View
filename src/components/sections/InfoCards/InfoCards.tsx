import InfoCard from "../../cards/InfoCard";
import { InfoCardsProps } from "../../../lib/infocard.props";


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

