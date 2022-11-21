import { FC } from 'react'
import { Container } from '@components/Container/Container'
import { Skills } from '@components/Skills/Skills'
import styles from './HomePage.module.css'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.HomePage}>
      <Container className={styles.Container}>
        <div className={styles.TextContent}>
          <h1 className={styles.MainTitle}>
            My name <br /> is Alex!
          </h1>

          <p className={styles.Subtitle}>
            I am a frontend developer from Ukraine
          </p>

          <Skills />
        </div>
      </Container>
    </div>
  )
}