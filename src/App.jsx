import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFood from "./components/AddFoodForm";
import { useState } from "react";






function App() {
  const [food, setFood] = useState(foodsJson)

  function deleteFood(id) {
    setFood((food) => food.filter((e) => e.id !== id))
  }

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodsJson, newFood];
    setFood(updatedFoods);
  };

  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFood addNewFood={addNewFood} />

      {food.map((food) => (
        <FoodBox key={food.id} food={food} onDeleteFood={deleteFood} />

      ))}
    </div>

  );
}


export default App;
