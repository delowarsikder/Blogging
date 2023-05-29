import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import { updatePostAsync } from "./postSlice";
import { redirectTo } from "../../components/Utils";

function PostEdit() {
  const dispatch = useDispatch<any>();
  const navigator = useNavigate();
  const { post } = useLocation().state;
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const updateHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      post: {
        id: post.id,
        title: editTitle,
        body: editBody,
      }
    }
    dispatch(updatePostAsync(formData));
    backToPosts();
  }

  useEffect(() => {
    setEditTitle(post.title);
    setEditBody(post.body);
  }, [post]);


  const backToPosts = (() => {
    //  redirectTo('/');
  });


  return (
    <div className='card mt-2'>
      <h1 className='card-header'>Post Form</h1>
      {/* {post.id} */}
      <div className='card-body'>
        <form>
          <input
            required
            className='form-control text-start mt-2'
            type="text"
            name="title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            required
            name="body"
            className="form-control text-start mt-2"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
        </form>
        <div className='card-footer'>
          <button type="button"
            className="btn btn-warning m-1"
            onClick={(e) => backToPosts()}>
            Cancel</button>

          <button
            type="button" className="btn btn-success m-1"
            onClick={(e) => updateHandler(e)}>Update</button>
        </div>

      </div>
    </div>
  )


}


export default PostEdit;


