import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/Posts/postSlice'

const Posts = () => {
    const dispatch = useDispatch()
    const handleGetPosts = async () => {
        await dispatch(getPosts())
    }
    const posts = useSelector(state => state.post.posts)
    return (
        <div>
            <button
                onClick={() => handleGetPosts()}
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {posts?.length && posts.slice(0, 4).map(post => (
                <PostItem key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Posts
