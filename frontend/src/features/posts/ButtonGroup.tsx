import { destroyPostAsync } from "./postSlice";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPenToSquare,
  faClock, // the clock icon
  faUserCircle, // the user circle icon
  faCoffee, // a cup of coffee
} from "@fortawesome/free-solid-svg-icons";


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
    <>
      <i className="fa-solid fa-user">USER</i>
      {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
      {/* <FontAwesomeIcon icon="fa-font-awesome" /> */}


      {/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> */}
      {/* <FontAwesomeIcon icon={regular("pen-to-square")} /> */}

      <div className="btn-group">
        <FontAwesomeIcon icon="check-square" />
        <button className="btn btn-danger p-2" onClick={(e) => handleDelete(e)}>Delete</button>
        <button className="btn btn-warning p-2" onClick={(e) => handleEdit(e)}>
          <FontAwesomeIcon icon={faPenToSquare} />Edit</button>
      </div>

    </>
  )
};

export default ButtonGroup;
