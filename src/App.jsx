import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomeView } from "./views/HomeView";
import { FilmsView } from "./views/FilmsView";
import { PeopleView } from "./views/PeopleView";
import { LocationsView } from "./views/LocationsView";
import { VehiclesView } from "./views/VehiclesView";
import { SpeciesView } from "./views/SpeciesView";

const App = () => {
  return (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="films" element={<FilmsView />} />
      <Route path="people" element={<PeopleView />} />
      <Route path="locations" element={<LocationsView />} />
      <Route path="vehicles" element={<VehiclesView />} />
      <Route path="species" element={<SpeciesView />} />
    </Routes>
  </Layout>
  </BrowserRouter>
  );
};

export default App;
