import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import "./Feed.scss";

const Feed = ({ feed }) => {
  const { id, userId, profileImg, photoUrl, content, numOfComment } = feed;

  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState([]);
  const [keyId, setKeyId] = useState(commentArr.length);

  useEffect(() => {
    fetch("http://localhost:3001/data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        setCommentArr(data);
      });
  }, []);

  const handleInput = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    console.log(e);
    const newComment = {
      id: keyId,
      feedId: id,
      userId: "justcode",
      content: comment,
    };
    setComment("");
    setCommentArr((currentArr) => [...currentArr, newComment]);
    setKeyId(commentArr.length + 1);
  };

  console.log("피드 커멘트", commentArr);
  return (
    <section className="feed-container">
      <div className="feed-whole-wrapper">
        <div className="feed-header-wrapper">
          <div className="profile-box">
            <img className="profile-img" alt="profile-img" src={profileImg} />
            <span className="profile-id"> {userId} </span>
          </div>
          <img className="menu-icon" alt="menu-icon" src="img/menuicon.png" />
        </div>
        <div className="feed-photo-wrapper">
          <img className="feed-photo" alt="feed" src={photoUrl} />
        </div>
        <div className="feed-comment-wrapper">
          <div className="comment-icon-box">
            <div>
              <img
                style={{ width: "27px" }}
                alt="heart-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img alt="comment-icon" src="https://han.gl/jNeMM" />
              <img
                alt="DM-icon"
                src="https://cdn-icons-png.flaticon.com/512/6165/6165369.png"
              />
            </div>
            <img
              className="bookmark-icon"
              alt="bookmark-icon"
              src="https://han.gl/HHAjy"
            />
          </div>
          <div className="like-comment-box">
            <img
              className="like-profile-img"
              alt="profile-img"
              src="https://url.kr/bv54rq"
            />
            <div className="like-profile-text">
              <span>252_yewon</span>님 <span>외 100,022명</span>이 좋아합니다
            </div>
          </div>
          <div className="feed-text">
            <div className="bold-14px">{userId}</div>
            <div className="feed-content">{content}</div>
            <div className="plus-content">.... 더 보기</div>
          </div>
          <div className="numbers-of-comment">
            댓글 {numOfComment}개 모두 보기
          </div>
        </div>
        <Comment commentArr={commentArr} feedUniqueId={id} />
        <p className="minute">42분 전</p>
        <form className="comment-input" onSubmit={onSubmit}>
          <input className="upload-id-input" type="text" placeholder="아이디" />
          <input
            className="upload-comment-input"
            onChange={handleInput}
            value={comment}
            type="text"
            placeholder="댓글 달기..."
          />
          <button
            className="upload-btn"
            style={{ opacity: comment !== "" ? 1 : 0.5 }}
          >
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feed;
