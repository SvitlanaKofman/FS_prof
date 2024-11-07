import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// импорт функции компонента
// import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Homework04 from "./homeworks/homework04/Homework04";
import Lesson05 from "./lessons/lesson05/Lesson05";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // этот пустой тег - это react фрагмент
  // мы используем его для того чтобы по правилам react
  // обернуть несколько дочерних компонентов в родитель
  <>
  {/* <Lesson01/> */}
    {/* вызов react компонента */}
    {/* самозакрывающийся тег с именем функции-компонента */}
    {/* не забудьте убедиться что у вас отработал импорт */}
    {/* <Lesson02 /> */}
    {/* <Lesson03/> */}
    {/* <Homework03/> */}
    {/* <Lesson04/> */}
    {/* <Homework04/> */}
    <Lesson05/>
    
  </>
);
