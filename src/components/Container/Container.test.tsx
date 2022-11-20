import { describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Container } from './Container'
import '@testing-library/jest-dom'

describe('Container', () => {
  it('shows container with custom class', () => {
    const className = 'class-name'

    render(
      <Container className={className}>
        Content
      </Container>
    )

    expect(screen.getByText(/Content/)).toHaveClass(className)
  })
})