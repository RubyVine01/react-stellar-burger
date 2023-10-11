import styles from "./nav-link.module.css";

function NavLink({ icon, btnName, navLink, isActiveText}) {
console.log (isActiveText)
console.log (icon)
  return (
    <a href={navLink} className={`${styles.link} pt-4 pb-4 pr-5 pl-5 `}>
      {icon}
      <p className={`${styles.name} ${isActiveText} text_type_main-default pl-2`}> {btnName} </p>
    </a>
  );
}

export default NavLink;
