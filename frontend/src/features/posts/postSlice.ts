import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { RootState } from '../../app/store';
import { createPost, destroyPost, fetchPosts, updatePost } from './postAPI';

export enum Statuses {
  Initial = "Not Fetch",
  Loading = "Loading...",
  UpToDate = "Up To Date",
  Delete = "Deleted",
  Error = "Error",
}

export interface PostState {
  id?: number;
  title?: string;
  body?: string;
  created_at?: any;
  updated_at?: any;
}

export interface PostsState {
  posts: PostState[];
  status: string;
}

const initialState: PostsState = {
  posts: [
    {
      id: undefined,
      title: "",
      body: "",
      created_at: null,
      updated_at: null,
    }
  ],
  status: Statuses.Initial
}

export interface PostFormData {
  post: {
    id?: number;
    title: string;
    body: string;
  }
}

export interface PostDeleteData {
  post: {
    id: number;
  }
}

export interface PostUpdateData {
  post: {
    id: number | undefined;
    title: string;
    body: string;
  }
}

export const createPostAsync = createAsyncThunk(
  'posts/createPost',
  async (payload: PostFormData) => {

    try {
      const response = await createPost(payload);
      console.log(response);
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }
)

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await fetchPosts();
      return response;
    }
    catch (e) {
      console.log(e);
    }

  }
)

export const destroyPostAsync = createAsyncThunk(
  'posts/destroyPost',
  async (payload: PostDeleteData) => {
    const response = await destroyPost(payload);
    return response;
  }
)

export const updatePostAsync = createAsyncThunk(
  'posts/updatePost',
  async (payload: PostUpdateData) => {
    const response = await updatePost(payload);
    return response;
  }

)


export const postSlice = createSlice({
  name: "posts",
  initialState,
  /*Synchronous action */
  reducers: {},

  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchPostsAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        })
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action: any) => {
        return produce(state, (draftState) => {
          draftState.posts = action.payload;
          draftState.status = Statuses.UpToDate;
        })
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        })
      })

      // create post
      .addCase(createPostAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        })
      })
      .addCase(createPostAsync.fulfilled, (state, action: any) => {
        return produce(state, (draftState) => {
          draftState.posts.push(action.payload);
          draftState.status = Statuses.UpToDate;
        })
      })
      .addCase(createPostAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        })
      })
      //delete post
      .addCase(destroyPostAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        })
      })
      .addCase(destroyPostAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.posts = action.payload;
          draftState.status = Statuses.UpToDate;
        })
      })
      .addCase(destroyPostAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        })
      })
      //update post
      .addCase(updatePostAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        })
      })
      .addCase(updatePostAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          // draftState.posts = [{post1_object},{post2_object}]
          // find index and update data of that draftState.posts[index] with action.payload
          const index = draftState.posts.findIndex(
            post => post.id === action.payload.id
          );
          draftState.posts[index] = action.payload;
          draftState.status = Statuses.UpToDate;
        })
      })
      .addCase(updatePostAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        })
      })
  }
})


export const { } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export const selectStatus = (state: RootState) => state.posts.status;

export default postSlice.reducer;


