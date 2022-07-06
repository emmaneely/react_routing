import React from "react";
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
            <h1>People</h1>
            <div className="row p-4">
                {people.map(
                    ({ id, name, gender, age }) => (
                        <div key={id} className="card col-sm-4">
                            <div className="card-body">
                                <h3>{name}</h3>
                                <ul>
                                    <li>Gender: {gender}</li>
                                    <li>Age: {age}</li>
                                </ul>
                            </div>
                        </div>
                    )
                )}
            </div>
        </main>
    );
};