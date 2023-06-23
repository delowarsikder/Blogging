import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from '../../app/hooks';
import { openModal } from '../modal/modalSlice';
import FormModal from './FormModal';
import Post from './Post';
import { Statuses, fetchPostsAsync, selectPosts, selectStatus } from './postSlice';


function Posts(props: any) {
  const { isOpen } = useSelector((store: any) => store.modal);
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<any>();
  const navigator = useNavigate();
  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  const createNewPost = (e: any) => {
    // justAnAlert("click the new button");
    // navigator('./newform');
    dispatch(openModal());
  }

  let contents = null;
  if (status !== Statuses.UpToDate) {
    contents = status;
  } else {
    contents = <div className='card mt-2'>
      <div className='card-header text-center d-flex justify-content-between'>
        <h1>Posts</h1>
        <div>
          <button type='button' className='btn btn-primary' onClick={(e) => createNewPost(e)}>
            <FontAwesomeIcon icon={faPen} />
            New Post</button>
        </div>
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
      {(posts && posts.length > 0) ? contents : <Navigate to='/' />}
      {/* <NewForm /> */}
    </div>
  )
}

export default Posts;

