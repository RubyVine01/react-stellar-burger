import styles from "./nav-link.module.css";

function NavLink({ icon, navLink, linkName }) {
  const typeIcon = icon.props.type;
  return (
    <a href={navLink} className={`${styles.link} pt-4 pb-4 pr-5 pl-5 `}>
      {icon}
      <p
        className={`${styles.name} ${
          typeIcon === "primary" ? styles.name_active : styles.name_default
        } text_type_main-default pl-2`}
      >
        {linkName}
      </p>
    </a>
  );
}

export default NavLink;
