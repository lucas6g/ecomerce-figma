
import Image from 'next/image'
import styles from '../styles/components/CategorieListItem.module.scss'

interface CategorieListItemProps {
    name: string
    image: string

}

export function CategorieListItem({ image, name }: CategorieListItemProps) {
    return (


        <div className={styles.container}>

            <strong>{name}</strong>

            <div className={styles.imageContainer}>
                <Image
                    className={styles.categorieImage}
                    src={image}
                    alt={name}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'




                />


            </div>

        </div>

    )
}