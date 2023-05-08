import React, { useState } from "react";

function PostEdit() {
  const [editTitle, setEditTitle] = useState('');
  const [editbody, setEditBody] = useState('');

  const editableTitle = <input
    type="text"
    className="form-control text-start"
    value={editTitle}
    onChange={(e) => setEditTitle(e.target.value)}
  />

  return (
    <div>PostEdit</div>
  );
}


export default PostEdit;