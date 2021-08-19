export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove the static token after finishing developing
  token:
    "BQAOKC06aatBWZehHXRCThQA2IFUnOoyYfAmrqRfMxwJgV_I4i…HDX1v0vews_4GcnVfASwQMwCHn50huJDolZhkYmJJ7Y81e3YE",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
