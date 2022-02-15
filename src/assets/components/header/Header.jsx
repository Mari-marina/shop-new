import s from "./Header.module.scss";

function Header() {
  return (
    <div className={s.Wrapper}>
      <div className={s.Wrap}>
        <img src="" alt="" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button className={s.buttonLeft}></button>
        <button className={s.buttonRight}></button>
        <img className={s.icon} src="" alt="" />
      </div>
      <img className={s.img} src="" alt="" />
    </div>
  );
}

export default Header;
