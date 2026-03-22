import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostComments = createAsyncThunk('comments/fetchPostComments', async (permalink, thunkAPI) => {
  try {
    const url = `https://www.reddit.com${permalink}.json`;
    const response = await axios.get(url, { params: { raw_json: 1, limit: 20 } });
    const commentsData = response.data[1]?.data?.children || [];
    const comments = commentsData
      .filter((item) => item.kind === 't1' && item.data)
      .map((item) => ({
        id: item.data.id,
        author: item.data.author,
        body: item.data.body || '',
        body_html: item.data.body_html || '',
        created_utc: item.data.created_utc,
      }));
    return comments;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message || 'Failed to fetch comments');
  }
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearComments(state) {
      state.comments = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearComments } = commentsSlice.actions;

export const selectComments = (state) => state.comments.comments;
export const selectCommentsStatus = (state) => state.comments.status;
export const selectCommentsError = (state) => state.comments.error;

export default commentsSlice.reducer;
