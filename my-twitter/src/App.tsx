import * as React from "react";
import Form from "./Form";
import TweetList from "./TweetList";

class App extends React.Component {
  public render() {
    return (
      <div>
        <p>I am angry with TypeScripts linter.</p>
        <Form />
        <TweetList />
      </div>
    );
  }
}

export default App;
