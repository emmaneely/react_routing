import React from "react";
import { APIService } from "../services/API.service";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";

export const FilmsView = (props) => {
    const [films, setFilms] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchFilms = async () => {
        let data = await APIService.getList("films");
        if (data) setFilms(data);
        setIsLoading(false);
    };

    React.useEffect(() => {
        fetchFilms();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className="my-4">
            <h1>Films ({films.length})</h1>
            <ul className="list-group">
                {films.map(
                    ({ id, title, release_date }) => (
                        <li key={id} className="list-group-item">
                            <h3>{title}</h3>
                            <p>{release_date}</p>
                            <Link to={`${id}`}>Film Details</Link>
                        </li>
                    )
                )}
            </ul>
        </main>
    );
};