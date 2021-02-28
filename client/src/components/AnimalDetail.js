import React from 'react';


const animalDetail = ({ selectedAnimal, onFavouriteClick }) => {

    // Put this check in as the initial object state is set to null - remove will cause a null error
    if (!selectedAnimal) {
        return (null)
    }

  

    return (
        <>
            <div className="animal-detail">
                <h2>{selectedAnimal.animal_name}</h2>
                <p>Scientific name: {selectedAnimal.species}</p>
                <p>There are {selectedAnimal.population} {selectedAnimal.animal_name} left in the world.</p>
                <div className="myDIV">
                    <h3><b>{selectedAnimal.status}</b></h3>
                    
                </div>   
                <div className="hide">
                    <h4>IUCN Red List Categories</h4>
                    <ul>
                        <li><b>Extinct</b> - the species no longer exists</li>
                        <li><b>Extinct in the Wild</b> - survives only in captivity</li>
                        <li><b>Critically Endangered</b> - in an extremely critical state</li>
                        <li><b>Endangered</b> - very high risk of extinction in the wild</li>
                        <li><b>Vulnerable</b> - high risk of human-caused extinction without further intervention</li>
                        <li><b>Near Threatened</b> - close to being at high risk of extinction in the near future</li>
                        <li><b>Least Concern</b> - unlikely to become extinct in the near future</li>
                    </ul>
                </div>


                <img src={selectedAnimal.pictures} width="300" height="300" alt={selectedAnimal.animal_name}/>
                
                <p>Locations: {selectedAnimal.locations}</p>
                <p>Habitat: {selectedAnimal.habitat}</p>
                <p>{selectedAnimal.description}</p>
                <li onClick={() => { onFavouriteClick(selectedAnimal) }}  >Add to Favourite</li>
            </div>

            
           
        </>
    )
};

export default animalDetail;