const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...action.payload,
        logged: true,
      };

    case 'logout':
      return {
        logged: false,
      };

    default:
      break;
  }
};

export default authReducer;
