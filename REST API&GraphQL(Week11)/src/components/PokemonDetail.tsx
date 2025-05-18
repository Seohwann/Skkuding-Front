import { usestore } from '../Pokemonstore';
import { useEffect, useState } from 'react';
import axios from 'axios';

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


  
export default function PokemonDetail(props:any) {
    const [pokemon, setPokemonData] = useState<Pokemon>();
     useEffect(() => {
        const selectPokemon = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then((res) => {
            const pokemonData: Pokemon = {
                id: props.id,
                img: res.data.sprites.front_default,
                name: res.data.name,
                height: res.data.height,
                weight: res.data.weight,
                types: res.data.types.map((typ: any) => typ.type.name),
                'base-Experience': res.data.base_experience,
                abilities: res.data.abilities,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                'special-attack': res.data.stats[3].base_stat,
                'special-defense': res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat,
                };
            setPokemonData(pokemonData);
            });
        };
            selectPokemon();
        }, [props.id]);
    if(pokemon){
        return (
            <div className='container2'>
                <circle className='circle-border'>
                    <img src={pokemon.img} className='imgsize' />
                </circle>
                <div>
                    <h2 className='detailname'>{pokemon.name}</h2>
                </div>
                <table className='table'>
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
                </table>    
            </div>
        );
    }
    else{
        return <div>해당 포켓몬이 존재하지 않습니다.</div>
    }
}