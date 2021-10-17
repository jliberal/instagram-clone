import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';
import { EMULTIHOP } from 'constants';
import postType from '../types/posts';
function Post(props: postType) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={props.userImage} alt={props.username} />
        <p className="flex-1 font-bold">{props.username}</p>
        <DotsHorizontalIcon className="h-5"/>
      </div>
      {/* Img */}
      <div>
        <img className="" src={props.postImage} alt={props.username} />
      </div>
      {/* Buttons */}    
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn"/>      
          <ChatIcon className="btn"/>
          <PaperAirplaneIcon className="btn"/>        
        </div>
        <BookmarkIcon className="btn"/>
      </div>  
      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{props.username}</span>
        {props.caption}
      </p>      
      {/* Comments */}      
      {/* Input box */}     
      <form className="flex items-center p-4" action="">
        <EmojiHappyIcon className="h-7"/>
        <input 
          type="text" 
          placeholder="Add a comment"
          className="border-none flex-1 focus:ring-0 outline-none"
        />  
        <button>Post</button>
      </form> 
    </div>
  )
}


export default Post
