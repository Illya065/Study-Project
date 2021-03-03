import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormControls/FormControls";
import mypost from "./MyPosts.module.css";
import Post from "./Post/Post";

class MyPosts extends React.PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextProps !== this.props || nextState !== this.state;
  //   }

  render() {
    const addNewPost = (values) => {
      this.props.addPost(values.postText);
    };

    const postsElement = this.props.profilePage.postsData.map((post) => (
      <Post text={post.text} likes={post.likes} key={post.id} />
    ));

    return (
      <div className={mypost.posts}>
        <div className={mypost.posts__content}>
          <PostFormRedux onSubmit={addNewPost} />
          <div className={mypost.posts__list}>{postsElement}</div>
        </div>
      </div>
    );
  }
}

let maxLength10 = maxLengthCreator(30);

const PostForm = (props) => {
  return (
    <form className={mypost.posts__addpost} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="postText"
        placeholder="Enter your post"
        validate={[required, maxLength10]}
      />
      <button>Add post</button>
    </form>
  );
};

const PostFormRedux = reduxForm({ form: "profileAddPost" })(PostForm);

export default MyPosts;
