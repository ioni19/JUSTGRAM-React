import React, { useState, useEffect } from "react";
import "../Feed/Comment.scss";

const Comment = (props) => {
  const { commentArr, feedUniqueId } = props;

  console.log("커멘트 컴포넌트", commentArr)

  return (
    <ul className="comment-text-box">
      {commentArr.map((comment) => {
        const { id, feedId, userId, content, createAt } = comment;
        if (feedUniqueId === feedId) {
          return (
            <li key={id}>
              <span>{userId}</span>
              {content}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Comment;
