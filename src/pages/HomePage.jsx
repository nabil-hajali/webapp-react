

import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard.jsx'

export default function HomePage() {

    const [movies, setMovies] = useState([]);
  

    useEffect(() => {
        const api_url = import.meta.env.VITE_API_SERVER_ADDRESS + "/api/movies";
        console.log('Fetching from:', api_url);
        fetch(api_url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setMovies(data.results || data);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);




    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">The Movies Reviewers</h1>
                    <p className="col-md-8 fs-4">
                        Welcome to our movie review website! We are passionate about cinema and dedicated to providing you with insightful and honest reviews of the latest films. Whether you're a casual moviegoer or a die-hard cinephile, our team of expert reviewers is here to guide you through the world of movies, helping you discover hidden gems and avoid disappointing releases. Join us on this cinematic journey as we explore the art of storytelling through film and share our thoughts on the movies that shape our culture.
                    </p>

                </div>
            </div>




            <section>
                <div className="container">
                    <h2 className='text-muted'>Movies</h2>
                    <div className="row">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}