// import { Bookmark } from "../interfaces";
import {
  FETCH_LINKS_BEGIN,
  FETCH_LINKS_SUCCESS,
  FETCH_LINKS_FAILURE
} from "../actions";

const initialState = {
  title: "Initial State",
  children: [
    {
      guid: "OwPXyxBt7K2o",
      title: "talks to watch",
      children: [
        {
          guid: "IFI70vGC7Rlz",
          title: "General",
          children: [
            {
              guid: "b98dms6IKL5o",
              title: "Awesome Talks",
              uri: "https://awesometalks.party/"
            }
          ]
        }
      ]
    }
  ]
};

export default function linkReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LINKS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_LINKS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        children: action.payload.children
      };

    case FETCH_LINKS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        children: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
