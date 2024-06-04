import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header/header"
import { MoviesItem } from "../../components/moviesItem/moviesItem";
import { fetchTrendsMovies } from "../../store/trendsSlice"
import { IMoviesItem } from "../../types/types";
import { Tabs } from "../../ui-components/tabs/tabs"
import "./trends.scss"
import "../../components/movies/movies.scss"
import { ThemeContext } from "../../context/context";

export const Trends = () => {
    const themeContext = useContext(ThemeContext)
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