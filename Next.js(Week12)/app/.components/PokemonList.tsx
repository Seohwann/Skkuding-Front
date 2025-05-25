'use client'

import Item from './PokemonItem';
import { useEffect, useState } from 'react';

interface Pokemon {
    id: string;
    img: string; 
    name: string;
    height: string;
    weight: string;
    types: string[];
}


export default function PokemonList() {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

     useEffect(() => {
        const fetchPokemon = async () => {
            const ids:number[] = Array.from({ length: 10 }, (_, i) => i + 1); 

            const promises:Promise<Pokemon>[] = ids.map((i) =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res=>res.json())
                .then((res) => ({
                id: i.toString(),
                img: res.sprites.front_default,
                name: res.name,
                height: res.height,
                weight: res.weight,
                types: res.types.map((typ: any) => typ.type.name),
                }))
            );
            const results:Pokemon[] = await Promise.all(promises);
            
            setPokemonData(results);
            };

            fetchPokemon();
        }, []);

    return (
        <div>            
            <div className="container">
                {pokemonData.map((pokemon:Pokemon) => (
                    <Item 
                        id={pokemon.id}
                        img={pokemon.img}
                        name={pokemon.name}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        types={pokemon.types}
                    />
                ))}
            </div>
        </div>
    );
}