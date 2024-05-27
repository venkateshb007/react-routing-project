import React from "react";

class Home extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }


    render() {
      return (
        <React.Fragment>
            <div className="landing-page">
              <div className="wrapper">
                <div>
                  <h2>Welcome to React Routing</h2>
                  <div className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem placeat sunt repellat tempora et dolores dolore ullam, aliquam amet quia nihil autem eius possimus ab! Nam totam ullam minima esse.</div>
                </div>
              </div>
            </div>
        </React.Fragment>
      )
    }
}

export default Home;