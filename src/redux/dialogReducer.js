const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogData: [
    {
      name: "Holly",
      id: 1,
    },
    {
      name: "Julia",
      id: 2,
    },
    {
      name: "Victoria",
      id: 3,
    },
    {
      name: "Alan",
      id: 4,
    },
    {
      name: "Seth",
      id: 5,
    },
    {
      name: "Michael",
      id: 6,
    },
    {
      name: "Suzan",
      id: 7,
    },
    {
      name: "Vi",
      id: 8,
    },
    {
      name: "Chan",
      id: 9,
    },
    {
      name: "Sibyla",
      id: 10,
    },
  ],
  messageData: [
    {
      text: "Hi",
      class: "guest",
      id: 1,
    },
    {
      text: "Hello",
      class: "my__message",
      id: 2,
    },
    {
      text: "How r u",
      class: "guest",
      id: 3,
    },
    {
      text: "Fine",
      class: "my__message",
      id: 4,
    },
    {
      text: "And u?",
      class: "my__message",
      id: 5,
    },
    {
      text: "Same",
      class: "guest",
      id: 6,
    },
    {
      text: "Are u heard last news, about Michael",
      class: "guest",
      id: 7,
    },
    {
      text: "No, what happend",
      class: "my__message",
      id: 8,
    },
  ],
};

function dialogReducer(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  function _addMessage() {
    let newMessage = {
      text: action.newMessageBody,
      class: "my__message",
      id: 10,
    };
    stateCopy.messageData.push(newMessage);
  }

  function _addNewMessageText(newMessage) {
    stateCopy.newMessageText = newMessage;
  }

  switch (action.type) {
    case ADD_MESSAGE:
      _addMessage();
      return stateCopy;

    default:
      return state;
  }
}

export function addMessageCreateAction(newMessageBody) {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
}

export default dialogReducer;
