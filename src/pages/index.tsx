import { NextPage } from 'next'
import ArrowRight from '../../public/icons/arrow-right.svg'


import Link from 'next/link'


import { Card } from '../components/Card'

import Menu from '../../public/icons/menu.svg'
import Bell from '../../public/icons/bell.svg'

import styles from '../styles/pages/Home.module.scss'
import { Slide } from '../components/Slide'
import { CategoriesScroll } from '../components/CategoriesScroll'

import { categories } from '../utils/categories'
import { BottomNavBar } from '../components/BottomNavBar'

import { Logo } from '../components/Logo'
import { SearchBar } from '../components/SearchBar'



const Home: NextPage = () => {


  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button>
            <Menu height={18} width={18} fill={'white'} alt='Menu' />

          </button>

          <Logo />

          <button>
            <Bell height={18} width={18} fill={'white'} alt='Nutificações' />
          </button>

        </div>

        <SearchBar />
      </header>


      <main className={styles.pageContent}>

        <Slide />

        <section className={styles.categories}>
          <header className={styles.categoriesHeader}>
            <h2>Categories</h2>
            <Link href="/">
              <a >

                View All
                <ArrowRight height={12} width={12} fill={'#ACACAC'} alt='Link' />

              </a>

            </Link>
          </header>

          <CategoriesScroll
            categories={categories}

          />



        </section>

        <h2 style={{ marginBottom: 16 }}>Featured</h2>

        <section className={styles.featured}>



          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />



        </section>


      </main>

      <BottomNavBar />

    </div >

  )
}

export default Home
