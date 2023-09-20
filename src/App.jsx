import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";






function App() {
  const [food, setFood] = useState(foodsJson)

  function deleteFood(id) {
    setFood((food) => food.filter((e) => e.id !== id))
  }


  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>


      {food.map((food) => (
        <FoodBox key={food.id} food={food} onDeleteFood={deleteFood} />
      ))}
    </div>

  );
}


export default App;
