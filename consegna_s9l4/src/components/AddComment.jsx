import { useState, useEffect } from 'react'
import { Col, Form, Button } from 'react-bootstrap'

const AddComment = function ({ bookId }) {
  const [commentPost, setCommentPost] = useState({
    comment: '',
    rate: '1',
    elementId: bookId,
  })

  const putComments = () => {
    const commentsURL = 'https://striveschool-api.herokuapp.com/api/comments/'

    fetch(commentsURL, {
      method: 'POST',
      body: JSON.stringify(commentPost),
      headers: {
        'Content-Type': 'application/json', // metodi POST e PUT
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYTk2MmY0YmQ0NzAwMTU4NWIxZDYiLCJpYXQiOjE3NjM2NDM2NDEsImV4cCI6MTc2NDg1MzI0MX0.HApuvCLCEpPpABmVgvnlmk4U32u89ik5rEeOlSOHiLw',
      },
    })
      .then((res) => {
        if (res.ok) {
          alert('COMMENTO PUBBLICATO CON SUCCESSO!')
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  /*   componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.setState({
        commentPost: {
          ...this.state.commentPost,
          elementId: this.props.bookId,
        },
      })
    }
  }
 */
  useEffect(() => {
    setCommentPost({ ...commentPost, elementId: bookId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId])

  return (
    <Col xs={12} className="mt-3">
      <Form
        onSubmit={(e) => {
          e.preventDefault()

          putComments()

          setCommentPost({
            comment: '',
            rate: '1',
            elementId: bookId,
          })
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Inserisci un Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={commentPost.comment}
            onChange={(e) => {
              setCommentPost({
                ...commentPost,
                comment: e.target.value,
              })
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Lascia un punteggio (da 1 a 5)</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={commentPost.rate}
            onChange={(e) => {
              setCommentPost({
                ...commentPost,
                rate: e.target.value,
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          INVIA COMMENTO
        </Button>
      </Form>
    </Col>
  )
}

export default AddComment
