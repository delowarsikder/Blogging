import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPostAsync } from './postSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';

function NewForm() {
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
      <h1 className='card-header'>New Post</h1>
      <div className='card-body'>
        <form>
          <input
            placeholder='Title...'
            className='form-control text-start mt-2'
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea name="body"
            required
            placeholder='Description...'
            className='form-control text-start mt-2'
            rows={5} 
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
        <div className='card-footer'>
          <button type='button' className='btn m-1 btn-warning'
            onClick={() => resetState()}>
            <FontAwesomeIcon icon="xmark" />
            Cancel
          </button>
          <button type='button' className='btn m-1 btn-success'
            onClick={(e) => submitHandler(e)}>
            <FontAwesomeIcon icon="paper-plane" />
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}

export default NewForm;

