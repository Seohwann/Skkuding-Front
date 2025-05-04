import { Link } from "react-router-dom";

export default function PokemonTitle(){
    return (
        <div className="under">
            <h1>
                <Link to="/" className="titleText">Pokemon List</Link>
            </h1>
        </div>
    );
}