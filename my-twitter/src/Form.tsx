import * as React from "react";

import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
// Leave space between imports for TypeScript linting

export interface IState {
  tweetboxValue: string;
}

export interface ISampleTweetProps {
  addTweet: any;
}

export interface ISampleFormData {
  savedData: (data: ISampleFormData) => void;
}

type AllProps = ISampleTweetProps & InjectedFormProps<ISampleFormData>;

class Form extends React.Component<AllProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      tweetboxValue: ""
    };
  }

  public setTweetboxValue = (event: any) => {
    this.setState({
      tweetboxValue: event.target.value
    });
  };

  public handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.addTweet(this.state.tweetboxValue);
    this.setState({
      tweetboxValue: ""
    });
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Field
            component="textarea"
            name="tweetbox"
            placeholder="Compose Tweet..."
            value={this.state.tweetboxValue}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addTweet: (text: any) =>
    dispatch({
      text,
      type: "ADD_TWEET"
    })
});

const WrappedForm = reduxForm<ISampleFormData>({ form: "Form" })(Form);

export default connect<{}, {}>(
  null,
  mapDispatchToProps
)(WrappedForm);
