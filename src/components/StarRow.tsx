
import Image from 'next/image'

import styles from '../styles/components/StarRow.module.scss'

interface StarRowProps {
    starsNumber: number
}

export function StarRow({ starsNumber = 1 }: StarRowProps) {

    const stars = Array.from(Array(starsNumber).keys())

    return (
        <div className={styles.starRow}>


            {
                stars.map((star) => {
                    return (
                        <Image
                            key={star}
                            src='/icons/star.svg'
                            height={9} width={9}
                            alt='Estrelas da Avaliação' />

                    )
                })
            }




        </div>
    )
}