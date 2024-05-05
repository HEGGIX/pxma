import "./filter.scss";
import { Search } from "../../ui-components/search/search";
import { ReactComponent as Close } from "../../assets/close.svg";
import { Sort } from "../../ui-components/sort/sort";
import { MovieName } from "../../ui-components/movieName/movieName";
import { SortInput } from "../../ui-components/sortInput/sortInput";
import { Button } from "../../ui-components/button/button";

export const Filters = () => {
    return(
        <>
            <div className="filters">
                <div className="filters-wrapper">
                    <div className="filters-title__container">
                        <h2 className="filters-title">Filters</h2>
                        <button className="filters-title__btn"><Close/></button>
                    </div>
                    <Sort/>
                    <MovieName/>
                    <div className="genre-container">
                        <form>
                            <h3 className="genre-title">Genre</h3>
                        </form>
                    </div>
                    <SortInput placeholderFrom="from" placeholderTo="to" title = "Years"/>
                    <SortInput placeholderFrom="from" placeholderTo="to" title = "Ratings"/>
                    <div className="country-input__container">
                        <h3 className="country-input__title">Country</h3>
                        <div className="country-input__wrapper">
                            <div className="country-input">
                                <input type="checkbox" id=""/>
                                <label htmlFor=""></label>
                            </div>
                        </div>
                    </div>
                    <div className="filters-btn__container">
                        <Button text="Clear filter"/>
                        <Button text="Show results"/>
                    </div>
                </div>
            </div>
        </>
    )
}