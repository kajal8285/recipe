import { useState } from "react";
import { useParams } from "react-router-dom";
let id = " ";
function RecipeInfo() {
  const [item, setItem] = useState();
  const { recipeId } = useParams();
  if (recipeId !== " ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  if (item) {
    const strYoutube = item.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length - 1];
  }

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="content">
          <img src={item.strMealThumb} alt="" />
          <div className="inner-content">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category: {item.strCategory}</h3>
          </div>

          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <br />
              <p>
                {item.strIngredient1}:{item.strMeasure1}
              </p>
              <br />
              <p>
                {item.strIngredient2}:{item.strMeasure2}
              </p>
              <br />
              <p>
                {item.strIngredient3}:{item.strMeasure3}
              </p>
              <br />
              <p>
                {item.strIngredient4}:{item.strMeasure4}
              </p>
              <br />
              <p>
                {item.strIngredient5}:{item.strMeasure5}
              </p>
              <br />
              <p>
                {item.strIngredient6}:{item.strMeasure6}
              </p>
              <br />
              <p>
                {item.strIngredient7}:{item.strMeasure7}
              </p>
              <br />
              <p>
                {item.strIngredient8}:{item.strMeasure8}
              </p>
              <br />
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <br />
              <p>{item.strInstructions}</p>
            </div>
          </div>
          <div className="video">
            <iframe
              width="
                        100%"
              height="515"
              title="recipeVideo"
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeInfo;
