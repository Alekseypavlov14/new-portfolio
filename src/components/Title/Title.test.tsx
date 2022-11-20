import { describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Title } from './Title'
import '@testing-library/jest-dom'

describe('Title', () => {
  it('shows bold text', () => {
    render(
      <Title bold>
        Content
      </Title>
    )

    expect(screen.getByText(/Content/)).toBeInTheDocument()
  })
})