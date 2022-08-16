import React from "react";


const Main = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="/style/main.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <title>Document</title>
      </head>
      <body>
        <nav className="nav-container flex">
          <div className="left-wrapper">
            <span className="logo-text">Justgram</span>
          </div>
          <div className="center-wrapper">
            <div className="search-box flex">
              <img
                className="search-icon"
                src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/search-512.png"
              />
              <input className="search-input" type="text" placeholder="검색" />
            </div>
          </div>
          <div className="right-wrapper">
            <div className="icon-box">
              <img
                className="expore-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                className="heart-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="my-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </div>
        </nav>
        <section className="feed-container">
          <div className="feed-whole-wrapper">
            <div className="feed-header-wrapper flex">
              <div className="profile-box flex">
                <img
                  className="profile-img"
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyMjA3MjhfMTA1/MDAxNjU5MDAzMTUxNzI0._O2K7m2uvJuDfr9ZZwFMwd-2HfguxBbVTKWWkSkvi94g.lqIEX_8Jn9GNB13B81tyDL3wZxQu7ycGf0BLXlYxo-gg.PNG.susstore/profileImage2.png/profileImage2.png?type=w161"
                />
                <span className="profile-id">ioni_19</span>
              </div>
              <img
                className="menu-box"
                src="https://icon-library.com/images/three-dots-icon/three-dots-icon-9.jpg"
              />
            </div>
            <div className="feed-photo-wrapper">
              <img
                className="feed-photo"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220119_220%2F16425684474684rYsJ_JPEG%2F43704290164195289_1791111381.jpg&type=sc960_832"
              />
            </div>
            <div className="feed-comment-wrapper">
              <div className="comment-icon-box flex">
                <div className="icon-box flex">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_wv7iMNTpOFBZ0OlSu9D3Uoo050kPt409-j8BlO_caT81Wte9HJKm0Qbo031clyHDWo&usqp=CAU"
                  />
                  <img src="https://cdn-icons-png.flaticon.com/512/6165/6165369.png" />
                </div>
                <img className="bookmark-icon" src="https://cdn1.iconfinder.com/data/icons/instagram-feature-outline/32/icon_instagram-27-512.png" />
              </div>
              <div className="like-comment-box flex">
                <img
                  className="like-profile-img"
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyMTA2MDJfMjY4/MDAxNjIyNjI2NDYzMzEx.bu64sCMgQr-nI8oq3mrH792iR6sUMGWP78YJSBPpcmsg.i0Ifrbnzy2R2DHa2ndL9eYmy3SwXen9pgTYptpF0NwIg.PNG.sher_lock0106/profileImage.png?type=w161"
                />
                <div className="like-profile-text">
                  <span>252_yewon</span>님 <span>외 100,022명</span>이
                  좋아합니다
                </div>
              </div>
              <div className="feed-text flex">
                <div className="bold-14px">ioni_19</div>
                <div className="feed-content">매옹이 키링 나 사줄 사람 없</div>
                <div className="plus-content">.... 더 보기</div>
              </div>
              <div className="numbers-of-comment"> 댓글 12개 모두 보기 
              </div>
              <ul className="comment-text-box"></ul>
              <p className="minute">42분 전</p>
              <div className="comment-input" flex>
                <input
                  className="upload-id-input"
                  type="text"
                  placeholder="아이디"
                />
                <input
                  className="upload-comment-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="upload-btn">게시</button>
              </div>
            </div>
          </div>
        </section>
        <section className="feed-container">
          <div className="feed-whole-wrapper">
            <div className="feed-header-wrapper flex">
              <div className="profile-box flex">
                <img
                  className="profile-img"
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyMjA3MjhfMTA1/MDAxNjU5MDAzMTUxNzI0._O2K7m2uvJuDfr9ZZwFMwd-2HfguxBbVTKWWkSkvi94g.lqIEX_8Jn9GNB13B81tyDL3wZxQu7ycGf0BLXlYxo-gg.PNG.susstore/profileImage2.png/profileImage2.png?type=w161"
                />
                <span className="profile-id">ioni_19</span>
              </div>
              <img
                className="menu-box"
                src="https://icon-library.com/images/three-dots-icon/three-dots-icon-9.jpg"
              />
            </div>
            <div className="feed-photo-wrapper">
              <img
                className="feed-photo"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220119_220%2F16425684474684rYsJ_JPEG%2F43704290164195289_1791111381.jpg&type=sc960_832"
              />
            </div>
            <div className="feed-comment-wrapper">
              <div className="comment-icon-box flex">
                <div className="icon-box flex">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_wv7iMNTpOFBZ0OlSu9D3Uoo050kPt409-j8BlO_caT81Wte9HJKm0Qbo031clyHDWo&usqp=CAU"
                  />
                  <img src="https://cdn-icons-png.flaticon.com/512/6165/6165369.png" />
                </div>
                <img className="bookmark-icon" src="https://cdn1.iconfinder.com/data/icons/instagram-feature-outline/32/icon_instagram-27-512.png" />
              </div>
              <div className="like-comment-box flex">
                <img
                  className="like-profile-img"
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyMTA2MDJfMjY4/MDAxNjIyNjI2NDYzMzEx.bu64sCMgQr-nI8oq3mrH792iR6sUMGWP78YJSBPpcmsg.i0Ifrbnzy2R2DHa2ndL9eYmy3SwXen9pgTYptpF0NwIg.PNG.sher_lock0106/profileImage.png?type=w161"
                />
                <div className="like-profile-text">
                  <span>252_yewon</span>님 <span>외 100,022명</span>이
                  좋아합니다
                </div>
              </div>
              <div className="feed-text flex">
                <div className="bold-14px">ioni_19</div>
                <div className="feed-content">매옹이 키링 나 사줄 사람 없</div>
                <div className="plus-content">.... 더 보기</div>
              </div>
              <div className="numbers-of-comment"> 댓글 12개 모두 보기 
              </div>
              <ul className="comment-text-box"></ul>
              <p className="minute">42분 전</p>
              <div className="comment-input" flex>
                <input
                  className="upload-id-input"
                  type="text"
                  placeholder="아이디"
                />
                <input
                  className="upload-comment-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="upload-btn">게시</button>
              </div>
            </div>
          </div>
        </section>
        <section className="feed-container">
          <div className="feed-whole-wrapper">
            <div className="feed-header-wrapper flex">
              <div className="profile-box flex">
                <img
                  className="profile-img"
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyMjA3MjhfMTA1/MDAxNjU5MDAzMTUxNzI0._O2K7m2uvJuDfr9ZZwFMwd-2HfguxBbVTKWWkSkvi94g.lqIEX_8Jn9GNB13B81tyDL3wZxQu7ycGf0BLXlYxo-gg.PNG.susstore/profileImage2.png/profileImage2.png?type=w161"
                />
                <span className="profile-id">ioni_19</span>
              </div>
              <img
                className="menu-box"
                src="https://icon-library.com/images/three-dots-icon/three-dots-icon-9.jpg"
              />
            </div>
            <div className="feed-photo-wrapper">
              <img
                className="feed-photo"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220119_220%2F16425684474684rYsJ_JPEG%2F43704290164195289_1791111381.jpg&type=sc960_832"
              />
            </div>
            <div className="feed-comment-wrapper">
              <div className="comment-icon-box flex">
                <div className="icon-box flex">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_wv7iMNTpOFBZ0OlSu9D3Uoo050kPt409-j8BlO_caT81Wte9HJKm0Qbo031clyHDWo&usqp=CAU"
                  />
                  <img src="https://cdn-icons-png.flaticon.com/512/6165/6165369.png" />
                </div>
                <img className="bookmark-icon" src="https://cdn1.iconfinder.com/data/icons/instagram-feature-outline/32/icon_instagram-27-512.png" />
              </div>
              <div className="like-comment-box flex">
                <img
                  className="like-profile-img"
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyMTA2MDJfMjY4/MDAxNjIyNjI2NDYzMzEx.bu64sCMgQr-nI8oq3mrH792iR6sUMGWP78YJSBPpcmsg.i0Ifrbnzy2R2DHa2ndL9eYmy3SwXen9pgTYptpF0NwIg.PNG.sher_lock0106/profileImage.png?type=w161"
                />
                <div className="like-profile-text">
                  <span>252_yewon</span>님 <span>외 100,022명</span>이
                  좋아합니다
                </div>
              </div>
              <div className="feed-text flex">
                <div className="bold-14px">ioni_19</div>
                <div className="feed-content">매옹이 키링 나 사줄 사람 없</div>
                <div className="plus-content">.... 더 보기</div>
              </div>
              <div className="numbers-of-comment"> 댓글 12개 모두 보기 
              </div>
              <ul className="comment-text-box"></ul>
              <p className="minute">42분 전</p>
              <div className="comment-input" flex>
                <input
                  className="upload-id-input"
                  type="text"
                  placeholder="아이디"
                />
                <input
                  className="upload-comment-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="upload-btn">게시</button>
              </div>
            </div>
          </div>
        </section>
        <script src="/js/main.js"></script>
      </body>
    </>
  );
};

export default Main;
