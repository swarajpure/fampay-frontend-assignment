import { useEffect, useState } from 'react';
import './App.css';
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards';
import ShowSmallCardsArrow from './components/SmallCardsArrow/ShowSmallCardsArrow';
import ShowImageCards from './components/ImageCards/ShowImageCards';
import ShowDynamicWidthCards from './components/DynamicWidthCards/ShowDynamicWidthCards';
import ShowSmallCardsNoArrow from './components/SmallCardsNoArrow/ShowSmallCardsNoArrow';
import filterFetchedData from './utils/filterFetchedData';

const App = () => {
  const [bigDisplayCards, setBigDisplayCards] = useState();
  const [smallCardsArrow, setSmallCardsArrow] = useState();
  const [imageCards, setImageCards] = useState();
  const [dynamicWidthCards, setDynamicWidthCards] = useState();
  const [smallCardsNoArrow, setSmallCardsNoArrow] = useState();

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards);
      setSmallCardsArrow(data.smallCardsArrow);
      setImageCards(data.imgCards);
      setDynamicWidthCards(data.dynamicWidthCards);
      setSmallCardsNoArrow(data.smallCardsNoArrow);
    });
  }, []);

  return (
    <div className="main-container">
      <ShowBigDisplayCards cardsData={bigDisplayCards} />
      <ShowSmallCardsArrow cardsData={smallCardsArrow} />
      <ShowImageCards cardsData={imageCards} />
      <ShowDynamicWidthCards cardsData={dynamicWidthCards} />
      <ShowSmallCardsNoArrow cardsData={smallCardsNoArrow} />
    </div>
  );
};

export default App;
