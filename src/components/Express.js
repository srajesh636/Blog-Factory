import React from 'react';

class Express extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <div className="jumbotron jumbotron-fluid bg-express">
                    <div className="container">
                        <h1 className="display-4">Express Js</h1>
                        <br/>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>

                <br />
                <div className="mt-2 container-fluid p-5">
                    <div className="row">
                        <div className="col-2 d-none d-lg-block d-xl-block"></div>
                        <div className="col-lg-8 col-sm-12  col-xs-12 text-center">
                            <h3 className="text-left">Introducing Express Js</h3>
                            <br />
                            <p className="text-left">
                                This funny tag syntax is neither a string nor HTML.
                                It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
                                JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.
                            </p>
                            <p className="text-left">
                                React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
                                Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
                                React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
                                With that out of the way, let’s get started!
                            </p>
                            <p className="text-left">
                                This funny tag syntax is neither a string nor HTML.
                                It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
                                JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.
                            </p>
                            <br/>
                            <h3 className="text-left">Why Express Js ?</h3>
                            <br />
                            <p className="text-left">
                                This funny tag syntax is neither a string nor HTML.
                                It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
                                JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.
                            </p>
                            <p className="text-left">
                                React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
                                Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
                                React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
                                With that out of the way, let’s get started!
                            </p>
                        </div>
                        <div className="col-2 d-none d-lg-block d-xl-block"></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Express;