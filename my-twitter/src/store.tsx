import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

// export interface IStore {
//   [index: number]: {
//     id: number;
//     content: string;
//     author: string;
//     avatar: string;
//   };
// }

export interface ITweet {
  author: string;
  avatar: string;
  content: string;
  id: number;
}

export interface IStore {
  tweets: ITweet[];
}

// export interface IReducer {
//   action: () => void;
// }

const initialState = {
  tweets: [
    {
      author: "JeffreyATW",
      avatar: "avatar.jpg",
      content: "You give love a bad name.",
      id: 2
    },
    {
      author: "JeffreyATW",
      avatar: "avatar.jpg",
      content: "Old McDonald had a farm.",
      id: 1
    },
    {
      author: "JeffreyATW",
      avatar: "avatar.jpg",
      content: "I'm a little teapot, short and stout.",
      id: 0
    }
  ]
};

function myReducer(state: IStore, action: any) {
  switch (action.type) {
    case "ADD_TWEET":
      return {
        tweets: [
          {
            author: "JeffreyATW",
            avatar: "avatar.jpg",
            content: action.text,
            id: state.tweets[0].id + 1
          },
          ...state.tweets
        ]
      };

    default:
      return state;
  }
}

// const reducer = ((state: any), (action: any)) => {
//   switch (action.type) {
//     case "ADD_TWEET":
//       return {
//         tweets: [
//           {
//             content: action.text,
//             author: "JeffreyATW",
//             avatar: "avatar.jpg",
//             time: "now",
//             id: state.tweets[0].id + 1
//           },
//           ...state.tweets
//         ]
//       };

//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  form: formReducer,
  reduce: myReducer
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  // reducer: reducer,
});

const store = createStore(rootReducer, initialState);

export default store;
