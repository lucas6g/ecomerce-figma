



import styles from '../styles/components/CartegoriesScroll.module.scss'

import { CategoriesScrollItem } from '../components/CategoriesScrollItem'



interface CategoriesScrollProps {
    categories: {
        name: string
        image: string
        slug: string
    }[]
}


export function CategoriesScroll({ categories }: CategoriesScrollProps) {
    return (
        <div className={styles.categoriesScroll}>


            {
                categories.map((category) => {
                    return (
                        <CategoriesScrollItem
                            key={category.name}
                            categoryName={category.name}
                            href={`/categories/${category.slug}`}
                            imgAlt={category.name}
                            img={category.image}

                        />

                    )
                })
            }



        </div>
    )
}   