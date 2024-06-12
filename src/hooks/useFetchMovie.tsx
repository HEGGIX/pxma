import { useEffect, useState } from "react";

export function useFetchMovie(imdbID) {
    const [oneMovie, setOneMovie] = useState({
        Poster:"",
        Type:"",
        Title:"",
        Genre:"",
        imdbRating:  "",
        Runtime:  "",
        Plot:  ""
    })
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=b5364880&i=${imdbID}`)
            .then((responce) => responce.json())
            .then((data) =>setOneMovie(data));
        }, [imdbID]);
    return oneMovie
}