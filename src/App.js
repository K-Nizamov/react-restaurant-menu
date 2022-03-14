
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import CategoryButton from './components/CategoryButton';


function App() {
  const server = 'https://dev.meta365.eu/wp-json/wp/v2/food?_fields=title,featured_media,content,acf,_links,_embedded&_embed'

  const [type, setType] = useState('All')
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {

    const fetchData = () => {
      return fetch(server)
        .then(res => res.json())
        .then(result => {
          const asd = []

          setData(result)

          result.map(element => {
            let category = element._embedded['wp:term'][0][0].name
            if (asd.includes(category) == false) {
              asd.push(category)
            }
          })
          setCategories(asd.reverse())
        })
        .catch(err => console.log(err))
    }

    fetchData()

  }, [])

console.log(categories);
  return (
    <div className="App">
      <div className="title">
        <h2 className='header'>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="mealtime-wrapper">
        <button onClick={() => setType('All')} className='mealtime-box'>All</button>
        {
          categories.map(element => (
            <CategoryButton key={Math.random() * 1000} element={element} setType={setType} />
          ))
        }

      </div>
      <div className='card-wrapper'>
        {
          data.map(card => (
            <Card type={type} key={Math.random() * 1000} card={card} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
