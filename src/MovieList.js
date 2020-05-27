import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <React.Fragment>
            {
                movies.map(movie => (
                    <div className="col-md-3 mt-3" key={`movei-${movie.id}`}>
                        <div className="card" >
                            <div className="hovereffect">
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                            </div>
                            <div className="card-body">
                                {movie.title}
                            </div>
                        </div>
                    </div>
                ))
            }
        </React.Fragment >
    )
}

export default MovieList;