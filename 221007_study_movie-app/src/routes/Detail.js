import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    // console.log(json.data.movie);
    setData(json.data.movie);
    // setData(json.data.movie);
    setLoading(false);
  };

  // console.log(data);

  useEffect(() => {
    getMovie();
  }, []);

  // console.log(data);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <>
          <h1 className={styles.title}>{data.title_long}</h1>
          <h2 className={styles.desc}>{data.description_full}</h2>
        </>
      )}
    </div>
  );
}
