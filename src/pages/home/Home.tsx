import './Home.css'
import AppTitle from './components/AppTitle'
import PostsList from './components/PostsList'
import SortButton from './components/SortButton'
import { useState } from 'react'
import NewPost from './components/NewPost'
import { Post } from '../../models/post'

function Home() {

  const [sortNewFirst, setSortNewFirst] = useState(true);
  const [createdPost, setCreatedPost] = useState<Post | null>(null);

  // Als de sorteer volgorde wordt verandert, geef die verandering dan door aan de PostsList component
  function sortChangedCallback(sortNewFirstValue: boolean) {
    setSortNewFirst(sortNewFirstValue);
  }

  function postCreatedCallback(createdPost: Post) {
    setCreatedPost(createdPost);
  }

  return (
    <div className='container'>
      <main>
        <AppTitle />
        <NewPost postCreatedCallback={postCreatedCallback}></NewPost>
        <SortButton sortChanged={sortChangedCallback}/>
        <PostsList sortNewFirst={sortNewFirst} createdPost={createdPost}/>
      </main>
    </div>
  )
}

export default Home
