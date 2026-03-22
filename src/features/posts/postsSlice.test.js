import postsReducer, { setSearchTerm, setSelectedCategory } from './postsSlice';

describe('posts reducer', () => {
  const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    searchTerm: '',
    selectedCategory: 'popular',
  };

  it('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setSearchTerm', () => {
    const nextState = postsReducer(initialState, setSearchTerm('react'));
    expect(nextState.searchTerm).toBe('react');
  });

  it('should handle setSelectedCategory', () => {
    const nextState = postsReducer(initialState, setSelectedCategory('javascript'));
    expect(nextState.selectedCategory).toBe('javascript');
  });
});
