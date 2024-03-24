import logo from './logo.svg';
import './App.css';
import Business from '../Business/Business';
import ButtonUsage from '../Button/Button';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar';


const business1 = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.6,
  reviewCount: 90,
}
const business2 = 
{
  imageSrc:
  "https://themadrasdiaries.nl/wp-content/uploads/2023/01/Dosa.jpeg",
  name: "Madrad Diaries",
  address: "Lange Leidsedwarsstraat 41H",
  city: "Amsterdam",
  state: "NH",
  zipCode: "1017NG",
  category: "Indian",
  rating: 4.9,
  reviewCount: 910,
}


const businesses =[business1,business2,business1]

function App() {
  return (

  <div>
    <SearchBar />
    < BusinessList 
        businesses={businesses}
      />


  </div>


  )
}

export default App;
