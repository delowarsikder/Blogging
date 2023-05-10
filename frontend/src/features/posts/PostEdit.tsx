import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function PostEdit() {
  const [editTitle, setEditTitle] = useState("");
  const [editbody, setEditBody] = useState("");
  const location = useLocation();
  let { props } = location.state;

  const updateHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      post: {
        id: props.post.id,
        title: editTitle,
        body: editableBody,
      }
    }
  }

  const editableTitle = <input
    type="text"
    className="form-control text-start"
    value={editTitle}
    onChange={(e) => setEditTitle(e.target.value)}
  />

  const editableBody = <input
    type="text"
    className="form-control text-start"
    value={editbody}
    onChange={(e) => setEditBody(e.target.value)}
  />
  const updateButton = <button
    type="button" className="form-control btn btn-success"
    onClick={(e) => updateHandler(e)}>Update</button>

  return (
    <div>
      <div>PostEdit</div>
      {editableTitle}
      {editableBody}
    </div>
  );
}


export default PostEdit;


