import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__connect">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <button>Remove</button>
      </div>
    </div>
  );
};

export default PostItem;