import { Suspense } from "react";
import NavBar from "../widgets/navbar/navbar.tsx";
import routes from "../routes/routes.tsx";
import { RouteObject, useRoutes } from "react-router-dom";
import Loading from "../shared/loading/loading.tsx";

const App: React.FC = () => {
  const elements = useRoutes(routes() as RouteObject[]);

  return (
    <main>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <div className="_container">{elements}</div>
      </Suspense>
    </main>
  );
};

export default App;
