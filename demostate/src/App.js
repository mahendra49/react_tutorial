import React, { Component } from 'react';

class App extends Component
{
    constructor()
    {
        super();
        this.state={
                      message:"This is very very good",
                      message2:"This is Mango",
                      message3:"This is Apple"
                    }
        this.handler=this.handler.bind(this);
    }
    handler()
    {
       this.setState({message:"This is dasome"});
    }
    render(){
        return(
             <div>
                  <Header info={this.state} myChange={this.handler}/>
                  
             </div>
        );
    }
}

class Header extends Component
{
      render(){
        console.log(this.props.myChange);
        return(
                  <div>
                        <h1>{this.props.info.message}</h1>
                        <h1>{this.props.info.message2}</h1>
                        <h1>{this.props.info.message3}</h1>
                        <button type="button" onClick={this.props.myChange}>NewChange</button>
                  </div>
        );
      }
}
export default App;
