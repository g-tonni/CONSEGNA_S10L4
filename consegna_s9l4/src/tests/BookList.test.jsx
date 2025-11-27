import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import BookList from '../components/BookList'
import bookArr from '../books/horror.json'

describe('verifico il funzionamento delle card', () => {
  it('verifico il numero di card', async () => {
    render(<BookList singleBook={bookArr} />)

    const cards = await screen.findAllByTestId('single-book')

    expect(cards).toHaveLength(bookArr.length)
  })
  it('verifico il numero di card con il filtro della ricerca', async () => {
    render(<BookList singleBook={bookArr} />)

    const cards = await screen.findAllByTestId('single-book')
    expect(cards).toHaveLength(bookArr.length)

    const input = screen.getByPlaceholderText(/cerca/i)
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'end' } })
    const cardsEnd = await screen.findAllByTestId('single-book')
    expect(cardsEnd).toHaveLength(6)

    fireEvent.change(input, { target: { value: 'gh' } })
    const cardsGh = await screen.findAllByTestId('single-book')
    expect(cardsGh).toHaveLength(10)
  })
  it('verifico il selezionamento delle card', async () => {
    render(<BookList singleBook={bookArr} />)

    const cards = await screen.findAllByTestId('single-book')
    expect(cards).toHaveLength(bookArr.length)

    const singleCard1 = cards[0]
    const singleCard2 = cards[1]

    fireEvent.click(singleCard1)
    expect(singleCard1).toHaveClass('border-3')
    expect(singleCard2).not.toHaveClass('border-3')

    fireEvent.click(singleCard2)
    expect(singleCard2).toHaveClass('border-3')
    expect(singleCard1).not.toHaveClass('border-3')
  })
  it('verifico che quando clicco un libro la CommentList si riempia', async () => {
    render(<BookList singleBook={bookArr} />)

    const commentList = screen.queryAllByTestId('comment-list')
    expect(commentList).toHaveLength(0)

    const cards = await screen.findAllByTestId('single-book')
    expect(cards).toHaveLength(bookArr.length)

    const singleCard1 = cards[0]
    fireEvent.click(singleCard1)
    const commentListRiempita = await screen.findAllByTestId('comment-list')
    expect(commentListRiempita.length).toBeGreaterThan(0)

    const singleCard2 = cards[1]
    fireEvent.click(singleCard2)
    const commentListRiempita2 = await screen.findAllByTestId('comment-list')
    expect(commentListRiempita2.length).toBeGreaterThan(0)
  })
})
