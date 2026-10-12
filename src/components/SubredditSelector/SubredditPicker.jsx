import styles from './SubredditSelector.module.css';

const subreddits = [
  'Battletech',
  'Mechwarrior',
  'MechwarriorOnline',
  'MechCommander',
  'Battletechgame',
  'BattletechLore',
  'BattletechMods',
  'BattletechDesigns',
  'BattletechArt',
  'AlphaStrike',
  'BattletechTabletop',
  'BattletechMiniatures',
  'BattletechComics',
  'BattletechFanFiction',
];

function SubredditSelector({ selectedSubreddit, onSubredditChange }) {
  return (
    <nav className={styles['subreddit-selector']} aria-label="Choose a subreddit">
      {subreddits.map((subreddit) => {
        const isSelected = subreddit.toLowerCase() === selectedSubreddit.toLowerCase();

        return (
          <button
            key={subreddit}
            type="button"
            aria-pressed={isSelected}
            className={isSelected ? styles.active : ''}
            onClick={() => onSubredditChange(subreddit)}
          >
            r/{subreddit}
          </button>
        );
      })}
    </nav>
  );
}

export default SubredditSelector;
