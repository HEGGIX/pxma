export interface IMoviesItem{
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
    Actors: string,
    Released: string,
    BoxOffice: string,
    Country: string,
    Production: string,
    Director: string,
    Writer: string
    Genre: string,
    imdbRating: string,
    Runtime: string,
    Plot: string
}

export interface IOneMovie{
    Poster:string,
    Type:string,
    Title:string,
    Genre:string,
    imdbRating:string,
    Runtime:string,
    Plot:string
}

export interface ISearchMovie{
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export interface User{
    username: string;
    email: string;
    password: string;
    course_group: number;
}

export interface IAuthContext {
    isAuth: User;
    signin: (auth: User, callBack: () => void) => void;
    signout: (callBack: () => void) => void;
}

export interface ActivateUser {
    uid: string;
    token: string;
}

export interface IChildren{
    children:React.ReactNode[]|React.ReactNode
}