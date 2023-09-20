function FoodBox({ food }) {
    return (
        <div>
            <p>Name: {food.name}</p>
            <img src={food.image} alt={food.name} style={{ width: '200px', height: '200px' }} />
            <p>Calores: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: SERVINGS * CALORIES </b> kcal
            </p>
       
            <button onClick={() => deleteContact(i)} className="btn-dlt"> Delete</button>
        </div>
    );

}


export default FoodBox;