import './CardButton.css';

function CardButton({ children, className }) {
    const buttonClassName = 'card-button' + (className ? ' ' + className : '');

    return (
        <button className={ buttonClassName }>
            { children }
        </button>
    );
}

export default CardButton;