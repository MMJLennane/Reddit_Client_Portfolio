import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPosts, selectAllPosts, selectStatus, selectError, setSearchTerm } from './postsSlice';
import { humanDate } from '../../utils/date';
import SubredditSelector from '../../components/SubredditSelector/SubredditPicker';

function PostsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subreddit = 'popular' } = useParams();

  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const searchTerm = useSelector((state) => state.posts.searchTerm);

  const developerNews = [
    {
      title: 'Official BattleTech news',
      url: 'https://www.paradoxinteractive.com/games/battletech/news',
      source: 'Paradox Interactive',
    },
    {
      title: 'Harebrained Schemes updates',
      url: 'https://www.harebrained-schemes.com/',
      source: 'Harebrained Schemes',
    },
    {
      title: 'BattleTech Steam news',
      url: 'https://store.steampowered.com/news/app/637090',
      source: 'Steam News',
    },
    {
      title: 'MechWarrior franchise news',
      url: 'https://www.mechwarriorgame.com/news',
      source: 'MechWarrior Official',
    },
    {
      title: 'MechCommander legacy news',
      url: 'https://www.mechcommander.com/',
      source: 'MechCommander Official',
    },
  ];

  useEffect(() => {
    dispatch(fetchPosts({ subreddit, searchTerm }));
  }, [dispatch, subreddit]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const q = event.target.search.value.trim();
    dispatch(setSearchTerm(q));
    dispatch(fetchPosts({ subreddit, searchTerm: q }));
  };

  return (
    <div className="posts-page">
      <section className="controls">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input name="search" placeholder="Search posts" defaultValue={searchTerm} />
          <button type="submit">Search</button>
        </form>

        <SubredditSelector
          selectedSubreddit={subreddit}
          onSubredditChange={(selected) => navigate(`/r/${selected}`)}
        />
      </section>

      <section className="developer-news">
        <h2>Official BattleTech, MechWarrior, and MechCommander news</h2>
        <p>These links point to official developer and publisher announcements beyond Reddit.</p>
        <ul>
          {developerNews.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <span>{item.source}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="feed">
        {status === 'loading' && <p>Loading posts…</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && posts.length === 0 && <p>No posts found.</p>}
        {status === 'failed' && (
          <button type="button" className="retry-button" onClick={() => dispatch(fetchPosts({ subreddit, searchTerm }))}>
            Retry
          </button>
        )}

        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-card" onClick={() => navigate(`/post/${post.id}`)}>
              {post.thumbnail && <img src={post.thumbnail} alt="thumbnail" />}
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.score} points • {post.num_comments} comments</p>
                <p>r/{post.subreddit} • by u/{post.author} • {humanDate(post.created_utc)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default PostsPage;
