import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookAlert from '../components/BookAlert'

describe("testo che l'alert di benvenuto venga montato", () => {
  it('alert montato', () => {
    render(<BookAlert />)

    const alert = screen.getByText(/bentornato!/i)

    expect(alert).toBeInTheDocument()
  })
})
