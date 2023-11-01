import { useEffect, useState } from "react";
import MealItem from "./mealItem";

export default function Meals() {

    const [loadedMeals, setLoadedMeals ] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');
            const meals = await response.json();
            setLoadedMeals(meals);
        }
        fetchMeals();
    }, []);

    return <ul id="meals">
        {loadedMeals.map(x => (
            <MealItem key={x.id} meal={x} />
        ))}
    </ul>
}