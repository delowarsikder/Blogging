import PostEdit from "./PostEdit";
import { destroyPostAsync } from "./postSlice";
import { useNavigate } from 'react-router-dom';

function ButtonGroup(props: any) {
  const navigate = useNavigate();
  const { post, dispatch } = props;
  // post_id = { props.post.id }
  // dispatch = { props.dispatch }

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
    // <PostEdit props={props} />
    navigate('./PostEdit', { state: { props } });
    // alert("click Edit button");
  }

  return (

    <div className="btn-group">
      <button className="btn btn-danger p-2" onClick={(e) => handleDelete(e)}>Delete</button>
      <button className="btn btn-warning p-2" onClick={(e) => handleEdit(e)}>Edit</button>
    </div>
  )
};

export default ButtonGroup;