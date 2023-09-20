import { useState } from "react";

function AddFood(props) {
    const [name, setName] = useState("");
    const handleNameInput = e => setName(e.target.value);

    const [image, setImage] = useState("");
    const handleImageInput = e => setImage(e.target.value);

    const [calories, setCalories] = useState(0);
    const handleCaloriesInput = e => setCalories(e.target.value);

    const [servings, setServings] = useState(0);
    const handleServignsInput = e => setServings(e.target.value);


    return (
        <div className="AddFood">
            <h4>Add a Food</h4>

            <form>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameInput}
                />


                <label>Image: </label>
                <input
                    type="text"
                    placeholder="Enter image URL"
                    value={image}
                    onChange={handleImageInput}
                />

                <label>Caloriess: </label>
                <input
                    type="number"
                    name="calories"
                    value={calories}
                    onChange={handleCaloriesInput}
                />

                <label>Servings: </label>
                <input
                    type="number"
                    name="servings"
                    checked={servings}
                    onChange={handleServignsInput}
                />

                <button type="submit">Add Food</button>
            </form>
        </div>
    );
}

export default AddFood;