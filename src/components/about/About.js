import React from "react";

class About extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }


    render() {
      return (
        <React.Fragment>
         <div className="container mt-5">
          <div className="row">
            <div className="col">
            <p className="h3 text-primary">About App</p>
            <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem esse necessitatibus culpa consequatur. Cumque error id ullam magnam harum sapiente quaerat quo dolorum velit soluta ex, sed tempora exercitationem, accusamus in laborum, dicta assumenda. Distinctio veritatis earum, repellendus quas debitis repudiandae, eius iusto cupiditate obcaecati nulla, fugit quis sit?</p>
            <p className="h5">Version : 1.0.1</p>
            <p className="h4 text-danger">Author : Venkatesh B</p>
            </div>
          </div>
         </div>
        </React.Fragment>
      )
    }
}

export default About;