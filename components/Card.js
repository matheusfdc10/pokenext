import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css"

const Card = ({pokemon}) => {

    return (
        <div className={styles.card}>
            <Image
                className={styles.image}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                width="213"
                height="213"
                alt={pokemon.name}
                priority
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}

export default Card;