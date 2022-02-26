import Link from 'next/link'
import Cart from '../../public/icons/cart.svg'
import styles from '../styles/components/CartButtom.module.scss'

export function CartButtom() {
    return (
        <Link href='/'>

            <a className={styles.cartLink}>
                <Cart height={22} width={22} alt='Coracão' />
                <div>
                    <strong>£247.97</strong>
                    <span>3 items</span>

                </div>

            </a>

        </Link>

    )
}