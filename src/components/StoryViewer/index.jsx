import {FaArrowLeft} from 'react-icons/fa'

import './index.css'

const StoryViewer = props => {
  const {storyDetails, closeStory} = props

  const {
    userName,
    storyContent,
    quote,
  } = storyDetails

  const stopClosing = event => {
    event.stopPropagation()
  }

  return (
    <div
      className="story-popup"
      onClick={closeStory}
    >

      <div
        className="story-card"
        onClick={stopClosing}
      >

        <button
          type="button"
          className="back-button"
          onClick={closeStory}
        >

          <FaArrowLeft className="back-icon" />

        </button>

        <img
          src={storyContent}
          alt={userName}
          className="story-view-image"
        />

        <div className="story-overlay">

          <p className="story-quote">
            {quote}
          </p>

          <p className="story-user-name">
            @{userName}
          </p>

        </div>

      </div>

    </div>
  )
}

export default StoryViewer