import { destroyPostAsync,editPostAsync} from "./postSlice";

function ButtonGroup(props: any) {

  function handleDelete(e: any) {
    e.preventDefault();
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    props.dispatch(destroyPostAsync(payload));
  }

  function handleEdit(e: any) {
    e.preventDefault();
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    // props.dispatch(editPostAsync(payload));
  }



  return (
    <div className="btn-group float-end">
      <button className="btn btn-warning p-2" onClick={(e) => handleEdit(e)}>Edit</button>
      <button className="btn btn-danger p-2" onClick={(e) => handleDelete(e)}>Delete</button>
    </div>
  )
};

export default ButtonGroup;