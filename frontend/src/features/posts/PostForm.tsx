import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPostAsync } from './postSlice';

function PostForm() {
  const dispatch = useDispatch<any>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e: any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }

  return (
    <div className='card mt-2'>
      <h1 className='card-header'>Post Form</h1>
      <div className='card-body'>
        <form>
          <input
            placeholder='Enter Post Title...'
            className='form-control text-start mt-2'
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea name="body"
            required
            placeholder='Enter Post Body...'
            className='form-control text-start mt-2'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
        <div className='card-footer'>
          <button type='button' className='btn m-1 btn-warning'
            onClick={() => resetState()}>
            Cancel
          </button>
          <button type='button' className='btn m-1 btn-success'
            onClick={(e) => submitHandler(e)}>
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}

export default PostForm;

