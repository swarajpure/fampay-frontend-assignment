import { useEffect, useState } from 'react';
import './App.css';
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards';
import ShowSmallCardsArrow from './components/SmallCardsArrow/ShowSmallCardsArrow';
import filterFetchedData from './utils/filterFetchedData';

const App = () => {
  const [bigDisplayCards, setBigDisplayCards] = useState();
  const [smallCardsArrow, setSmallCardsArrow] = useState();

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards);
      setSmallCardsArrow(data.smallCardsArrow);
    });
  }, []);

  return (
    <div className="main-container">
      <ShowBigDisplayCards cardsData={bigDisplayCards} />
      <ShowSmallCardsArrow cardsData={smallCardsArrow} />
    </div>
  );
};

export default App;
