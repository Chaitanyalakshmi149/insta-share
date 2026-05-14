import {useState} from 'react'

import PostActions from '../PostActions'
import CommentSection from '../CommentSection'

import './index.css'

const Post = props => {
  const {postDetails} = props

  const {
    userName,
    profilePic,
    postImage,
    likesCount,
    caption,
    comments,
    timeAgo,
  } = postDetails

  const [isLiked, setIsLiked] = useState(false)

  const [likes, setLikes] = useState(likesCount)

  const [showComments, setShowComments] = useState(false)

  const onClickLike = () => {

    if (isLiked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }

    setIsLiked(prev => !prev)
  }

  const onToggleComments = () => {
    setShowComments(prev => !prev)
  }

  return (
    <div className="post-card">

      <div className="post-header">

        <img
          src={profilePic}
          alt={userName}
          className="profile-image"
        />

        <p className="profile-name">
          {userName}
        </p>

      </div>

      <img
        src={postImage}
        alt="post"
        className="post-image"
      />

      <div className="post-content">

        <PostActions
          isLiked={isLiked}
          onClickLike={onClickLike}
          onToggleComments={onToggleComments}
        />

        <p className="likes-text">
          {likes} likes
        </p>

        <p className="caption-text">
          {caption}
        </p>

        {showComments && (
          <CommentSection comments={comments} />
        )}

        <p className="time-text">
          {timeAgo}
        </p>

      </div>

    </div>
  )
}

export default Post