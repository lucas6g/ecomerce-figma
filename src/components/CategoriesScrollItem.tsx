
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/components/CategoriesScollItem.module.scss'


interface CategoriesScrollItemProps {

    href: string
    img: string
    imgAlt: string
    categoryName: string


}

export function CategoriesScrollItem({ categoryName, href, img, imgAlt }: CategoriesScrollItemProps) {
    return (

        <Link href={href}>
            <a className={styles.link}>

                <Image
                    className={styles.categoriesImage}
                    src={img}
                    alt={imgAlt}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'



                />

                <div className={styles.categorieItem}>
                    {categoryName}

                </div>


            </a>

        </Link>

    )
}