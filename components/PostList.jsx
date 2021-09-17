import OnePost from '../components/OnePost.jsx'
import FetchPost from '../components/FetchPost.jsx'
import { useState } from 'react'


export default function UserList({ posts: propsPosts }) {
  const [statePostsIds, setPosts] = useState([]);
  const newNmbers = [...Array(10).keys()].map(x=>x+1 + propsPosts.length + statePostsIds.length);
  return (<div className="post-list">
    { propsPosts.map(post => <OnePost post={post} />)}
    { statePostsIds.map(id => <FetchPost id={id} />)}
    <button onClick={() => setPosts(old => [...old, ...newNmbers])} >Next 10 posts</button>
  </div>)
}