import { useEffect, useState } from 'react';
import './App.css';
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards';
import filterFetchedData from './utils/filterFetchedData';

function App() {
  const [bigDisplayCards, setBigDisplayCards] = useState();

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards);
    });
  }, []);

  return (
    <div className="main-container">
      <p>Content goes here</p>
      <ShowBigDisplayCards cardsData={bigDisplayCards} />
    </div>
  );
}

export default App;
