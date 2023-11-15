import { Route, Routes } from "react-router-dom";
import "./App.css";

import Meal from "./components/Meal";
import RecipeInfo from "./components/RecipeInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<RecipeInfo />} />
      </Routes>
    </>
  );
}

export default App;
