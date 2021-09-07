const staticToken =
  "BQAOKC06aatBWZehHXRCThQA2IFUnOoyYfAmrqRfMxwJgV_I4i…HDX1v0vews_4GcnVfASwQMwCHn50huJDolZhkYmJJ7Y81e3YE";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove the static token after finishing developing
  // token: staticToken,
  token: null,
  discover_weekly: null,
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
