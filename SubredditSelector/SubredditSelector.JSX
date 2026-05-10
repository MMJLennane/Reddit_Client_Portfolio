import styles from './SubredditSelector.module.css';

function SubredditSelector ({ setSubreddit, selectedSubreddit }) {
    return (
        <div className = { styles ['subreddit-selector' ]}>
            <button onClick={() => setSubreddit('Battletech') }>r/Battletech</button>
            <button onClick={() => setSubreddit('Mechwarrior')}>r/Mechwarrior</button>
            <button onClick={() => setSubreddit('Mechwarrior Online')}>r/Mechwarrior Online</button>
            <button onClick={() => setSubreddit('MechCommander')}>r/MechCommander</button>
            <button onClick={() => setSubreddit('Battletech Game')}>r/Battletech Game</button>
        </div>
    );
}

export default SubredditSelector;