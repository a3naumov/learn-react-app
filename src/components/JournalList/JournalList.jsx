import './JournalList.css';
import CardButton from '../CardButton/CartButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

function JournalList({ items }) {
    if (items.length === 0) {
        return <p>No Memories</p>;
    }

    return (
        <div className='journal-list'>
            {items.map(el => (
                <CardButton key={el.id}>
                    <JournalItem
                        title={ el.title }
                        text={ el.text }
                        date={ el.date }
                    />
                </CardButton>
            ))}
        </div>
    );
}

export default JournalList;