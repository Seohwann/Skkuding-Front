import Link from 'next/link'

export default function PokemonTitle(){
    return (
        <div className="under">
            <h1>
                <Link href="/" className="titleText">Pokemon List</Link>
            </h1>
        </div>
    );
}