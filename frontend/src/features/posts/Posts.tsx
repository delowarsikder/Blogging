import React, { useEffect } from 'react';
import { Statuses, fetchPostsAsync, selectPosts, selectStatus } from './postSlice';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import Post from './Post';
import PostForm from './PostForm';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])


  let contents;
  if (status !== Statuses.UpToDate) {
    contents = status;
  } else {
    contents = <div className='card mt-2'>
      <div className='card-header text-center'>
        <h1>Posts</h1>
      </div>
      <div className='card-body'>
        {posts && posts.length > 0 && posts.map(post => {
          return <div key={post.id}>
            <Post
              dispatch={dispatch}
              post={post}
            />
          </div>
        })}
      </div>
    </div>
  }

  return (
    <div>

      {contents}
      <PostForm />
    </div>
  )
}

export default Posts;
