import Image from 'next/image'
import Link from 'next/link'




import styles from '../styles/components/Card.module.scss'
import { LoveButtom } from './LoveButtom'
import { StarRow } from './StarRow'

interface CardProps {
    isFavorite?: boolean
}

export function Card({ isFavorite }: CardProps) {





    return (


        <div className={styles.cardContainer}>

            <div className={styles.imageContainer}>
                <Link href={'/'} >
                    <a >


                        <Image
                            className={styles.productImage}
                            src="/images/lala.png"

                            width={915}
                            height={915}

                            quality={100}


                            alt='Imagem do Produto' />

                        <div className={styles.dicountPercentage} >
                            <span>-60%</span>
                        </div>
                    </a>

                </Link>

                <LoveButtom
                    isFavorite={isFavorite!!}
                />


            </div>

            <Link href={'/'} >
                <a >


                    <div className={styles.productInfo} >

                        <StarRow
                            starsNumber={3}
                        />

                        <p >
                            DKNY t-shirt - colour block front logo
                        </p>

                        <div className={styles.priceBeforeAfter}>
                            <strong>£19</strong>
                            <span>£69</span>

                        </div>
                    </div>
                </a>

            </Link>

        </div>



    )
}