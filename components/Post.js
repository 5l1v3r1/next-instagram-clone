import React, { useState } from 'react';
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon} from '@heroicons/react/outline';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { useSession } from 'next-auth/react';
import {db} from "../firebase";

export default function Post({img, userImg, caption, username, id}) {
  const {data: session} = useSession();
  const [comment, setComment] = useState("")
  async function sendComment(event){
    event.preventDefault();
    const commentToSend = comment;
    setComment("")
    await addDoc(collection(db, "posts", id, "comments"),{
      comment: commentToSend,
      username:session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className='bg-white my-7 border rounded-md'>
        {/* Post Header */}
        

        <div className='flex items-center p-5'>
            <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username}/>
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>

        </div>
        {/* Post Image */}
        <img className='object-cover w-full' src={img} alt='' />

        {/* Post Buttons */}
        {session && (
          <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
              <HeartIcon className='btn'/>
              <ChatIcon className='btn' />


          </div>
          <BookmarkIcon className='btn'/>
      </div>

        )}
        
        {/* Post comments */}
        <p className='p-5 truncate'><span className='mr-3 font-bold '>{username}</span>{caption}</p>
        
        {/* Post input box */}
        {session && (
          <form className='flex items-center p-5'>
          <EmojiHappyIcon className='h-8'/>
          <input
          value={comment}
          onChange={(event)=>setComment(event.target.value)}
           className="border-none flex-1 focus:ring-0"
           type="text"
            placeholder="Yorumunu yaz.."/>
          <button type='submit' onClick={sendComment} disabled={!comment.trim()} className='text-blue-500 font-bold disabled:text-blue-200'>Gönderi</button>
        </form>

        )}

        


    </div>
  );
}
