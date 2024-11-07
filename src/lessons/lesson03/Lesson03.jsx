import MyButton from "../../components/myButton/MyButton";

function Lesson03() {
  const handleClick = () => {
    console.log("click!");
  };
  const handleSubmit = () => {
    console.log("submit!");
  };
  const handleReset = () => {
    console.log("reset!");
  };
  return (
    <div className="lesson-conteiner">
      <h2>Lesson 03</h2>
      <p>React props</p>
      <p>Мы хотим научится передавать в компонент разные данные</p>
      <div>
        <MyButton  myType={"button"} text={"Нажми меня!"} func={handleClick} isDanger={true} />
        <MyButton  myType={"submit"} text={"Submit"} func={handleSubmit} isDanger={false} />
        <MyButton myType={"reset"}text={"Reset"} func={handleReset} isDanger={false} />
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson03;
