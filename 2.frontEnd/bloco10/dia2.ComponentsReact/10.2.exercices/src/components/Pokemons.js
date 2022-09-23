import React from "react";  

class Pokemons extends React.Component{
    render(){
        // console.log(this.props)
        const data = this.props.obj; // this.props monta um objeto q recebe obj como parametro

        return(
            data.map((pokemon)=> {
                return (
                    <section className ='pokemon'>
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.type}</p>
                        <p>
                            {pokemon.averageWeight.value}
                            {pokemon.averageWeight.measurementUnit}
                        </p>
                        <img src={pokemon.image} alt={pokemon.name}></img>
                    </section>
                )
            })
        );
    }
}


export default Pokemons;