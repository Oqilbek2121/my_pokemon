import React, { useState } from 'react';
import axios from 'axios';
import './ExampleComponent.css';

const ExampleComponent = () => {

    const [pokNames, setPokName] = useState("");
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        attack: "",
        defense: "",
        type: ""
    })

    const fetchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokNames}`)
        .then((response) => {
        setPokemon({
            name: pokNames,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            type: response.data.types[0].type.name
        });
        console.log(response)
        })
        .catch(() => {
        console.error("Error the pokemon || Pokemonda xatolik.");
        })
    }

    return (
        <>
            <header>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title">My Pokemon App</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border-0">
                        <div className="card-body btn1">
                            <button href="https://instagram.com/alone_martyn?igshid=OGQ5ZDc2ODk2ZA=="><ion-icon name="logo-instagram"></ion-icon></button>
                            <button href="https://github.com/Oqilbek2121"><ion-icon name="logo-github"></ion-icon></button>
                        </div>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <div className='container mt-5 text-center'>
                    <input type='text' className='search border-0' placeholder='Search' onChange={(event) => {setPokName(event.target.value);}} />
                    <button onClick={fetchPokemon}><ion-icon name="search-outline"></ion-icon></button>
                </div>
            </section>

            <footer>
                <div className='container'>
                    <div className="card mt-5 border-0">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1>{pokemon.name}</h1>
                                    <h3>SPECIES: <span>{pokemon.species}</span></h3> 
                                    <h3>ATTACK: <span>{pokemon.attack}</span></h3> 
                                    <h3>DEFENSE: <span>{pokemon.defense}</span></h3> 
                                    <h3>TYPE: <span>{pokemon.type}</span></h3> 
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={pokemon.img} className="img-fluid" alt='Pokemon images' />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ExampleComponent;