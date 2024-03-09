import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CartButton.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        setItems(items => [...items, {
            id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
            text: item.text,
            title: item.title,
            date: new Date(item.date),
        }]);
    };

    return (
        <div className='app'>
            <LeftPanel>
                <Header />
                <JournalAddButton />
                <JournalList items={ items } />
            </LeftPanel>
            <Body>
                <JournalForm onSubmit={ addItem } />
            </Body>
        </div>
    );
}

export default App;
