import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { closeModal, openModal } from '../modal/modalSlice';
import Post from './Post';

import PostFormPopUp from './PostFormPopUp';
import { Statuses, fetchPostsAsync, selectPosts, selectStatus } from './postSlice';
import PostForm from './PostForm';

function Posts() {

  const { isOpen } = useSelector((store: any) => store.modal);
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<any>();
  const [postForm, setPostForm] = useState([{
    title: '',
    body: '',
  }]);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])


  let contents;
  if (status !== Statuses.UpToDate) {
    contents = status;
  } else {
    contents = <div >
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
      {isOpen && <PostFormPopUp formData={postForm} />}
      <div className='row p-2'>
        <div className="text-start">
          <h1>Posts</h1>
        </div>
        <div className="text-end">
          <button type="submit" onClick={() => dispatch(openModal())}>New Post</button>
        </div>
      </div>

      <div>
        {contents}
      </div>
      <PostForm/>
    </div>
  )
}

export default Posts;
