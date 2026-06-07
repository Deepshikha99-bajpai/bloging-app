
import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import { cardsData } from '../../data/cards';

import Card from '../card/Card';
import CardCod from '../cardd/CardCod';
import Card1 from '../card1/card1';
import Card2 from '../card2/card2';
import Card3 from '../card3/card3';

import Cardsz1 from '../cardsz1/cardsz1';
import Cardsz2 from '../cardsz2/cardsz2';
import Cardsz3 from '../cardsz3/cardsz3';

import Cardcul1 from '../cardcul1/cardcul1';
import Cardcul2 from '../cardcul2/cardcul2';
import Cardcul3 from '../cardcul3/cardcul3';
import Cardf1 from '../cardf1/cardf1';
import Cardf2 from '../cardf2/cardf2';
import Cardf3 from '../cardf3/cardf3';
import Cardfd1 from '../cardfd1/cardfd1';
import Cardfd2 from '../cardfd2/cardfd2';
import Cardcode1 from '../cardcode1/cardcode1';
import Cardcode2 from '../cardcode2/cardcode2';


const componentMap = {
  Card2,
  Card,
  CardCod,
  Card1,
  Card3,
  Cardsz1,
  Cardsz2,
  Cardsz3,
  Cardcul1,
  Cardcul2,
  Cardcul3,
  Cardf1,
  Cardf2,
  Cardf3,
  Cardfd1,
  Cardfd2,
  Cardcode1,
  Cardcode2



};

const CardList = ({ cat }) => {
  const filteredCards = cat
    ? cardsData.filter(card => card.category === cat)
    : cardsData;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {cat ? `${cat} Posts` : 'Recent Posts'}
      </h1>
      <div className={styles.posts}>
        {filteredCards.map(card => {
          const Component = componentMap[card.component];
          if (!Component) {
            console.error(`Unknown component type: ${card.component}`);
            return null; // fallback to avoid runtime crash
          }
          return <Component key={card.id} {...card} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
