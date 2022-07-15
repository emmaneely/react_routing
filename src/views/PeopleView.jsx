import React from "react";
import { Link } from "react-router-dom";
import { APIService } from "../services/API.service";
import { Loading } from "../components/Loading";

export const PeopleView = (props) => {
    const [people, setPeople] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchPeople = async () => {
        let data = await APIService.getList("people");
        if (data) setPeople(data);
        setIsLoading(false);
    };

    React.useEffect(() => {
        fetchPeople();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className="my-4">
            <h1>People ({people.length})</h1>
            <div className="row p-4">
                {people.map(
                    ({ id, name }) => (
                        <div key={id} className="card col-sm-4">
                            <div className="card-body">
                                <h3>{name}</h3>
                                <Link to={`${id}`}>Person Details</Link>
                            </div>
                        </div>
                    )
                )}
            </div>
        </main>
    );
};