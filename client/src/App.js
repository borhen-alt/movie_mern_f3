import React from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
const App = () => {
    return (
        <div>
            <h1>movie app</h1>
            <AddMovie />
            <MovieList />
        </div>
    );
};

export default App;
