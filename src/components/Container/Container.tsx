import { FC, ReactNode } from 'react'
import styles from './Container.module.css'
import cn from 'classnames'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const classNames = cn(styles.Container, className)
  
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}