import { useSelector, useDispatch } from "react-redux";
import { getMovies, deleteMovie } from "../js/actions/actions";
function MovieList() {
    const movies = useSelector((state) => state.movies);
    console.log(movies);
    const dispatch = useDispatch();
    return (
        <div className="MovieList">
            <h1>list of movies</h1>
            <button onClick={() => dispatch(getMovies())}>get movies</button>
            {movies.map((el) => (
                <div className="card" key={el._id}>
                    {" "}
                    <h1>{el.name}</h1>
                    <button onClick={() => dispatch(deleteMovie(el._id))}>
                        delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
