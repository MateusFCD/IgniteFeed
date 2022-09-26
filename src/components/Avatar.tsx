import styles from "./Avatar.module.css";

interface PropsAvatar {
  src: any;
  hasBorder?: boolean;
}

export function Avatar(props: PropsAvatar) {
  return <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} />;
}
