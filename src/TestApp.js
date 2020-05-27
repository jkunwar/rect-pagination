import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from './Pagination';
import MovieList from './MovieList';
import './App.css';

const TestApp = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=8dcc478bc8ac0518dd5d7b133c69b56b&language=en-US&page=${currentPage}`)
            .then(res => {
                const { results, total_pages } = res.data
                setTotalPages(total_pages)
                setMovie(results)
            })
            .catch(err => console.log(err))



    }, [currentPage]);

    const handlePageChange = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="container">
            <div className="row">
                <MovieList movies={movies} />
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <Pagination
                        currentPage={currentPage}
                        pageChange={handlePageChange}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </div>
    )
}

export default TestApp;