const redux = require("redux");

const createStore = redux.createStore;
const user = [
  {
    owner: "Tony stark",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111
  },
  {
    owner: "Captain America",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222
  }
];

const initialState = {
  counter: 0,
  users: []
};

const INC_COUNT = "INC_COUNT";
const DEC_COUNT = "DEC_COUNT";
const ADD_COUNT = "ADD_COUNT";
const ADD_USER = "ADD_USER";

const reducer = (state = initialState, action) => {
  if (action.type === INC_COUNT) {
    return {
      ...state,
      counter: state.counter + 1
      // user :
    };
  }
  if (action.type === ADD_COUNT) {
    // console.log(action)
    return {
      ...state,
      counter: state.counter + action.value
      // user :
    };
  }
  if (action.type === ADD_USER) {
    // console.log(action)
    // state.users.push(action.value);
    return {
      ...state,
      users:action.value
      // user :
    };
  }
};

const store = createStore(reducer);

let state;
store.subscribe(() => {
  console.log("state", store.getState());
  state = store.getState()
});

// store.dispatch ({type: INC_COUNT})
// store.dispatch ({type: ADD_COUNT, value: 2})
store.dispatch({ type: ADD_USER, value: user });
// store.dispatch({ type: ADD_USER, value: user2 });
// store.dispatch({ type: ADD_USER, value: user2 });
// store.dispatch ({type: INC_COUNT})
console.log(state)
console.log(state.users[0])

