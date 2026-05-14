import {useState} from 'react'

import Header from '../Header'
import UserStories from '../UserStories'
import PostsList from '../PostsList'

import './index.css'

const Home = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="home-bg-container">

      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <div className="home-content">

        <UserStories />

        <PostsList searchInput={searchInput} />

      </div>

    </div>
  )
}

export default Home