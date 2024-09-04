import Introduction from './introduction/Introduction';
import styles from './home.module.scss';

export default function Home() {
  return (
    <section className={styles.home}>
      <Introduction></Introduction>
    </section>
  );
}