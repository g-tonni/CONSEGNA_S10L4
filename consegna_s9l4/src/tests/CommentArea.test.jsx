import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CommentArea from '../components/CommentArea'

describe('verifico funzionamento CommentArea', () => {
  it('verifico che al montaggio ci sia tutto tranne CommentList', () => {
    render(<CommentArea />)

    const alert = screen.getByText(
      /seleziona un libro per vedere le sue recensioni/i
    )
    const label1 = screen.getByText(/inserisci un commento/i)
    const label2 = screen.getByText(/lascia un punteggio/i)
    const button = screen.getByText(/invia commento/i)

    expect(alert).toBeInTheDocument()
    expect(label1).toBeInTheDocument()
    expect(label2).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    const commentList = screen.queryAllByTestId('comment-list')
    expect(commentList).toHaveLength(0)
  })
})
