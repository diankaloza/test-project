import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { I_PostParams, Status } from './types'

import { I_Post } from 'models/post'

export const getPosts = createAsyncThunk<I_Post[], I_PostParams>(
  'posts/getPostsStatus',
  async (params) => {
    const { page, limit } = params
    const { data } = await axios.get<I_Post[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    )

    return data
  },
)

interface I_FilterSlice {
  posts: I_Post[]
  status: string
}

const initialState: I_FilterSlice = {
  posts: [],
  status: Status.LOADING,
}

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    resetPosts() {
      return initialState
    },
    setPosts(state, action: PayloadAction<I_Post[]>) {
      state.posts = action.payload
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload]
      state.status = Status.SUCCESS
    })
    builder.addCase(getPosts.rejected, (state) => {
      state.posts = []
      state.status = Status.ERROR
    })
  },
})

export const { setPosts, deletePost, resetPosts } = PostsSlice.actions
