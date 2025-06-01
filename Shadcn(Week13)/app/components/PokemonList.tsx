'use client'

import Item from './PokemonItem';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";

interface Pokemon {
    id: string;
    name: string;
    height: string;
    weight: string;
    types: string[];
    'base-Experience': string;
    abilities: string[];
    hp: string;
    attack: string;
    defense: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
    img: string; 
}

interface Info{
    name: string;
    url: string;
}

interface PokemonType {
    slot: number;
    type: Info;
}

interface PokemonAbility {
    ability: Info;
    is_hidden: boolean;
    slot: number;
}

export default function PokemonList() {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [selectedpokemon, setselectedpokemon] = useState<Pokemon|null>(null);
    const [openflag, setflag] = useState(false);
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
                types: res.types.map((typ: PokemonType) => typ.type.name),
                'base-Experience': res.base_experience,
                abilities: res.abilities.map((abl: PokemonAbility) => abl.ability.name),
                hp: res.stats[0].base_stat,
                attack: res.stats[1].base_stat,
                defense: res.stats[2].base_stat,
                'special-attack': res.stats[3].base_stat,
                'special-defense': res.stats[4].base_stat,
                speed: res.stats[5].base_stat,
                }))
            );
            const results:Pokemon[] = await Promise.all(promises);
            
            setPokemonData(results);
            };

            fetchPokemon();
        }, []);
    
    const Itemclick = (pokemon: Pokemon) => {
        setselectedpokemon(pokemon);
        setflag(true);
    };


    return (
        <div>            
            <div className="container">
                {pokemonData.map((pokemon:Pokemon) => (
                    <Item 
                        key={pokemon.id}
                        id={pokemon.id}
                        img={pokemon.img}
                        name={pokemon.name}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        types={pokemon.types}
                        onClick={() => Itemclick(pokemon)}
                    />
                ))}
            </div>
            <Dialog open={openflag} onOpenChange={setflag}>
                <DialogContent className="bg-black/50 backdrop-blur-sm">
                {selectedpokemon && (
                    <>
                    <DialogHeader>
                        <DialogDescription>
                        <div className='container2'>
                            <circle className='circle-border'>
                                <img src={selectedpokemon.img} className='imgsize'/>
                            </circle>
                            <div>
                                <h2 className='detailname'>{selectedpokemon.name}</h2>
                            </div>
                            <table>
                                <tbody className='table'>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Height</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.height}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Weight</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.weight}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Types</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.types.join(', ')}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Abilities</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.abilities.join(', ')}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>HP</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.hp}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Attack</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.attack}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Defense</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.defense}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Special Attack</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon["special-attack"]}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Special Defense</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon["special-defense"]}</p>
                                        </td>
                                    </tr>
                                    <tr className='table-tr'>
                                        <td className='table-tr left'>
                                            <p>Speed</p>
                                        </td>
                                        <td className='table-tr right'>
                                            <p>{selectedpokemon.speed}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                        </DialogDescription>
                    </DialogHeader>
                    </>
                )}
                </DialogContent>
            </Dialog>
        </div>
    );
}