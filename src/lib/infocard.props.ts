interface InfoCardsProps {
    infoCards: {
        id: string;
        title: string;
        body: string;
        icon: string;
    }[]
}

interface InfoCardProps {
    infoCard: {
        id: string;
        title: string;
        body: string;
        icon: string;
    }
}

interface Service {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    coverImageURL: string;
    content: string;
    icon: string;
} 

export type { InfoCardsProps, InfoCardProps, Service };