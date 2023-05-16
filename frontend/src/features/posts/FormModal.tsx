import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../modal/modalSlice';
import { createPostAsync } from './postSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormModal(formData: any) {
  const { isOpen } = useSelector((store: any) => store.modal);

  const dispatch = useDispatch<any>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
    dispatch(closeModal());
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  let formTitle="Your Idea";

  useEffect(() => {
    setTitle(formData.title);
    setBody(formData.body);
  }, [formData])

  return (
    //set modal 
    <div className='modal' style={{
      display: isOpen ? 'block' : 'none'
    }}>
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{formTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
              dispatch(closeModal());
            }}></button>
          </div>

          <div className="modal-body">
            <form>
              <input
                className='form-control text-start mt-2'
                placeholder='write your title'
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              // required
              />
              <textarea name="body"
                className='form-control text-start mt-2'
                placeholder='write your idea...'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              // required
              />
            </form>
          </div>

          <div className="modal-footer">
            <button type='button' className='btn m-1 btn-warning'
              onClick={() => {
                dispatch(closeModal());
              }}>
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
    </div >
  )
}

export default FormModal;

