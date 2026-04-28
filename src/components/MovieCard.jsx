export default function MovieCard({ movie}) {

    return (
        <div className="col">
                            <div className="card">
                                <img src={movie.image} className="card-img-top" alt={movies.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{movies.author}</p>
                                    <div className="card-text">Year: {movies.year}</div>
                                    
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
    )
}   