import { Routes, Route, useNavigate } from 'react-router-dom';
import PostsPage from './features/posts/PostsPage';
import PostDetailPage from './features/posts/PostDetailPage';
import HomePage from './features/home/HomePage';
import CreatorsPage from './features/creators/CreatorsPage';
import CreatorDetailPage from './features/creators/CreatorDetailPage';
import Header from './components/Header';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/r/:subreddit" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/creators/:slug" element={<CreatorDetailPage />} />
        <Route path="*" element={<p>Page not found. <button onClick={() => navigate('/')}>Home</button></p>} />
      </Routes>
    </div>
  );
}

export default App;
