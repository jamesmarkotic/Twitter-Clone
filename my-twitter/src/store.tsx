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

export interface IStore {
  tweets: [
    {
      id: number;
      content: string;
      author: string;
      avatar: string;
    }
  ];
}

// export interface IReducer {
//   action: () => void;
// }

const initialState = {
  tweets: [
    {
      id: 2,
      content: "You give love a bad name.",
      author: "JeffreyATW",
      avatar: "avatar.jpg"
    },
    {
      id: 1,
      content: "Old McDonald had a farm.",
      author: "JeffreyATW",
      avatar: "avatar.jpg"
    },
    {
      id: 0,
      content: "I'm a little teapot, short and stout.",
      author: "JeffreyATW",
      avatar: "avatar.jpg"
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

const store = createStore<any, any, any, any>(rootReducer, initialState);

export default store;
