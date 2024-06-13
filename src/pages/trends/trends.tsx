import "./trends.scss"
import "../../components/movies/moviesMedia.scss"
import "../../components/movies/movies.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header/header"
import { MoviesItem } from "../../components/moviesItem/moviesItem";
import { fetchTrendsMovies } from "../../store/trendsSlice"
import { IMoviesItem } from "../../types/types";
import { Tabs } from "../../ui-components/tabs/tabs"

export const Trends = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTrendsMovies());
      },[]);
    const trendsMovies = useSelector(state => state.trends.trendsMovies)
    return(
        <>
            <Header/>
            <div className = "trends">
                <Tabs/>
                <div className="movies">{trendsMovies.map((movie:IMoviesItem)=><MoviesItem key={movie.imdbID} {...movie}/>)}</div>
            </div>
        </>
    )
}