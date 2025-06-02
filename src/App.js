import {BrowserRouter as Router,Routes,Route} from "react-router";
import {Fragment} from "react";
import RecipeList from "./components/RecipeList";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
