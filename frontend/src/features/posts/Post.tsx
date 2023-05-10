import React, { useEffect, useState } from 'react'
import PostForm from './PostForm';
import ButtonGroup from './ButtonGroup';
import { useDispatch } from 'react-redux';

function Post(props: any) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleElement = <h2 className='text-start'>{title}</h2>
  const bodyElement = <p className='text-start'>{body}</p>

  useEffect(() => {
    setTitle(props.post.title);
    setBody(props.post.body);
  }, [props]);

  return (
    <div>
      <div className="d-flex align-items-start flex-column mb-2">
        <div className="">{titleElement}</div>
        <div className="">{bodyElement}</div>
        <div>
          <ButtonGroup
            post={props.post}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </div>
  )
}

export default Post;

