import styles from "./intro.module.scss"
export default function Intro(){
    return (
        <div  className={styles.container}>
            <div className={styles.imagen}>
                <img src="https://randomfox.ca/images/12.jpg" alt="me" className={styles.profilePic}/>
            </div>
            <div  className={styles.descripcion}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem veritatis id possimus minus animi explicabo optio at cumque deleniti, voluptatum pariatur illo amet quod voluptatibus ea corrupti consectetur odio nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut autem tenetur voluptas libero odit blanditiis quis, labore quaerat. Quaerat, ratione. Aliquid in, alias adipisci nisi suscipit perspiciatis deleniti illo.
                </p>
            </div>

        </div>
    );

}