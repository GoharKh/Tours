import React, {useEffect, useState} from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async() => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch(e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if(!loading && tours.length === 0) {
    return (
      <>
        <div className="title">
          <h2>No Tours</h2> 
          <button onClick={() => fetchTours()} className="btn">Refresh</button>
        </div>
      </>
    )
  }
  return (
    <>    
    <main>
    {loading && <Loading />}
    {!loading && <Tours tours={tours} removeTour={removeTour}/>}
    </main>
    </>
  );
}

export default App;
