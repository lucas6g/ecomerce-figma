import { NextPage } from 'next'


import { Card } from '../components/Card'


import styles from '../styles/pages/Favorites.module.scss'



import { BottomNavBar } from '../components/BottomNavBar'

import { Logo } from '../components/Logo'
import { SearchBar } from '../components/SearchBar'



const Favorites: NextPage = () => {


    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <div className={styles.headerContent}>



                    <div >
                        <Logo
                            size='small'
                        />
                        <strong>Favorites</strong>
                    </div>





                </div>

                <SearchBar />
            </header>



            <main className={styles.pageContent}>





                <section className={styles.featured}>



                    <Card
                        isFavorite
                    />
                    <Card
                        isFavorite
                    />
                    <Card
                        isFavorite
                    />
                    <Card
                        isFavorite
                    />
                    <Card
                        isFavorite
                    />
                    <Card
                        isFavorite
                    />





                </section>


            </main>

            <BottomNavBar />

        </div >

    )
}

export default Favorites
