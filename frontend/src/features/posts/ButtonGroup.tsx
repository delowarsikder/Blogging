import { useDispatch } from "react-redux";
import { closeModal, openModal } from '../modal/modalSlice';
import { destroyPostAsync } from "./postSlice";

function ButtonGroup(props: any) {
  const dispatch = useDispatch<any>();
  function handleDelete(e: any) {
    e.preventDefault();
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    props.dispatch(destroyPostAsync(payload));
  }

  function handleUpdate(e: any) {
    e.preventDefault();
    dispatch(openModal());
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    // props.dispatch(updatePostAsync(payload));
  }



  return (
    <div className="btn-group float-end">
      <button className="btn btn-warning p-2" onClick={(e) => handleUpdate(e)}>Edit</button>
      <button className="btn btn-danger p-2" onClick={(e) => handleDelete(e)}>Delete</button>
    </div>
  )
};

export default ButtonGroup;