import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [comleteTodos, setCompleteTodos] = useState(["うううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {incomleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>追加</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {comleteTodos.map((todo) => {
            return (
              <div key={todo}className="list-row">
                <li>iiii</li>
                <button>追加</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
