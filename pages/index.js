import useSWR from "swr";
import fetcher from "../lib/fetcher";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data } = useSWR("https://bank.hackclub.com/stats", fetcher);
  return (
    <div className={styles.container}>
      <p>raised: {data?.raised}</p>
    </div>
  );
}
