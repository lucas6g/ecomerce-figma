

import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/BottomNavItem.module.scss'



interface BottomNavItemProps {

    icon: React.FC<React.SVGProps<SVGSVGElement>>
    label: string
    href: string
    isActive: boolean

}


export function BottomNavItem({ href, icon: Icon, label, isActive }: BottomNavItemProps) {

    const gradientFill = 'url(#paint0_linear_71_138)'


    return (
        <li className={styles.tabBarItem}>
            <Link href={href}>
                <a  >


                    <Icon fill={isActive ? gradientFill : '#A4A4A4'} />
                    <span className={isActive ? styles.labelActive : styles.label} >{label}</span>

                </a>
            </Link>
        </li>

    )
}