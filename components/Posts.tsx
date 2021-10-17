import React from 'react'
import Post from '../components/Post'
import postType from '../types/posts';


//Dummy data - until firebase
const posts:postType[] = [
  {
    id: 111,
    username: "Johnplex United",
    userImage: "https://cdn.fakercloud.com/avatars/logorado_128.jpg",
    postImage: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80",
    caption: "Data de prueba para poder probar frontend"
  },
  {
    id: 222,
    username: "Chilantropos unidos",
    userImage: "https://cdn.fakercloud.com/avatars/jarsen_128.jpg",
    postImage: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    caption: "Cualquier vaina que chilín postea"
  }
];

function Posts() {
  return (
    <div>
      {posts.map((post) =>(
        <Post key={post.id} id={post.id} username={post.username} userImage={post.userImage} postImage={post.postImage} caption={post.caption}/>
      ))}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  )
}

export default Posts
