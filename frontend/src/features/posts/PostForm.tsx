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
    <div>
      <h1>Post Form</h1>
      <form>
        <input
          className='form-control text-start mt-2'
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea name="body"
          className='form-control text-start mt-2'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type='submit' className='button mt-2 '
          onClick={(e) => submitHandler(e)}>
          Submit
        </button>
      </form>

    </div>
  )
}

export default PostForm;

