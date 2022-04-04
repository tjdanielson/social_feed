import React, {useState, useEffect} from 'react';
import './LikeDislikePost.css'

const LikeDislikePost = (props) => {

    const [likeButtonClass, setLikeButtonClass] = useState('inactive');
    const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive');

    function handleLikeClick(){
        if(likeButtonClass === 'inactive'){
            setLikeButtonClass('like-active')
            setDislikeButtonClass('inactive')
        } else {
            setLikeButtonClass('inactive')
        }
    }

    function handleDislikeClick(){
        if(dislikeButtonClass === 'inactive'){
            setDislikeButtonClass('dislike-active')
            setLikeButtonClass('inactive')
        } else {
            setDislikeButtonClass('inactive')
        }
    }
    

    return (
        <div>
            <div>
                <button className={likeButtonClass} onClick={handleLikeClick}>Like</button>
            </div>
            <div>
                <button className={dislikeButtonClass} onClick={handleDislikeClick}>Dislike</button>
            </div>
        </div>

    )
}

export default LikeDislikePost;


