import { useEffect} from "react";

export function useFetchMovie(imdbID,movie,setMovie) {
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=b5364880&i=${imdbID}`)
            .then((responce) => responce.json())
            .then((data) =>setMovie(data));
        }, [imdbID]);
    return movie
}