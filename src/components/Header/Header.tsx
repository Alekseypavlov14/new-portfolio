import { FC, useState } from 'react'
import { Container } from '@components/Container/Container'
import { Navigation } from '@components/Navigation/Navigation'
import { BurgerButton } from 'standard-ui'
import { SideBar } from '@components/SideBar/SideBar'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [isOpened, setOpened] = useState(false)

  const toggleSideBar = () => setOpened(isOpened => !isOpened)

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <div className={styles.Navigation}>
          <Navigation />
        </div>

        <BurgerButton 
          className={styles.BurgerButton}
          isOpened={isOpened} 
          onClick={toggleSideBar}
        />

        <div className={styles.SideBar}>
          <SideBar 
            isOpened={isOpened} 
            close={toggleSideBar} 
          />
        </div>
      </Container>
    </header>
  )
}