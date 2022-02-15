import s from "./Description.module.scss";

function Description(props) {
  return <p className={s.text}>{props.text}</p>;
}

export default Description;
