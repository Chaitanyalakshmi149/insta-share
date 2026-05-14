import './index.css'

const UserStory = props => {
  const {
    storyDetails,
    onClickStory,
    isViewed,
  } = props

  const {
    userName,
    profilePic,
  } = storyDetails

  return (
    <li
      className="story-item"
      onClick={() =>
        onClickStory(storyDetails)
      }
    >

      <img
        src={profilePic}
        alt={userName}
        className={
          isViewed
            ? 'story-image viewed'
            : 'story-image'
        }
      />

      <p className="story-name">
        {userName}
      </p>

    </li>
  )
}

export default UserStory