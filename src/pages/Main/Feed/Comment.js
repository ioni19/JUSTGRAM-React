import React, { useState } from "react";
import "../Feed/Comment.scss";

const Comment = (props) => {
  const commentArr = props.commentArr;
  return (
      <ul className="comment-text-box">
        {commentArr.map((comment) => {
          const { id, userId, content, createAt } = comment;
          return (
            <li key={id}>
              <span>{userId === undefined ? "justcode" : userId}</span>
              {content}
            </li>
          );
        })}
      </ul>
  );
};

export default Comment;
