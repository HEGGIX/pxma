import { useEffect } from "react";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux"
import { fetchMovies } from "../../store/moviesSlice";

export const Movies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
      }, []);
}