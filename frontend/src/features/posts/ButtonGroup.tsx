import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { openModal } from '../modal/modalSlice';
import { destroyPostAsync } from "./postSlice";

function ButtonGroup(props: any) {
  const navigator = useNavigate();
  const { post, dispatch } = props;
  const { isOpen } = useSelector((store: any) => store.modal);

  const handleDelete = (e: any) => {
    e.preventDefault();
    const payload = {
      post: {
        id: post.id
      }
    }
    dispatch(destroyPostAsync(payload));
  }

  const handleEdit = (e: any) => {
    e.preventDefault();
    // dispatch(openModal(post));
    navigator('./postedit', { state: { post } });
  }

  return (
    <div className="">
      <button className="btn btn-danger p-2 m-1" onClick={(e) => handleDelete(e)}>
        <FontAwesomeIcon icon="trash" />
        Delete</button>
      <button className="btn btn-warning p-2 m-1" onClick={(e) => handleEdit(e)}>
        <FontAwesomeIcon icon={faPenToSquare} />
        Edit</button>
    </div>
  )
}

export default ButtonGroup;
