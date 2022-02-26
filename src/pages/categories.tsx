import { NextPage } from 'next'
import { BottomNavBar } from '../components/BottomNavBar'
import ArrowLeftIcon from '../../public/icons/arrow-left.svg'

import styles from '../styles/pages/Categories.module.scss'
import { Logo } from '../components/Logo'
import { SearchBar } from '../components/SearchBar'
import { CategorieListItem } from '../components/CategorieListItem'
import { categories } from '../utils/categories'




const Categories: NextPage = () => {
    return (

        <div className={styles.container}>

            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <button>
                        <ArrowLeftIcon height={18} width={18} fill={'white'} alt='Voltar' />

                    </button>


                    <div >
                        <Logo
                            size='small'
                        />
                        <strong>Categories</strong>
                    </div>





                </div>

                <SearchBar />
            </header>


            <main className={styles.pageContent}>

                <section className={styles.categories}>

                    {categories.map((categorie) => {
                        return (
                            <CategorieListItem
                                key={categorie.name}
                                image={categorie.image}
                                name={categorie.name}
                            />
                        )
                    })}
                </section>


            </main>

            <BottomNavBar />

        </div >



    )
}

export default Categories
