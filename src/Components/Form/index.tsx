import { Dispatch, SetStateAction } from 'react';
import { cardInfoTypes } from '../../types';
import styles from './styles.module.scss';
import Input from '../Input';
import { MAX_NUMBER_LENGTH } from '../../constants';

interface FormProps {
    cardInfo: cardInfoTypes,
    changeCardInfo: Dispatch<SetStateAction<cardInfoTypes>>
}

const Form: React.FunctionComponent<FormProps> = ({
    cardInfo, changeCardInfo
}) => {

    const changeCardNumberInfo = (value: string) => {
        if (value.replace(/\s/g, '').length <= MAX_NUMBER_LENGTH) {
            
        }
    }

    return (
        <div className={styles.formContainer}>
            <Input 
                value={cardInfo.cardNumber} 
                width={'100%'} 
                title={cardInfo.cardNumber} 
                placeholder={''} 
                onChange={(value: string) => changeCardNumberInfo(value.replace(/\D/, ''))} 
                mask='0000 0000 0000 0000'
            />
        </div>
    );
}

export default Form;