import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAsync, updatePostAsync } from '../../api/post/postSlice';
import { closeModal } from '../modal/modalSlice';

function FormModal(props: any) {
  const { isOpen, data } = useSelector((store: any) => store.modal);

  const dispatch = useDispatch<any>();
  const [id, setId] = useState(undefined);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createOrEditPost = (e: any) => {
    e.preventDefault();

    const formData = {
      post: {
        id: id,
        title: title,
        body: body,
      }
    }

    if (id) {
      dispatch(updatePostAsync(formData));
    } else {
      dispatch(createPostAsync(formData));
    }

    resetState();
    dispatch(closeModal());
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  let formTitle = "Your Idea";

  useEffect(() => {
    if (data?.payload) {
      setTitle(data.payload.title);
      setBody(data.payload.body);
      setId(data.payload.id);
    }
  }, [data])

  return (
    <div>
      {isOpen && (
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
                    type="hidden"
                    name="id"
                    value={String(id)}
                    readOnly
                  // required
                  />
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
                  onClick={(e) => createOrEditPost(e)}>
                  <FontAwesomeIcon icon="paper-plane" />
                </button>
              </div>

            </div>
          </div>
        </div >)
      }
    </div>
  )
}

export default FormModal;

