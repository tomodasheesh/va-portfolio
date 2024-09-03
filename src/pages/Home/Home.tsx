import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_bg_image} />
      
      <div className={styles.home_text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio aliquam autem, quisquam, asperiores tempore ex molestias ut voluptates aperiam, quas facere deleniti! Nihil esse distinctio eligendi dignissimos voluptates eaque.
      </div>
    </div>
  );
}