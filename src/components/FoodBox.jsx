// import AddFood from "./AddFoodForm";


function FoodBox({ food, onDeleteFood }) {
    return (
        <div>
   
            <p>Name: {food.name}</p>
            <img src={food.image} alt={food.name} style={{ width: '400px', height: '300px' }} />
            <p>Calores: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: SERVINGS * CALORIES </b> kcal
            </p>

            <button onClick={() => onDeleteFood(food.id)} > Delete</button>
            {/* <AddFood /> */}
        </div>
    );

}


export default FoodBox;