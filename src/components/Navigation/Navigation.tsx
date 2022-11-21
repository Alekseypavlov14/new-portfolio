import { FC } from 'react'
import { NavLink } from '@components/NavLink/NavLink'
import styles from './Navigation.module.css'

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About me</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/contact'>Contact me</NavLink>
    </nav>
  )
}