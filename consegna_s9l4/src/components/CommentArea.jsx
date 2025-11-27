import { useState, useEffect } from 'react'
import { Row, Alert } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'

const CommentArea = function ({ bookId }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  const getComments = function () {
    const commentsURL =
      'https://striveschool-api.herokuapp.com/api/comments/' + bookId
    fetch(commentsURL, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYTk2MmY0YmQ0NzAwMTU4NWIxZDYiLCJpYXQiOjE3NjM2NDM2NDEsImV4cCI6MTc2NDg1MzI0MX0.HApuvCLCEpPpABmVgvnlmk4U32u89ik5rEeOlSOHiLw',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        console.log(data)

        setComments(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        setLoading(false)
      })
  }

  useEffect(() => {
    if (bookId !== '') {
      getComments()
    } else {
      setComments([])
      setLoading(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId])

  return (
    <>
      {loading && (
        <div>
          <Alert variant="warning">
            Seleziona un libro per vedere le sue recensioni
          </Alert>
        </div>
      )}
      <CommentList commentArr={comments} />
      <AddComment bookId={bookId} />
    </>
  )
}

export default CommentArea
