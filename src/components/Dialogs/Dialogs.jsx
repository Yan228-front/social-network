import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter new massage'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const DialogsForm = (props) => {
//   let state = props.dialogsPage;

//   let dialogsElements = state.dialogs.map((d) => (
//     <DialogItem name={d.name} key={d.id} id={d.id} />
//   ));
//   let messagesElements = state.messages.map((m) => (
//     <Message message={m.message} key={m.id} />
//   ));
//   let newMessageBody = state.newMessageBody;

//   let onSendMessageClick = () => {
//     props.sendMessage();
//   };

//   let onNewMessageChange = (e) => {
//     let body = e.target.value;
//     props.updateNewMessageBody(body);
//   };

//   if (!props.isAuth) {
//     return <Redirect to={"/login"} />;
//   }

//   const formik = useFormik({
//     initialValues: {
//       message: "",
//     },
//     onSubmit: (values) => {
//       //alert(JSON.stringify(values, null, 2));
//       //<div className={classes.posts}>{postsElement}</div>
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className={classes.dialogs}>
//         <div className={classes.dialogsItems}>{dialogsElements}</div>

//         <div className={classes.messages}>
//           <div>{messagesElements}</div>
//           <div>
//             <div>
//               <textarea
//                 name='message'
//                 type='text'
//                 value={newMessageBody}
//                 onChange={onNewMessageChange}
//                 placeholder='Enter new massage'
//               />
//             </div>
//             <div>
//               <button onClick={onSendMessageClick}>Send</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

export default Dialogs;
