import Item from './PokemonItem';
import { usestore } from '../Pokemonstore';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
    id: string;
    img: string; 
    name: string;
    height: string;
    weight: string;
    types: any;
}


export default function PokemonList() {
    const setid = usestore((state:any) => state.setselectedpokemonid)

    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

     useEffect(() => {
        const fetchPokemon = async () => {
            const ids:number[] = Array.from({ length: 10 }, (_, i) => i + 1); 

            const promises:Promise<Pokemon>[] = ids.map((i) =>
                axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then((res) => ({
                id: i.toString(),
                img: res.data.sprites.front_default,
                name: res.data.name,
                height: res.data.height,
                weight: res.data.weight,
                types: res.data.types.map((typ: any) => typ.type.name),
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
                        image={pokemon.img}
                        name={pokemon.name}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        types={pokemon.types}
                        onClick={() => setid(pokemon.id)}
                    />
                ))}
            </div>
        </div>
    );
}