import { destroyPostAsync } from "./postSlice";
import { useNavigate } from 'react-router-dom';

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
    <div className="btn-group">
      <button className="btn btn-danger p-2" onClick={(e) => handleDelete(e)}>Delete</button>
      <button className="btn btn-warning p-2" onClick={(e) => handleEdit(e)}>Edit</button>
    </div>
  )
};

export default ButtonGroup;