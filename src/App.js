import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './components/cards/Cards'

export default function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex flex-wrap justify-content-center p-5'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  )
}

