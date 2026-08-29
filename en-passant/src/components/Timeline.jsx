function Timeline() {
    const events = [
        {
            year: "2024",
            title: "En Passant ABESEC Begins",
            description:
            "En Passant - ABESEC established its presence as a chess community, bringing students together and promoting chess across the college."
        },
        
        {
            year: "2024",
            title: "SehMaat",
            description:
            "En Passant organized SehMaat from 27–30 May 2024 at Ramanujan Block, giving students an opportunity to showcase their chess skills. The event featured solo girls, solo boys, team boys and interclub players."
        },

        {
            year: "2025",
            title: "ABES Chess Championship (ACC)",
            description:
            "ACC 2025 brought together 120+ players for an intense chess championship from 22–27 April 2025, featuring 600+ games and 6+ blitz tie-breakers across the Open and Girls' sections."
        },

        {
            year: "2025",
            title: "KnightMares",
            description:
            "En Passant organized KnightMares, a rapid team chess tournament for chess enthusiasts."
        },

        {
            year: "2025",
            title: "Chess960 Arena",
            description:
            "The club hosted a Chess960 Arena, giving members an opportunity to experience and compete in a different format of chess."
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