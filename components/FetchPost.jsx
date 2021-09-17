import {useState,useEffect} from 'react'
import OnePost from '../components/OnePost.jsx'

export default function FetchPost({ id }) {
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchData() {
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
      if (!res.ok) throw(new Error(res.status))
      let p = await res.json();
      setPost(p);
    } catch(err) {
      setError(err);
      }
}
fetchData();
},[]); //// Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  if (error)
    return <div>Ошибка: {error.message}</div>
  else if (post?.id)
    return <OnePost post={post} />
  else
    return <div className="spinner" />
}
