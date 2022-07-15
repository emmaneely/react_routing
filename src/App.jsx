import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { routes } from "./data/routes";

const App = () => {
  return (
  <BrowserRouter>
    <Layout>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Routes>
    </Layout>
  </BrowserRouter>
  );
};

export default App;
