import { Col } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = function ({ commentArr }) {
  return (
    <Col xs={12}>
      <div>
        {commentArr.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              comment={comment.comment}
              rate={comment.rate}
              commentId={comment._id}
            />
          )
        })}
      </div>
    </Col>
  )
}

export default CommentList
