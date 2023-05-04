import React, { useEffect } from 'react';
import { Statuses, fetchPostsAsync, selectPosts, selectStatus } from './postSlice';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import Post from './Post';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])


  let contents;
  if (status !== Statuses.UpToDate) {
    contents = "blank";
  } else {
    contents = <div className='card'>
      <div className='card-body'>
      </div>
      {posts && posts.length > 0 && posts.map(post => {
        return <div key={post.id}>
          <Post
            dispatch={dispatch}
            post={post}
          />
        </div>
      })}
    </div>
  }

  return (
    <div>
      <h1>Posts</h1>
      {contents}
    </div>
  )
}

export default Posts;
