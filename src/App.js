
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

// , { cache: 'reload' }

function App() {
  const server = 'https://dev.meta365.eu/wp-json/wp/v2/food?_fields=title,featured_media,content,acf,_links,_embedded&_embed'

  const [type,setType] = useState('All')
  const [data, setData] = useState([])
  useEffect(() => {

    fetch(server)
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err))

  }, [])

  console.log(type);
  return (
    <div className="App">
      <div className="title">
        <h2 className='header'>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="mealtime-wrapper">
        <button onClick={()=> setType('All')} className='mealtime-box'>All</button>
        <button onClick={()=> setType('Breakfast')} className='mealtime-box'>Breakfast</button>
        <button onClick={()=> setType('Lunch')} className='mealtime-box'>Lunch</button>
        <button onClick={()=> setType('Shakes')} className='mealtime-box'>Shakes</button>
        <button onClick={()=> setType('Dinner')} className='mealtime-box'>Dinner</button>
      </div>
      <div className='card-wrapper'>
        {
          data.map(card => (
            <Card type={type} key={Math.random()*1000} card={card} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
