import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username : "ozgeozkaraa01",
            userImg: "https://pbs.twimg.com/profile_images/1416435456468729865/G578oM3C_400x400.jpg",
            img: "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "nice photo"
        },

        {
            id: "2",
            username : "owuzan",
            userImg: "https://pbs.twimg.com/profile_images/1485756918828347394/__4uCsSs_400x400.jpg",
            img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            caption: "new computer"
        }
    ]
  return (
    <div>
        {posts.map(post =>(
            <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}

    </div>
  )
}
