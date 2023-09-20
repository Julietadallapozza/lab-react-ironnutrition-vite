import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";


function App() {
  const [food, setFood] = useState(foodsJson)
  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>
     
      {foodsJson.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>

  );
}

export default App;
