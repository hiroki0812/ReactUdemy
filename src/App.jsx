import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>追加</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>ああああ</li>
            <button>追加</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>追加</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
    </>
  );
};
