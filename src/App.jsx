import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectStatus, selectError } from './features/posts/postsSlice';
import PostsPage from './features/posts/PostsPage';
import PostDetailPage from './features/posts/PostDetailPage';
import Header from './components/Header';
import SubredditSelector from './components/SubredditSelector/SubredditSelector.JSX';

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const [subreddit, setSubreddit] = useState('Battletech');

  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [dispatch, subreddit]);

  return (
    <div className="app-shell">

      <h1>BattleTech<span>Reddit</span>Viewer</h1>
      <SubredditSelector selectedSubreddit={subreddit} onSubredditChange={setSubreddit} />
      {status === 'failed' && (
        <div className="app-error">
          <p>Failed to load Reddit posts: {error}</p>
          <button onClick={() => dispatch(fetchPosts(subreddit))}>Retry</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Navigate to={`/r/${subreddit}`} replace />} />
        <Route path="/r/:subreddit" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="*" element={<p>Page not found. <button onClick={() => navigate('/')}>Home</button></p>} />
      </Routes>
    </div>
  );
}

export default App;
