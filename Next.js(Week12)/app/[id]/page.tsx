'use client'

import { useEffect, useState } from 'react';
import Title from '../.components/PokemonTitle'
import { useParams } from 'next/navigation';

interface Pokemon {
    id: string;
    name: string;
    height: string;
    weight: string;
    types: any;
    'base-Experience': string;
    abilities: any;
    hp: string;
    attack: string;
    defense: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
    img: string; 
  }

type Props = {
    params: {
        id: string
    }
}


  
export default function PokemonDetail({ params } : Props) {
    const [pokemon, setPokemonData] = useState<Pokemon>();
    useEffect(() => {
        const selectPokemon = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(res=>res.json())
                .then((res) => {
            const pokemonData: Pokemon = {
                id: params.id,
                img: res.sprites.front_default,
                name: res.name,
                height: res.height,
                weight: res.weight,
                types: res.types.map((typ: any) => typ.type.name),
                'base-Experience': res.base_experience,
                abilities: res.abilities,
                hp: res.stats[0].base_stat,
                attack: res.stats[1].base_stat,
                defense: res.stats[2].base_stat,
                'special-attack': res.stats[3].base_stat,
                'special-defense': res.stats[4].base_stat,
                speed: res.stats[5].base_stat,
                };
            setPokemonData(pokemonData);
            });
        };
            selectPokemon();
        }, [params.id]);
    if(pokemon){
        return (
            <div>
                <Title/>
                <div className='container2'>
                    <circle className='circle-border'>
                        <img src={pokemon.img} className='imgsize' />
                    </circle>
                    <div>
                        <h2 className='detailname'>{pokemon.name}</h2>
                    </div>
                    <table>
                        <tbody className='table'>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Height</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.height}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Weight</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.weight}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Types</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.types.join(', ')}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>HP</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.hp}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Attack</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.attack}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Defense</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.defense}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Special Attack</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon["special-attack"]}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Special Defense</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon["special-defense"]}</p>
                                </td>
                            </tr>
                            <tr className='table-tr'>
                                <td className='table-tr left'>
                                    <p>Speed</p>
                                </td>
                                <td className='table-tr right'>
                                    <p>{pokemon.speed}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
        );
    }
    else{
        return <div>해당 포켓몬이 존재하지 않습니다.</div>
    }
}