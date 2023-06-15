import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    articles: [],
    articleBanner: {},
    article: {},
    loading: false,
    search: '',
    api: '',
    section: 'science'
  },
  reducers: {
    fetchNewsSuccess: (state, action) => {
      state.articles = action.payload;
    },
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setApi: (state, action) => {
      state.api = action.payload;
    },
    setArticleBanner: (state, action) => {
      state.articleBanner = action.payload;
    },
    setSection: (state, action) => {
      state.section = action.payload;
    },
    clearFilter: (state) => {
      state.search = '';
      state.api = '';
      state.section = 'science';
    }
  }
});

export const { fetchNewsSuccess, setArticle, setLoading, setSearch, setApi, setArticleBanner, setSection, clearFilter } = articleSlice.actions;
export default articleSlice.reducer;
