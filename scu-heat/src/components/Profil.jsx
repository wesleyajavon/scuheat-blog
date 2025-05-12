import "../index.css"

export default function Profil(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.image.src ? props.image.src : props.image} alt={props.image.alt ? props.image.alt : props.name} />
            </div>

            <div className="info-container">
                <span>
                    <img className="main-image-marker" src={props.flag.src} alt="map marker icon" />
                </span>

                <span className="span-container">
                        <span className="country">{props.country}</span>
                        <span className="hometown">{props.hometown}</span>
                </span>

                <h2 className="entry-fullname">{props.name}</h2>
                <p className="entry-text">{props.position}</p>

            </div>
        </article>
    )
}
