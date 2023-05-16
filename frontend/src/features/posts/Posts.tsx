import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import Post from './Post';

import NewForm from './NewForm';
import { Statuses, fetchPostsAsync, selectPosts, selectStatus } from './postSlice';
import { openModal } from '../modal/modalSlice';
import FormModal from './FormModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from 'react-router-dom';

function Posts() {
  const { isOpen } = useSelector((store: any) => store.modal);
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<any>();
  const [newForm, setNewForm] = useState([{
    title: '',
    body: '',
  }]);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  const createPost = (e: any) => {
    dispatch(openModal());
  }

  let contents = null;
  if (status !== Statuses.UpToDate) {
    contents = status;
  } else {
    contents = <div className='card mt-2'>
      <div className='card-header text-center d-flex justify-content-between'>
        <h1>Posts</h1>
        <button type='button' className='btn btn-primary' onClick={(e) => createPost(e)}>
          <FontAwesomeIcon icon={faPen} />
          New Post</button>
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
      {isOpen && <FormModal />}
      {(posts && posts.length > 0) ? contents : <Navigate to='/blankPage' />}
      <NewForm />
    </div>
  )
}

export default Posts;
