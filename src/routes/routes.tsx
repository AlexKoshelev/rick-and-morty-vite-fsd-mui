import { lazy } from "react";
import { PrivateRoute } from "../providers/private-route";
import ErrorBoundary from "../shared/hoc/error-boundary/error-boundary";
const Home = lazy(() =>
  import("../pages/home").then((module) => ({ default: module.Home }))
);
const Hero = lazy(() =>
  import("../pages/hero").then((module) => ({ default: module.Hero }))
);
const Heroes = lazy(() =>
  import("../pages/heroes").then((module) => ({
    default: module.Heroes,
  }))
);
const Location = lazy(() =>
  import("../pages/location").then((module) => ({ default: module.Location }))
);
const Locations = lazy(() =>
  import("../pages/locations").then((module) => ({ default: module.Locations }))
);
const Login = lazy(() =>
  import("../pages/login").then((module) => ({
    default: module.Login,
  }))
);
const Episode = lazy(() =>
  import("../pages/episode").then((module) => ({ default: module.Episode }))
);
const Episodes = lazy(() =>
  import("../pages/episodes").then((module) => ({ default: module.Episodes }))
);
const NotFound = lazy(() =>
  import("../pages/not-found/").then((module) => ({ default: module.NotFound }))
);
const routes = () => [
  { path: "", element: <Home /> },
  {
    path: "login",
    element: (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    ),
  },

  {
    path: "locations",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Locations />{" "}
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "locations/:id",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Location />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "heroes",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Heroes />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "heroes/:id",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Hero />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "episodes",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Episodes />{" "}
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "episodes/:id",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Episode />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  { path: "*", element: <NotFound /> },
];
export default routes;
