import './index.css'

const CommentSection = props => {
  const {comments} = props

  return (
    <div className="comments-container">

      {comments.map(eachComment => (
        <div
          key={eachComment}
          className="comment-card"
        >

          <span className="comment-user">
            user
          </span>

          <p className="comment-text">
            {eachComment}
          </p>

        </div>
      ))}

    </div>
  )
}

export default CommentSection