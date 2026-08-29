import { useEffect, useState } from "react";

function Arenas() {
    const [arenas, setArenas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/arenas")
            .then((response) => response.json())
            .then((data) => {
                setArenas(data);
            })
            .catch((error) => {
                console.log("Error fetching arenas:", error);
            });
    }, []);

    return (
        <section className="arena-section">
            <div className="arena-heading">
                <p>CHESS CLUB</p>
                <h1>Upcoming & Past Arenas</h1>
                <span>
                    Explore our chess arenas, events and champions.
                </span>
            </div>

            <div className="arena-container">
                {arenas.map((arena) => (
                    <div className="arena-card" key={arena._id}>

                        <div className="arena-top">
                            <span className="arena-date">
                                {new Date(arena.date).toLocaleDateString()}
                            </span>

                            <h2>{arena.arenaName}</h2>

                            <p>{arena.description}</p>
                        </div>

                        <div className="arena-info">
                            <div>
                                <strong>Prize</strong>
                                <span>{arena.prize}</span>
                            </div>

                            <div>
                                <strong>Time</strong>
                                <span>
                                    {arena.startTime} - {arena.endTime}
                                </span>
                            </div>
                        </div>

                        <div className="winners">
                            <h3>🏆 Winners</h3>

                            {arena.winners.map((winner) => (
                                <div
                                    className="winner"
                                    key={winner._id}
                                >
                                    <span>{winner.position}</span>
                                    <p>{winner.name}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href={arena.arenaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="arena-button"
                        >
                            View Arena
                        </a>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Arenas;