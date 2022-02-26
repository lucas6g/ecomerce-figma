
import { useState } from 'react'
import HeartOutline from '../../public/icons/heart-outline.svg'
import HeartFiled from '../../public/icons/heart-yellow.svg'

import styles from '../styles/components/LoveButtom.module.scss'


interface LoveButtonProps {
    isFavorite: boolean
}

export function LoveButtom({ isFavorite }: LoveButtonProps) {
    const [isActive, setIsActive] = useState(false)


    function handleAddToFavorites() {
        if (isActive) {
            setIsActive(false)
        } else {

            setIsActive(true)
        }
    }
    return (

        <button onClick={handleAddToFavorites} className={styles.loveButton}>

            {
                isActive || isFavorite ? <HeartFiled height={16} width={16} alt='Coracão Amarelo' /> : <HeartOutline height={16} width={16} alt='Coracão' />

            }

        </button>
    )

}