import React, {useState, useEffect} from 'react';

const LikeDislikePost = (props) => {
    
    const [like, setLike] = useState();
    const [dislike, setDislike] = useState();
    var likeimg = './assets/thumbsup_gray.png'
    var dislikeimg;
  
    useEffect(() => {
        if(like) {
            likeimg = './assets/thumbsup_green.png'
            console.log('useeffectworked')
        } else {
            likeimg = './assets/thumbsup_gray.png'
        }
    },[like])

    // useEffect(() => {
    //     dislike ? dislikeimg = './assets/thumbsdown_red.png' : dislikeimg = './assets/thumbsdown_gray.png'
    // },[like])

    function onClickLike() {
        if(like) {
            setLike(false)
            console.log('like false')
            likeimg = './assets/thumbsup_gray.png'
        } else {
            setLike(true)
            likeimg = './assets/thumbsup_green.png'
            setDislike(false)
            dislikeimg = './assets/thumbsdown_red.png'
            console.log('like true')
        }
    }

    function onClickDislike() {
        if(dislike) {
            setDislike(false)
        } else {
            setDislike(true)
            setLike(false)
        }
    }

    return (
        <div>
            <div>
                <button onClick={onClickLike}>like</button> 
                <img src={likeimg}/>
            </div>
            <div>
                <button onClick={onClickDislike}>dislike</button> 
            </div>
        </div>
    )
}

export default LikeDislikePost;


