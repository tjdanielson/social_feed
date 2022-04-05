import React, {useState, useEffect} from 'react';
import './LikeDislikePost.css'

const LikeDislikePost = (props) => {

    const [likeActive, setLikeActive] = useState(false);

    const [likeButtonClass, setLikeButtonClass] = useState('inactive');
    const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive');

    function handleLikeClick() {
        if(props.post.like === false){
            props.post.like = true;
            setLikeActive(true);
            props.post.dislike = false;
        } else {
            props.post.like = false;
            setLikeActive(false);
        }
    }

    function handleDislikeClick() {
        if(props.post.dislike === false){
            props.post.dislike = true;
            props.post.like = false;
        } else {
            props.post.dislike = false;
        }
    }

    useEffect(() => {
        if(props.post.like === false){
            setLikeButtonClass('inactive')
        } else {
            setLikeButtonClass('active')
        }
    }, [likeActive])

    useEffect(() => {
        if(props.post.dislike === false){
            setDislikeButtonClass('inactive')
        } else {
            setDislikeButtonClass('active')
        }
    }, [props.post.dislike])

    debugger;

    // function handleLikeClick(){
    //     if(likeButtonClass === 'inactive'){
    //         setLikeButtonClass('like-active')
    //         setDislikeButtonClass('inactive')
    //     } else {
    //         setLikeButtonClass('inactive')
    //     }
    // }

    // function handleDislikeClick(){
    //     if(dislikeButtonClass === 'inactive'){
    //         setDislikeButtonClass('dislike-active')
    //         setLikeButtonClass('inactive')
    //     } else {
    //         setDislikeButtonClass('inactive')
    //     }
    // }
    

    return (
        <div className="button-wrapper">
            <div className='button-img'>
                <button className={likeButtonClass} onClick={handleLikeClick}>Like</button>
            </div>
            <div>
                <button className={dislikeButtonClass} onClick={handleDislikeClick}>Dislike</button>
            </div>
        </div>

    )
}

export default LikeDislikePost;


