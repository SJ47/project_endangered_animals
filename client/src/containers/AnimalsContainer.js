import React, { useState, useEffect } from 'react';

import AnimalsList from '../components/AnimalsList';
import Favourites from '../components/Favourites';
import Map from "../components/Map";
import Quiz from "../components/Quiz";
import AnimalsService from "../services/AnimalsService";
import AnimalDetail from "../components/AnimalDetail";
import FunFactCard from '../components/FunFactCard';


const AnimalsContainer = () => {

    // Setting up state
    const [animals, setAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [favouriteAnimals, setFavouriteAnimals] = useState([]);


    // Read in animals data from own api
    useEffect(() => {
        AnimalsService.getAnimals()
            .then(data => setAnimals(data))
    }, [])


    // Update state with a single animal object that was selected
    const handleSelectedAnimal = (animal) => {
        // Update the state with the selected animal
        setSelectedAnimal(animal)
    }


    // Handle the add fav animal to array of fav animals after favourite clicked and if not already a favourite
    const handleFavouriteClick = (favAnimal) => {
        // Using some() method to check the animal id DOES NOT ! already exist
        if (!favouriteAnimals.some(favouriteAnimal => favouriteAnimal._id === favAnimal._id)) {

            // If this is a new favourite animal then
            // - Add a favourite tag to the animal object
            // - Copy the current state of fav animals and add the new fav animal
            favAnimal.favourite = true;
            const newFavAnimalList = [...favouriteAnimals, favAnimal]
            setFavouriteAnimals(newFavAnimalList);
        } else {
            // If not a new fav animal
            // - it must already be a fav animal
            // - therefore user is clicking to delete from fav animals
            handleDeleteFavouriteAnimal(favAnimal);
        }
    }

    // Handle delete favourite show
    const handleDeleteFavouriteAnimal = (favAnimal) => {
        const newFavAnimalList = favouriteAnimals.filter((animal) => {
            return animal !== favAnimal
        })

        // Update the favouriteShows state with the new array (with the item clicked removed)
        favAnimal.favourite = false
        setFavouriteAnimals(newFavAnimalList)
    }


    // Handle what to do when the fav animal in the favourite list is clicked
    // Update the animalDetail card with the favourite clicked
    // in the same manner as clicking on an animal from the all animals list
    const handleFavImageClicked = (favAnimalClicked) => {
        handleSelectedAnimal(favAnimalClicked);
    }

    return (
        <div className="container">
            <header>
                <h1>Endangered Animals</h1>
            </header>

            <div className="favourites-container">
                <Favourites favouriteAnimals={favouriteAnimals} onFavImageClicked={handleFavImageClicked} />
            </div>

            <div className="map-container">
                <Map />
            </div>

            <div className="facts-container">
                <h1>Fun facts here</h1>
                <FunFactCard selectedAnimal={selectedAnimal} />
            </div>

            <div className="animals-list-container">
                <h2>Animals list will go here...</h2>
                <AnimalsList animals={animals} onSelectedAnimal={handleSelectedAnimal} />
                <h1>list here</h1>
            </div>

            <div className="animal-detail-container">
                <h2>Animal detail will go here...</h2>
                <AnimalDetail selectedAnimal={selectedAnimal} onFavouriteClick={handleFavouriteClick} />
            </div>

            <div className="quiz-container">
                <h2>Quiz will go here...</h2>
                <Quiz />
            </div>

        </div>
    )
}

export default AnimalsContainer;