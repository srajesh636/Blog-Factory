import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <nav className="navbar navbar-light bg-light text-center justify-content-center pb-0"> 
                <div className="mt-1">
                  <img src="/logo.png" className="logo text-center" style={{ width:130}} />
                  <p class="text-center"  style={{fontSize:14 ,paddingBottom:'0 !important'}}>© 2019 Blog Factory</p>
                </div>
            </nav>
        </div>);
    }
}

export default Footer;