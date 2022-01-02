import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/NavBar'
import ListMovie from './components/listmovie/ListMovie'

export default function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <NavBar />
          <div className='d-flex flex-wrap justify-content-center p-5'>
            <ListMovie />
          </div>
        </div>
      </div>
    </>
  )
}

