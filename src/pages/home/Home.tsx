import './Home.css'
import AppTitle from './components/AppTitle'
import PostsList from './components/PostsList'

function Home() {

  return (
    <div className='container'>
      <main>
        <AppTitle />
        <PostsList />
      </main>
    </div>
  )
}

export default Home
