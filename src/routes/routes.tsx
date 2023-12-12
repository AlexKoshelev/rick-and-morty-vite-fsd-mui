import { lazy } from "react";
import { PrivateRoute } from "../providers/private-route";
import ErrorBoundary from "../shared/hoc/error-boundary/error-boundary";
const Home = lazy(() => import("../pages/home/home"));
const Hero = lazy(() => import("../pages/hero/hero"));
const Heroes = lazy(() => import("../pages/heroes/heroes"));
const Location = lazy(() => import("../pages/location/location"));
const Locations = lazy(() => import("../pages/locations/locations"));
const Login = lazy(() => import("../pages/login/login"));
const Episode = lazy(() => import("../pages/episode/episode"));
const Episodes = lazy(() => import("../pages/episodes/episodes"));
const NotFound = lazy(() => import("../pages/not-found/not-found"));
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
