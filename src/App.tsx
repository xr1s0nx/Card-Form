import { useEffect, useState } from 'react';
import './App.scss'
import Card from './Components/Card';
import { cardInfoTypes } from './types';
import { CARD_CVC_CHARS, CARD_NUMBER_CHARS } from './constants';
import Form from './Components/Form';

function App() {

  const [cardInfo, changeCardInfo] = useState<cardInfoTypes>({
    cardNumber: '1234 5312 8736 ',
    cardNumberVisible: true,
    cardHolderName: 'Felicia leire',
    cardEndDate: '01/28',
    cardCVC: '011',
    cardCVCVisible: false,
    bluredCardNumber: '',
    bluredCardCVC: ''
  })

  useEffect(() => {

    const bluredCardName = cardInfo.cardNumber.split('').map(letter => {
      if (letter !== ' ') {
        return CARD_NUMBER_CHARS
      }
      return letter
    }).join('')

    const bluredCardCVC = cardInfo.cardCVC.split('').map(letter => {
      if (letter !== ' ') {
        return CARD_CVC_CHARS
      }
      return letter
    }).join('')

    changeCardInfo({ ...cardInfo, bluredCardNumber: bluredCardName, bluredCardCVC: bluredCardCVC })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardInfo.cardNumber, cardInfo.bluredCardCVC])

  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <Card cardInfo={cardInfo} changeCardInfo={changeCardInfo} />
        <Form cardInfo={cardInfo} changeCardInfo={changeCardInfo}/>
      </div>
    </div>
  );
}

export default App;
