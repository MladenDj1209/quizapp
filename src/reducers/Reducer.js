const Reducer=(state, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload
      };
    case 'ADD_POST': 
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case 'SET_ERROR': 
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
    }
};

export default Reducer;
