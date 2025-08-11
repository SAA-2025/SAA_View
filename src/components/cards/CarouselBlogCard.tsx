interface CarouselBlogCardProps {
    card: {
        title: string,
        header: string,
        date: string,
        image: string,
        author: {
            name: string,
            lastName: string,
            position: string,
            pfp: string
        }
    }
}

const CarouselBlogCard = ({card}: CarouselBlogCardProps) => {
    return (
        <div className="card rounded-4 mx-2">
            <div className="row g-0">
                <div className="col-md-4">
                <img 
                    src={card.image} 
                    className="img-fluid h-100 w-100 responsive-rounded" 
                    alt="blog image goes here" 
                />
                </div>
                <div className="col-md-8">
                    <div className="card-body h-100 p-4">
                        <div className="container-fluid h-100 p-0 ">
                            <div className="row mb-lg-5 mb-4">
                                <h5 className="card-title fs-2 fw-bold">{card.title}</h5>
                                <p className="card-text text-secondary">{card.header}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={card.author.pfp}
                                        alt="profile pic"
                                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                    <div className="ms-2">
                                        <p className="card-text m-0">{card.author.name} {card.author.lastName}</p>
                                        <small className="text-body-secondary">{card.author.position}</small>
                                    </div>
                                </div>

                                <p className="card-text m-0">
                                    <small className="text-body-secondary">{card.date}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselBlogCard