import {
  HomeIcon,
  AccountIcon,
  CategoriesIcon,
  HeartOutlineIcon
} from './Icons'




import styles from '../styles/components/BottomNavBar.module.scss'
import { BottomNavItem } from './BottomNavItem'
import { useRouter } from 'next/router'
import { CartButtom } from './CartButtom'





export function BottomNavBar() {

  const router = useRouter()




  const navigationItems =
    [
      {
        icon: HomeIcon,
        label: 'Home',
        href: '/'

      },

      {
        icon: CategoriesIcon,
        label: 'Categories',
        href: '/categories'

      },
      {
        icon: HeartOutlineIcon,
        label: 'Liked',
        href: '/favorites'

      },
      {
        icon: AccountIcon,
        label: 'Account',
        href: '/account'

      },



    ]

  return (

    <nav className={styles.bottomTabBar}>


      <CartButtom />


      <ul className={styles.tabBarContent}>

        {navigationItems.map((navItem) => {
          return (
            <BottomNavItem
              key={navItem.label}
              href={navItem.href}
              label={navItem.label}
              icon={navItem.icon}

              isActive={navItem.href === router.pathname}

            />
          )
        })}




      </ul>

    </nav>
  )
}
