import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { APIService } from "../services/API.service";

export const FilmDetails = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState({});

    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();

    console.log(location);

    const fetchFilm = async () => {
        let data = await APIService.getItem("films", id);
        if (data) setFilm(data);
        setIsLoading(false);
    };

    const getScoreColor = (score) => {
        switch (true) {
            case score >= 85:
                return "success";
            case score >= 70:
                return "warning";
            default:
                return "danger";
        }
    };
    
    useEffect(() => {
        fetchFilm();
    }, []);
    
    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <button className="btn bg-secondary" onClick={() => navigate(-1)}>Back</button>
                    <h1>{film.title}</h1>
                    <p>{film.original_title}</p>
                    <p>{film.description}</p>
                    <ul>
                        <li>Year Released: {film.release_date}</li>
                        <li>Rotten Tomatoes Score: <span className={`badge bg-${getScoreColor(film.rt_score)}`}>{film.rt_score}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};