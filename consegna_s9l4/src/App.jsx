import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import BookAlert from './components/BookAlert'
import BookNav from './components/BookNav'
import BookFooter from './components/BookFooter'
import BookList from './components/BookList'
import books from './books/horror.json'

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column min-vh-100">
      {/* HEADER */}
      <Row>
        <Col>
          <BookNav />
        </Col>
      </Row>

      {/* MAIN */}
      <Row>
        <Col>
          <BookAlert />
        </Col>
      </Row>

      <Container fluid>
        <Row>
          <BookList singleBook={books} />
        </Row>
      </Container>

      {/* FOOTER */}
      <Row>
        <Col>
          <BookFooter />
        </Col>
      </Row>
    </Container>
  )
}

export default App
