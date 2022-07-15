import { HomeView } from "../views/HomeView";
import { FilmsView } from "../views/FilmsView";
import { FilmDetails } from "../views/FilmDetails";
import { PeopleView } from "../views/PeopleView";
import { PersonDetails } from "../views/PersonDetails";
import { LocationsView } from "../views/LocationsView";
import { VehiclesView } from "../views/VehiclesView";
import { SpeciesView } from "../views/SpeciesView";

export const routes = [
    {
        path: "/",
        element: <HomeView />,
        title: "Home",
    },
    {
        path: "films",
        element: <FilmsView />,
        title: "Films",
    },
    {
        path: "films/:id",
        element: <FilmDetails />,
        title: "Film Details",
    },
    {
        path: "people",
        element: <PeopleView />,
        title: "People",
    },
    {
        path: "people/:id",
        element: <PersonDetails />,
        title: "Person Details",
    },
    {
        path: "locations",
        element: <LocationsView />,
        title: "Locations",
    },
    {
        path: "vehicles",
        element: <VehiclesView />,
        title: "Vehicles",
    },
    {
        path: "species",
        element: <SpeciesView />,
        title: "Species",
    },
]