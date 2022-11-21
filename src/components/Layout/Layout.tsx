import { Header } from '@components/Header/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <Header />

      <main className={styles.Main}>
        <Outlet />
      </main>
    </div>
  )
}