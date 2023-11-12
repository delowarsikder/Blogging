import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup';
import FormModal from './FormModal';

function Post(props: any) {
  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleElement = <h2 >{title}</h2>
  const bodyElement = <p >{body}</p>

  useEffect(() => {
    setPostId(props.post.id);
    setTitle(props.post.title);
    setBody(props.post.body);
  }, [props]);

  return (
    <div>
      <div className="d-flex align-items-start flex-column mb-2">
        <div className='text-start'>{postId}</div>
        <div className='text-start'>{titleElement}</div>
        <div className='text-start'>{bodyElement}</div>
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

