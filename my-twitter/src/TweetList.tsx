import * as React from "react";

import { connect } from "react-redux";
// Leave space between imports for TypeScript linting

// export interface IState {
//   tweets: [];
//   // tweet: any;
// }

// export interface IMap {
//   tweet: any;
// }

export interface IProps {
  tweets: [];
  // tweet: any;
}

class TweetList extends React.Component<IProps, any> {
  public render() {
    return (
      <div>
        {this.props.tweets.map((tweet: any) => (
          <div>{tweet.id}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  tweets: state.tweets
});

export default connect(mapStateToProps)(TweetList);
