import Image from "next/image";
import styles from "../styles/About.module.css"

const About = () => {
    return (
        <div className={styles.container}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet. Et laudantium eaque ex corporis accusamus quo labore doloremque vel quia impedit. Qui laboriosam inventore et nisi quam et corporis error eum reiciendis omnis aut enim incidunt sed accusamus dolorum ea quisquam velit. Non debitis mollitia ut nobis voluptatem sit velit deleniti est inventore aliquam aut delectus modi.</p>
            <Image 
                src="/images/charizard.png"
                width={300}
                height={300}
                alt="Charizard"
            />
        </div>
    )
}

export default About;