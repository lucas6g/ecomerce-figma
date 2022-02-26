import Search from '../../public/icons/search.svg'
import styles from '../styles/components/SearchBar.module.scss'

export function SearchBar() {
    return (
        <label className={styles.searchBar} htmlFor="search">
            <Search height={18} width={18} alt='Buscar' />
            <input placeholder='What are you looking for?' id='search' type="text" />
        </label>
    )
}