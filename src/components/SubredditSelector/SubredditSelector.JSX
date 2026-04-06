import styles from './SubredditSelector.module.css';

function SubredditSelector ({ setSubreddit, selectedSubreddit }) {
    return (
        <div className = { styles ['subreddit-selector' ]}>
            <button onClick={() => setSubreddit('Battletech') }>r/Battletech</button>
            <button onClick={() => setSubreddit('Mechwarrior')}>r/Mechwarrior</button>
            <button onClick={() => setSubreddit('Mechwarrior Online')}>r/Mechwarrior Online</button>
            <button onClick={() => setSubreddit('MechCommander')}>r/MechCommander</button>
            <button onClick={() => setSubreddit('Battletech Game')}>r/Battletech Game</button>
            <button onClick={() => setSubreddit('Battletech Lore')}>r/Battletech Lore</button>
            <button onClick={() => setSubreddit('Battletech Mods')}>r/Battletech Mods</button>
            <button onClick={() => setSubreddit('Battletech Designs')}>r/Battletech Designs</button>
            <button onClick={() => setSubreddit('Battletech Art')}>r/Battletech Art</button>
            <button onClick={() => setSubreddit('Battletech Alpha Strike')}>r/Battletech Alpha Strike</button>
            <button onClick={() => setSubreddit('Battletech Tabletop')}>r/Battletech Tabletop</button>
            <button onClick={() => setSubreddit('Battletech Miniatures')}>r/Battletech Miniatures</button>
            <button onClick={() => setSubreddit('Battletech Comics')}>r/Battletech Comics</button>
            <button onClick={() => setSubreddit('Battletech Fan Fiction')}>r/Battletech Fan Fiction</button>
        </div>
    );
}

export default SubredditSelector;