import { useState } from 'react'
import { Row, Form, Button, Col, Container } from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

const BookList = function ({ singleBook }) {
  const [search, setSearch] = useState('')
  const [bookId, setBookId] = useState('')
  const [bookSelected, setBookSelected] = useState('')

  const getBookId = (value) => {
    setBookId(value)
  }

  const selectedBook = (value) => {
    setBookSelected(value)
  }

  const filterBook = singleBook.filter((book) => {
    return book.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Col>
      <Row>
        <Col xs={12} md={8}>
          <Form className="d-flex w-100 justify-content-between px-4 align-items-center mt-5 mb-4">
            <Form.Group
              className="flex-grow-1 d-flex align-items-center me-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="Cerca..."
                value={search}
                onChange={(e) => {
                  return setSearch(e.target.value)
                }}
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              CERCA
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={4}>
          <h1 className="mt-5 mb-4">Sezione commenti</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Row className="g-4">
            {filterBook.map((book) => {
              return (
                <SingleBook
                  key={book.asin}
                  asin={book.asin}
                  imageBook={book.img}
                  titleBook={book.title}
                  priceBook={book.price}
                  selectedBook={selectedBook}
                  selected={bookSelected === book.asin}
                  getBookId={getBookId}
                />
              )
            })}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <CommentArea bookId={bookId} />
        </Col>
      </Row>
    </Col>
  )
}

export default BookList
