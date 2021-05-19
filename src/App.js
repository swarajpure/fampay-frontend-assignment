import { useEffect, useState } from 'react';
import './App.css';
import PullToRefresh from 'react-simple-pull-to-refresh';
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
  const [boolToRefresh, setBoolToRefresh] = useState(false);

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards);
      setSmallCardsArrow(data.smallCardsArrow);
      setImageCards(data.imgCards);
      setDynamicWidthCards(data.dynamicWidthCards);
      setSmallCardsNoArrow(data.smallCardsNoArrow);
    });
  }, [boolToRefresh]);

  const refreshHandler = () => {
    const currentValue = boolToRefresh;
    setBoolToRefresh(!currentValue);
  };

  return (
    <div className="main-container">
      <PullToRefresh onRefresh={refreshHandler}>
        <ShowBigDisplayCards cardsData={bigDisplayCards} />
        <ShowSmallCardsArrow cardsData={smallCardsArrow} />
        <ShowImageCards cardsData={imageCards} />
        <ShowDynamicWidthCards cardsData={dynamicWidthCards} />
        <ShowSmallCardsNoArrow cardsData={smallCardsNoArrow} />
      </PullToRefresh>
    </div>

  );
};

export default App;
