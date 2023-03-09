export const addUser = (user) => {
  console.log("here")
    return {
      type: 'ADD_USER',
      payload: user,
    };
  };


  export const deleteUser = (user) => {
    return {
      type: 'DELETE_USER',
      payload: user,
    };
  };


  export const updateUser = (user)=> {
    return {
        type : 'UPDATE_USER',
        payload: user
    }
  }

  // export const searchUser = (query)=> {
  //   return {
  //       type : 'SEARCH_USER',
  //       payload: query
  //   }
  // }