import * as React from 'react';
import styles from './styles.module.scss';
import { cardInfoTypes } from '../../types';

interface CardProps {
    cardInfo: cardInfoTypes,
    changeCardInfo: React.Dispatch<React.SetStateAction<cardInfoTypes>>
}

const Card: React.FunctionComponent<CardProps> = ({ cardInfo, changeCardInfo }) => {

    const {
        cardNumber,
        cardNumberVisible,
        cardHolderName,
        cardEndDate,
        cardCVCVisible,
        cardCVC,
        bluredCardNumber,
        bluredCardCVC
    } = cardInfo

    return (
        <div className={styles.cardSide}>
            <div className={styles.cardFrontside}>
                <div className={styles.cardNumberContainer}>
                    <p className={styles.cardNumber}>{!cardNumberVisible ? bluredCardNumber : cardNumber}</p>
                    <button className={styles.toggleVisible} onClick={() => changeCardInfo({ ...cardInfo, cardNumberVisible: !cardNumberVisible })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z" /></svg>
                    </button>
                </div>
                <div className={styles.cardBottom}>
                    <p className={styles.cardHolderName}>{cardHolderName}</p>
                    <p className={styles.cardEndDate}>{cardEndDate}</p>
                </div>
            </div>
            <div className={styles.cardBackside}>
                <div className={styles.cardCVCContainer}>
                    <p className={styles.cardCVCCode}>{cardCVCVisible ? cardCVC : bluredCardCVC}</p>
                    <button className={styles.toggleVisible} onClick={() => changeCardInfo({ ...cardInfo, cardCVCVisible: !cardCVCVisible })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;