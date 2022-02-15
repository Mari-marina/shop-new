import s from "./CardProduct.module.scss";
import Title from "../../title/Title";
import Description from "../../description/Description";

function CardProduct() {
  return (
    <div className={s.Wrapper}>
      <img src="" alt="" />
      <Title title="Ontario Liberal leadership" />
      <Description text="Hello" />
    </div>
  );
}

export default CardProduct;
