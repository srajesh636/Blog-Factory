import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

class ReactJs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const codeString = "$ npx create-react-app hello-world";
    const cdToFolder = "$ cd hello-world";
    return (
      <div>
        <div className="jumbotron jumbotron-fluid bg-react">
          <div className="container">
            <h1 className="display-4">React Js</h1>
            <br />
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <br />
        <div className="mt-2 container-fluid p-5">
          <div className="row">
            <div className="col-2 d-none d-lg-block d-xl-block d-md-none" />
            <div className="col-lg-8 col-sm-12  col-xs-12 col-md-12 text-center">
              <h3 className="text-left">Why React Js ?</h3>
              <br />

              <p className="text-left">
                React is the most popular Front End Library in use today. But
                getting started on React can be hard at times. There is
                Component Hierarchy, states, props and functional programming
                involved. This article tries to solve this problem, by giving
                you a nice and easy way of getting started in React. So without
                wasting any time, let’s jump in.
              </p>
              <br />
              <h3 className="text-left">Create Your First App in React </h3>
              <br />
              <p className="text-left">
                The Best way to create your first react app is through creating
                a Hello World .
              </p>
              <p className="text-left">
                Lets install the react biolerplate provided by facebook.
                Now you are ready with all of you boilerplate installed, Lets move to the hello-world folder to see what's there in.
              </p>
              <SyntaxHighlighter language="shell" style={atomOneDark} className= "text-left pl-3">
                {`$ npx create-react-app hello-world
$ cd hello-world`}
                {cdToFolder}
              </SyntaxHighlighter>
              <p className="text-left">
                Here you can see 2 folders /public and /src and package.json file which consists of all the dependancies needed to run the program.
                Lets run the server to see our first react app in action.
              </p>
              <SyntaxHighlighter language="command" style={atomOneDark} className= "text-left pl-3">
                { '$ npm start'}
              </SyntaxHighlighter>
              <p className="text-left">
                Now you can see that the code present is App.js is what you see on the localhost:3000 .
              </p>
              <SyntaxHighlighter language="command" style={atomOneDark} className= "text-left pl-3">
                { '$ npm start'}
              </SyntaxHighlighter>
            </div>
            <div className="col-2 d-none d-lg-block d-xl-block d-md-none" />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactJs;
