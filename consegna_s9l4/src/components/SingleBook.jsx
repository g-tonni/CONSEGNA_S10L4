import { Col, Row, Card, Button } from 'react-bootstrap'

const SingleBook = function ({
  selectedBook,
  getBookId,
  selected,
  asin,
  imageBook,
  titleBook,
  priceBook,
}) {
  return (
    <Col xs={12} sm={6} xl={3}>
      <Card
        onClick={() => {
          // console.log(this.props.asin)
          selectedBook(asin)
          getBookId(asin)
        }}
        className={
          'shadow border-warning overflow-hidden h-100' +
          (selected === true ? ' border-3' : ' border-0')
        }
      >
        <div className="overflow-hidden" style={{ height: 300 }}>
          <img src={imageBook} alt="Libro" className="w-100" />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate fw-bold">{titleBook}</Card.Title>
          <Card.Text className="flex-grow-1 d-flex align-items-center">
            <span className="fs-5">{priceBook}</span> €
          </Card.Text>
          <Button variant="warning">Scopri di più</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
