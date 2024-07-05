import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Home from './Home'
import Down from './Down'

const Main = () => {

//   const [Hotels,setHotels] = useState([])

// const getHotels = async() => {
//   const url = 'https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&checkin=2025-08-08&checkout=2025-09-09&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'Sign Up for Key',
// 		'x-rapidapi-host': 'airbnb13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const data = await response.json();
// 	setHotels(data.results);
// } catch (error) {
// 	console.error(error);
// }
// }

// useEffect (()=> {
// getHotels()
// },[])

  return (
    <div>
        <Navbar/>
        <Menu/>
        <Home/>
        <Down/>
    </div>
  )
}

export default Main