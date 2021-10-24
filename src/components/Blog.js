import React, {useEffect, useContext} from 'react';
import { Context } from '../store/Store';
import Post from './Post';
import axios from 'axios';

const Blog = () => {
  const[state, dispatch] = useContext(Context);

  useEffect(() => {
    debugger
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        const postData = response.data;
        dispatch({type: 'GET_POSTS', payload: postData})
        console.log(state.questions)
      })
      .catch(error => {
        dispatch({type: 'SET_ERROR', payload: error})
      })
  }, []);

  let posts = <p>Loading posts...</p>

  if(state.error) <p>Something went wrong! <span>{state.error}</span></p>

  if(!state.error && state.posts) {
    posts = state.posts.map(post => {
      return <Post post = {post}/>
    })
  }

  return (
    posts
);

}


export default Blog;