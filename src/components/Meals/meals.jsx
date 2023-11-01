import { useEffect, useState } from "react";

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
            <li key={x.id}>{x.name}</li>
        ))}
    </ul>
}