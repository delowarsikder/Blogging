import { destroyPostAsync } from "./postSlice";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function ButtonGroup(props: any) {
  const navigator = useNavigate();
  const { post, dispatch } = props;

  const handleDelete = (e: any) => {
    e.preventDefault();
    const payload = {
      post: {
        post_id: post.id
      }
    }
    dispatch(destroyPostAsync(payload));
  }

  function handleEdit(e: any) {
    navigator('./PostEdit', { state: { post } });
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
