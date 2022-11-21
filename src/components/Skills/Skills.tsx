import { FC } from 'react'
import styles from './Skills.module.css'

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => {
  const skills = [
    'HTML',
    'CSS',
    'SASS/SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'RTK Query'
  ]

  return (
    <div className={styles.Skills}>
      {skills.map(skill => (
        <div 
          className={styles.Skill}
          key={skill} 
        >
          {skill}  
        </div>
      ))}
    </div>
  )
}