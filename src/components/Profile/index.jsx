import Header from '../Header'

import './index.css'

const profilePosts = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
]

const Profile = () => {
  return (
    <div className="profile-bg-container">

      <Header
        searchInput=""
        setSearchInput={() => {}}
      />

      <div className="profile-container">

        <div className="profile-top-section">

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
            className="profile-avatar"
          />

          <div className="profile-details">

            <h1 className="profile-user-name">
              codyfisher
            </h1>

            <div className="followers-container">

              <p className="follow-text">
                <span className="count">
                  148
                </span>{' '}
                Posts
              </p>

              <p className="follow-text">
                <span className="count">
                  24.8k
                </span>{' '}
                Followers
              </p>

              <p className="follow-text">
                <span className="count">
                  980
                </span>{' '}
                Following
              </p>

            </div>

            <p className="profile-name">
              Cody Fisher
            </p>

            <p className="profile-bio">
              Explorer 🌍 | Nature Lover 🌿 |
              Content Creator 📸 | Dream Big ✨
            </p>

          </div>

        </div>

        <hr className="divider" />

        <div className="posts-grid">

          {profilePosts.map(eachPost => (
            <img
              key={eachPost}
              src={eachPost}
              alt="user post"
              className="grid-image"
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Profile