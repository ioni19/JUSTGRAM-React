import React, { useState } from "react";
import "../Feed/Comment.scss";

const Comment = (props) => {
  const { commentArr, feedUniqueId }= props;

  return (
    <ul className="comment-text-box">
      {commentArr.map((comment) => {
        const { id, feedId, userId, content, createAt } = comment;
        if(feedUniqueId === feedId) {        
          return (
          <li key={id}>
            <span>{userId === undefined ? "justcode" : userId}</span>
            {content}
          </li>
        );}

      })}
    </ul>
  );
};

export default Comment;
