import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DEFAULT_LIMIT = 25;

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ subreddit = 'popular', searchTerm = '', sort = 'hot' }, thunkAPI) => {
    try {
      let baseUrl;
      const params = {
        limit: DEFAULT_LIMIT,
        raw_json: 1,
      };

      if (searchTerm) {
        if (subreddit === 'popular') {
          baseUrl = 'https://www.reddit.com/search.json';
        } else {
          baseUrl = `https://www.reddit.com/r/${subreddit}/search.json`;
          params.restrict_sr = 1;
        }
        params.q = searchTerm;
        params.sort = sort;
      } else {
        baseUrl = subreddit === 'popular'
          ? 'https://www.reddit.com/r/popular.json'
          : `https://www.reddit.com/r/${subreddit}.json`;
      }

      const response = await axios.get(baseUrl, { params });
      const children = response.data.data.children;
      const posts = children
        .filter((it) => it.data)
        .map((it) => ({
          id: it.data.id,
          title: it.data.title,
          author: it.data.author,
          subreddit: it.data.subreddit,
          score: it.data.score,
          num_comments: it.data.num_comments,
          thumbnail: it.data.thumbnail?.startsWith('http') ? it.data.thumbnail : null,
          permalink: it.data.permalink,
          selftext: it.data.selftext,
          created_utc: it.data.created_utc,
          url: it.data.url,
          post_hint: it.data.post_hint,
        }));

      return { posts };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message || 'Failed to fetch posts');
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    searchTerm: '',
    selectedCategory: 'battletech',
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setSearchTerm, setSelectedCategory } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const selectStatus = (state) => state.posts.status;
export const selectError = (state) => state.posts.error;
export const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectSelectedCategory = (state) => state.posts.selectedCategory;

export default postsSlice.reducer;
