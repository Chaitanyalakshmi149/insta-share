import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaShareAlt,
} from 'react-icons/fa'

import './index.css'

const PostActions = props => {
  const {
    isLiked,
    onClickLike,
    onToggleComments,
  } = props

  return (
    <div className="actions-container">

      <button
        type="button"
        className="action-button"
        onClick={onClickLike}
      >

        {isLiked ? (
          <FaHeart className="action-icon liked" />
        ) : (
          <FaRegHeart className="action-icon" />
        )}

      </button>

      <button
        type="button"
        className="action-button"
        onClick={onToggleComments}
      >
        <FaRegComment className="action-icon" />
      </button>

      <button
        type="button"
        className="action-button"
      >
        <FaShareAlt className="action-icon" />
      </button>

    </div>
  )
}

export default PostActions