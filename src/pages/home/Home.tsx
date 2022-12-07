import './Home.css'
import AppTitle from './components/AppTitle'
import PostsList from './components/PostsList'
import SortButton from './components/SortButton'
import { useState } from 'react'
import NewPost from './components/NewPost'

function Home() {

  const [sortNewFirst, setSortNewFirst] = useState(true);

  // Als de sorteer volgorde wordt verandert, geef die verandering dan door aan de PostsList component
  function sortChangedCallback(sortNewFirstValue: boolean) {
    setSortNewFirst(sortNewFirstValue);
  }

  return (
    <div className='container'>
      <main>
        <AppTitle />
        <NewPost></NewPost>
        <SortButton sortChanged={sortChangedCallback}/>
        <PostsList sortNewFirst={sortNewFirst}/>
      </main>
    </div>
  )
}

export default Home
