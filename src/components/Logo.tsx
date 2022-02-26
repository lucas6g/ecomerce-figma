import Link from 'next/link'
import styles from '../styles/components/Logo.module.scss'


interface LogoProps {
    size?: 'small' | 'medium' | 'big'
}

export function Logo({ size = 'medium' }: LogoProps) {
    return (

        <Link href="/">
            <a  >

                <h1
                    className={`${styles["logo"]} ${styles[size]}`} >Lux<span>Outlet</span></h1>
            </a>

        </Link>
    )
}