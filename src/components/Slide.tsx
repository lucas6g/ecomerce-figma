
import ArrowRight from '../../public/icons/arrow-right.svg'

import Link from 'next/link'

import styles from '../styles/components/Slide.module.scss'

export function Slide() {
    return (
        <div className={styles.slide}>


            <h3 className={styles.slideTitle} >
                Flash Sale
            </h3>

            <Link href="/">
                <a >

                    <span>View More</span>
                    <ArrowRight height={16} fill={'#F2C94C'} width={16} alt='Link' />

                </a>

            </Link>

        </div>
    )
}