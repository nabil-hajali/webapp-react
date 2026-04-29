export default function MovieCard({ movie }) {
    if (!movie) return null;

    return (
        <div className="col">
            <div className="card">
                {movie.image && <img src={movie.image} className="card-img-top" alt={movie.title} />}
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    {movie.director && <div className="card-text">{movie.director}</div>}
                    {movie.genre && <div className="card-text">{movie.genre}</div>}
                    {movie.release_year && <div className="card-text">Year: {movie.release_year}</div>}
                    
                    <a href="#" className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    )
}   