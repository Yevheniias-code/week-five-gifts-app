import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [gifts, setGifts] = useState(data);
  
  const removeItem = (id) => {
    const newGifts = gifts.filter(gift => gift.id !== id);
    setGifts(newGifts);

  }

  return (
    <div>
      <div className='container'>
        <h1>List of {gifts.length} gifts</h1>
      </div>

      {gifts.map(element => {
        const{id, gifty, image} = element;

        return(
          <div key={id}>
            <div className='container'>
                <h3>{id} - {gifty}</h3>
            </div>
          
            <div className='container'>
              <img src={image} width='300px' alt='Gifts' />
            </div>
          
            <div className='container'>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        )
      })}

      <div className='container'>
        <button onClick={() => setGifts([])}>Delete all</button>
      </div>
    </div>
  );
}

export default App;