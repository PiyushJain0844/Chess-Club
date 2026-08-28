function Timeline() {
    const events = [
        {
            year: "2024",
            title: "En Passant ABESEC Begins",
            description:
            "En Passant - ABESEC established its presence as a chess community on Chess.com, bringing students together through chess."
        },
        {
            year: "2025",
            title: "CCL Summer Week",
            description:
            "En Passant participated in CCL Summer Week 2, competing alongside chess clubs from colleges and universities."
        },
        {
            year: "2025",
            title: "KnightMares",
            description:
            "En Passant organized KnightMares, a rapid team chess tournament for chess enthusiasts."
        },
        {
            year: "2025",
            title: "PawnChayat",
            description:
            "PawnChayat brought together 132 players for a competitive online chess tournament."
        },
        {
            year: "2025",
            title: "Chess960 Arena",
            description:
            "The club hosted a Chess960 Arena with 18 players, giving members a chance to experience a different chess format."
        }
    ];
    
    return (
    <section className="timeline-section">
        <h2>Our Journey</h2>
        <p className="timeline-intro">
            From our beginnings to exciting chess events, every move has been part of the journey.
        </p>
        
        <div className="timeline">
            {events.map((event, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    
                    <div className="timeline-card">
                        <div className="event-icon">♟</div>
                        <span className="timeline-year">{event.year}</span>
                        
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
}

export default Timeline; 