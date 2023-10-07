import { useState } from "react";

const Comments = () => {
  const [active, setActive] = useState<boolean>(false);

  const activeForm = () => {
    setActive(true);
  };

  const noActiveForm = () => {
    setActive(false);
  };

  return (
    <div className="comments">
      <form className={`flex align-center space-between ${active && "active"}`}>
        <div className="input-group flex align-center gap-10">
          <img src="/logo.png" className="user-image" alt="userImage" />
          <input
            onFocus={activeForm}
            onBlur={noActiveForm}
            type="text"
            placeholder="add a comment"
          />
        </div>
        <button>post</button>
      </form>

      <div className="comments-head">
        <p>1 comment</p>
      </div>

      <div className="comment-box">
        <div className="comment-box-head flex gap-15">
          <img src="/logo.png" className="user-image" alt="userImage" />

          <div className="comment-body">
            <p className="username">
              kareem roshdy
              <span className="duration"> · 2 months ago</span>
            </p>

            <p className="comment-text">good movie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
