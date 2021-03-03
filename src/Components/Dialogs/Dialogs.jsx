import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Textarea } from "../common/FormControls/FormControls";
import DialogItem from "./DialogItem/DialogItem";
import dialogs from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  const addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  const dialogUsers = props.dialogsPage.dialogData.map((user) => (
    <DialogItem name={user.name} key={user.id} id={user.id} />
  ));

  const messageUsers = props.dialogsPage.messageData.map((message) => (
    <MessageItem
      message={message.text}
      stateclass={message.class}
      key={message.id}
    />
  ));

  return (
    <div className={dialogs.dialogs__content}>
      <div className={dialogs.users}>{dialogUsers}</div>
      <div className={dialogs.messages}>
        {messageUsers}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form className={dialogs.add} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength100]}
        name="newMessageBody"
        placeholder="Enter your message"
      />

      <button>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
