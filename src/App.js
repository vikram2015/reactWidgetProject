import React, {useState} from 'react';
import Accordion from './component/Accordion';
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Convert from "./component/Convert";
import Route from "./component/Routes";
import Header from "./component/Header";

const items = [
    {
        title : 'What is React?',
        content : 'React is a front end javascript framework'
    },
    {
        title : 'Why use React?',
        content : 'React is favourite JS library among the engineers'
    },
    {
        title : 'How do you use React?',
        content : 'You use React by creating component'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade Of Blue',
        value: 'blue'
    }
];

// const showAccordion = () => {
//     if(window.location.pathname === '/') {
//         return <Accordion items = {items} />
//     }
// }
//
// const showSearch = () => {
//     if(window.location.pathname === '/search') {
//         return < Search />
//     }
// }
//
// const showDropdown = () => {
//     if(window.location.pathname === '/dropdown') {
//         return < Dropdown />
//     }
// }
//
// const showTranslate = () => {
//     if(window.location.pathname === '/translate') {
//         return < Translate />
//     }
// }

export default () => {

    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown ] = useState(true);

    return(
        <div>
            <br/>
            {/*<Accordion items = { items } />*/}
            {/*<Search />*/}
            {/*{showDropdown ?*/}
            {/*    <Dropdown*/}
            {/*        selected={selected}*/}
            {/*        onSelectedChange={setSelected}*/}
            {/*        options={options}*/}
            {/*    /> : null*/}
            {/*}*/}
            {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>*/}
            {/*<Translate />*/}

            {/*{showAccordion()}*/}
            {/*{showSearch()}*/}
            {/*{showDropdown()}*/}
            {/*{showTranslate()}*/}

            <Header />

            <Route path="/">
                <Accordion items={ items }/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label= "Select a Color"
                    options={ options }
                    selected={ selected }
                    onSelectedChange={ setSelected }
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
};