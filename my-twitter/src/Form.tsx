import * as React from "react";
import { Field } from "redux-form";

export interface IProps {
  // name: string;
  placeholder: string;
  // type: string;
}

class Form extends React.Component<IProps> {
  render() {
    return (
      <form action="">
        <div>
          <Field
            component="textarea"
            name="tweetbox"
            placeholder={this.props.placeholder}
          />
        </div>
      </form>
    );
  }
}

export default Form;

// export default reduxForm({
//   form: "twitter" // a unique identifier for this form
// })(Form);
