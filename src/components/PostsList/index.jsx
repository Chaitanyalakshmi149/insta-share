import Post from '../Post'

import './index.css'

const postsData = [
  {
    id: 1,

    userName: 'Leslie Alexander',

    profilePic:
      'https://randomuser.me/api/portraits/women/44.jpg',

    postImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',

    likesCount: 1081,

    caption:
      'Beautiful mountains and peaceful nature 🌿',

    comments: [
      'Amazing view ❤️',
      'Need this vacation 🔥',
    ],

    timeAgo: '1 Hour Ago',
  },

  {
    id: 2,

    userName: 'Cody Fisher',

    profilePic:
      'https://randomuser.me/api/portraits/men/32.jpg',

    postImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',

    likesCount: 932,

    caption:
      'Nature always gives peace 🌄',

    comments: [
      'Wow superb 😍',
      'Wonderful click 📸',
    ],

    timeAgo: '2 Hours Ago',
  },

  {
    id: 3,

    userName: 'Sophia',

    profilePic:
      'https://randomuser.me/api/portraits/women/68.jpg',

    postImage:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',

    likesCount: 2450,

    caption:
      'Travel memories ✈️',

    comments: [
      'Looks awesome 🔥',
      'Dream place 😍',
    ],

    timeAgo: '4 Hours Ago',
  },

  {
    id: 4,

    userName: 'David',

    profilePic:
      'https://randomuser.me/api/portraits/men/75.jpg',

    postImage:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',

    likesCount: 1890,

    caption:
      'Smiling through life 😄',

    comments: [
      'Great shot ❤️',
      'Nice vibes ✨',
    ],

    timeAgo: '5 Hours Ago',
  },
]

const PostsList = props => {
  const {searchInput} = props

  const filteredPosts = postsData.filter(
    eachPost => {
      const searchText =
        searchInput.toLowerCase()

      return (
        eachPost.userName
          .toLowerCase()
          .includes(searchText) ||

        eachPost.caption
          .toLowerCase()
          .includes(searchText)
      )
    },
  )

  return (
    <div className="posts-container">

      {filteredPosts.length > 0 ? (
        filteredPosts.map(eachPost => (
          <Post
            key={eachPost.id}
            postDetails={eachPost}
          />
        ))
      ) : (
        <div className="no-posts-container">

          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486804.png"
            alt="no posts"
            className="no-posts-image"
          />

          <h1 className="no-posts-text">
            No Posts Found
          </h1>

        </div>
      )}

    </div>
  )
}

export default PostsList