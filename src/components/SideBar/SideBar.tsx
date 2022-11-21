import { FC } from 'react'
import { Container } from '@components/Container/Container'
import { Navigation } from '@components/Navigation/Navigation'
import styles from './SideBar.module.css'
import cn from 'classnames'

interface SideBarProps {
  isOpened: boolean
  close: () => void
}

export const SideBar: FC<SideBarProps> = ({ isOpened, close }) => {
  const classNames = cn(styles.Background, isOpened && styles.Opened)

  return (
    <div 
      className={classNames}
      onClick={close}
    >
      <aside className={styles.SideBar}>
        <Container className={styles.Container}>
          <Navigation />
        </Container>
      </aside>
    </div>
  )
}