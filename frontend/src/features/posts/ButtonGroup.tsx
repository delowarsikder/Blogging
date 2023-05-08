import { destroyPostAsync } from "./postSlice";

function ButtonGroup(props: any) {

  const handleDelete = (e: any) => {
    e.preventDefault();
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    props.dispatch(destroyPostAsync(payload));
  }

  const handleEdit = (e:any) => {
    console.log("click Edit button");
  }

  return (
    <div className="btn-group float-end">
      <button className="btn btn-danger p-2" onClick={(e) => handleDelete(e)}>Delete</button>
      <button className="btn btn-warning p-2" onClick={(e) => handleEdit(e)}>Edit</button>
    </div>
  )
};

export default ButtonGroup;