import React, { useState } from 'react'
import PostForm from './PostForm';
import ButtonGroup from './ButtonGroup';
import { useDispatch } from 'react-redux';

function Post(props: any) {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const titleElement = <h2 className='title text-start'>{title}</h2>
  const bodyElement = <p className='card-text text-start'>{body}</p>
  const dispatch = useDispatch<any>();


  return (
    <div className='border'>
      <div className='row'>
        <div className="col-8">
          {titleElement}
        </div>
        <div className="col-4">
          <ButtonGroup
            post_id={props.post.id}
            dispatch={props.dispatch}
          />
        </div>
      </div>
      <div className='row'>
        <div className="col-8">
          {bodyElement}
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
  )
}

export default Post;

