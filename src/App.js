import './App.css';
import './index.css';
import routes from "./routes";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Header from './container/Header';

function App() {

  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);


  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <div className="App">
      <Header/>
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate to="/header" />} />
      </Routes>

    </div>
  );
}

export default App;
