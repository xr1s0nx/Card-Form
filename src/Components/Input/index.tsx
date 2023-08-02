import MaskInput from 'react-maskinput'
import styles from './styles.module.scss'

interface InputProps {
    value: string,
    width: string,
    title: string,
    // errorState: {
    //     text: string,
    //     active: boolean
    // },
    placeholder: string,
    mask?: string
    maxSize?: number
    onChange: (value: string) => void
}

const Input: React.FunctionComponent<InputProps> = ({value, onChange, title, width, mask, maxSize}) => {

    return ( 
        <div className={styles.inputContainer}>
            <p className={styles.title}>{title}</p>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={{width: width}}/>
        </div>
     );
}

export default Input;