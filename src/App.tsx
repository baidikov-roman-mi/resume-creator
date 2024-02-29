import { BrowserRouter as Router } from "react-router-dom";
import SetupRouter from "../routes/SetupRouter";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <section className="bg-orange-600">
              <h1 className="text-black">Loading...</h1>
            </section>
          }>
          <SetupRouter />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
