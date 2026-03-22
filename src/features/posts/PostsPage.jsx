import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPosts, selectAllPosts, selectStatus, selectError, setSearchTerm, setSelectedCategory } from './postsSlice';
import { humanDate } from '../../utils/date';

const categories = ['battletech', 'BattleTechGame', 'mechwarrior', 'boardgames', 'gaming'];

function PostsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subreddit = 'popular' } = useParams();

  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const selectedCategory = useSelector((state) => state.posts.selectedCategory);
  const searchTerm = useSelector((state) => state.posts.searchTerm);

  useEffect(() => {
    dispatch(setSelectedCategory(subreddit));
    dispatch(fetchPosts({ subreddit, searchTerm }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        <div className="filters" role="group" aria-label="Subreddit filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === selectedCategory ? 'active' : ''}
              onClick={() => {
                dispatch(setSelectedCategory(cat));
                navigate(`/r/${cat}`);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="feed">
        {status === 'loading' && <p>Loading posts…</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && posts.length === 0 && <p>No posts found.</p>}

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
