import React, { useState } from "react";
import Comment from "./Comment";
import "./Feed.scss";

const Feed = () => {
  const contents = [
    { id: 1, userId: "ioni_19", content: "힘들었다,,,", createAt: "1일 전" },
    { id: 2, userId: "bab5", content: "나 바보 아니다", createAt: "2일 전" },
    {
      id: 3,
      userId: "chacha",
      content: "오목 한 판 두시죠",
      createAt: "3일 전",
    },
  ];
  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState([
    {
      id: 0,
      userId: "justcode",
      content: "내가 사줄게 ㅋㅋㅋㅋ",
    },
    ...contents,
  ]);
  const [keyId, setKeyId] = useState(commentArr.length);
  const handleInput = (e) => {
    const { value } = e.target;
    setComment(value);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }

    const newComment = { id: keyId, content: comment };
    setComment("");
    setCommentArr((currentArr) => [...currentArr, newComment]);
    setKeyId(commentArr.length + 1);
  };
  return (
    <section className="feed-container">
      <div className="feed-whole-wrapper">
        <div className="feed-header-wrapper">
          <div className="profile-box">
            <img className="profile-img" src="https://url.kr/x18wb7" />
            <span className="profile-id">ioni_19</span>
          </div>
          <img
            className="menu-box"
            src="https://icon-library.com/images/three-dots-icon/three-dots-icon-9.jpg"
          />
        </div>
        <div className="feed-photo-wrapper">
          <img className="feed-photo" src="https://url.kr/vjio5c" />
        </div>
        <div className="feed-comment-wrapper">
          <div className="comment-icon-box">
            <div>
              <img
                style={{ width: "27px" }}
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img src="https://han.gl/jNeMM" />
              <img src="https://cdn-icons-png.flaticon.com/512/6165/6165369.png" />
            </div>
            <img className="bookmark-icon" src="https://han.gl/HHAjy" />
          </div>
          <div className="like-comment-box">
            <img className="like-profile-img" src="https://url.kr/bv54rq" />
            <div className="like-profile-text">
              <span>252_yewon</span>님 <span>외 100,022명</span>이 좋아합니다
            </div>
          </div>
          <div className="feed-text">
            <div className="bold-14px">ioni_19</div>
            <div className="feed-content">매옹이 키링 나 사줄 사람 없</div>
            <div className="plus-content">.... 더 보기</div>
          </div>
          <div className="numbers-of-comment"> 댓글 12개 모두 보기</div>
        </div>
        <Comment commentArr={commentArr} />
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
