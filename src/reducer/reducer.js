const initialState = {
    users: [],
    deletedUsers: [],
    // filter:false,
    // filterresults:[]
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload.id),
          // deletedUsers: [...state.deletedUsers, action.payload],
        };
        // case 'SEARCH_USER':
        //   let filterusers = []
        //   if(action.payload !== '') {
        //     filterusers =state.users.filter((user)=>user.name == action.payload || user.email == action.payload || user.phone == action.payload )
        //   }
        //   else {
        //     filterusers=[...state.users]
        //   }
        //   return {
        //     ...state,
        //     filterresults:filterusers,
        //     filter:true

        //   };
      default:
        return state;
    }
  };
  
  export default userReducer;