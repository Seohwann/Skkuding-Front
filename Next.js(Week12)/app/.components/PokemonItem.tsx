import { useRouter } from 'next/navigation'

interface Pokemon {
    id: string;
    img: string; 
    name: string;
    height: string;
    weight: string;
    types: string[];
}

export default function PokemonItem(props: Pokemon) {
    const router = useRouter()
    const click = () => {
        router.push(`../${props.id}`)
    }
    return (
        <div className="item" onClick={click}>
            <img src={props.img} className="item-img" />
            <div className="item-info">
                <h2 className="item-h2">{props.name}</h2>
                <p className="item-p">height: {props.height}dm</p>
                <p className="item-p">weight: {props.weight}hg</p>
                <p className="item-p">types: {props.types.join(", ")}</p>
            </div>
        </div>
    );
  }