import {useState} from 'react'

import UserStory from '../UserStory'
import StoryViewer from '../StoryViewer'

import './index.css'

const storiesList = [
  {
    id: 1,

    userName: 'Rahul',

    profilePic:
      'https://randomuser.me/api/portraits/men/1.jpg',

    storyContent:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',

    quote:
      'Enjoy every sunset 🌅',
  },

  {
    id: 2,

    userName: 'Priya',

    profilePic:
      'https://randomuser.me/api/portraits/women/2.jpg',

    storyContent:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',

    quote:
      'Travel brings peace ✈️',
  },

  {
    id: 3,

    userName: 'Arjun',

    profilePic:
      'https://randomuser.me/api/portraits/men/3.jpg',

    storyContent:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',

    quote:
      'Smile more 😄',
  },

  {
    id: 4,

    userName: 'Siri',

    profilePic:
      'https://randomuser.me/api/portraits/women/4.jpg',

    storyContent:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',

    quote:
      'Nature heals everything 🌿',
  },

  {
    id: 5,

    userName: 'Kiran',

    profilePic:
      'https://randomuser.me/api/portraits/men/5.jpg',

    storyContent:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',

    quote:
      'Work hard dream big 💻',
  },

  {
    id: 6,

    userName: 'Anu',

    profilePic:
      'https://randomuser.me/api/portraits/women/6.jpg',

    storyContent:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',

    quote:
      'Ocean breeze 🌊',
  },
]

const UserStories = () => {
  const [activeStory, setActiveStory] =
    useState(null)

  const [viewedStories, setViewedStories] =
    useState([])

  const onClickStory = story => {
    setActiveStory(story)

    if (
      !viewedStories.includes(story.id)
    ) {
      setViewedStories(prev => [
        ...prev,
        story.id,
      ])
    }
  }

  const closeStory = () => {
    setActiveStory(null)
  }

  return (
    <>
      <div className="stories-container">

        <ul className="stories-list">

          {storiesList.map(eachStory => (
            <UserStory
              key={eachStory.id}
              storyDetails={eachStory}
              onClickStory={onClickStory}
              isViewed={viewedStories.includes(
                eachStory.id,
              )}
            />
          ))}

        </ul>

      </div>

      {activeStory && (
        <StoryViewer
          storyDetails={activeStory}
          closeStory={closeStory}
        />
      )}
    </>
  )
}

export default UserStories