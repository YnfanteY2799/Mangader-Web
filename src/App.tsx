import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./Pages/Pages";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {Pages.map(({ route, Component, childs = [] }) =>
            childs.length ? (
              <Route path={route} element={<Component />}>
                {childs.map(
                  ({ route: childRoute = "", component: ChildComponent }) => (
                    <Route path={childRoute} element={<ChildComponent />} />
                  )
                )}
              </Route>
            ) : (
              <Route path={route} element={<Component />} />
            )
          )}
        </Routes>
      </Router>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
