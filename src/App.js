import { useEffect, useState } from 'react';
import './App.css';
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards';
import ShowSmallCardsArrow from './components/SmallCardsArrow/ShowSmallCardsArrow';
import ShowImageCards from './components/ImageCards/ShowImageCards';
import filterFetchedData from './utils/filterFetchedData';

const App = () => {
  const [bigDisplayCards, setBigDisplayCards] = useState();
  const [smallCardsArrow, setSmallCardsArrow] = useState();
  const [imageCards, setImageCards] = useState();

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards);
      setSmallCardsArrow(data.smallCardsArrow);
      setImageCards(data.imgCards);
    });
  }, []);

  return (
    <div className="main-container">
      <ShowBigDisplayCards cardsData={bigDisplayCards} />
      <ShowSmallCardsArrow cardsData={smallCardsArrow} />
      <ShowImageCards cardsData={imageCards} />
    </div>
  );
};

export default App;
