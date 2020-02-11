import React, { Component } from 'react';

class App extends Component
{
    constructor()
    {
       super();
       this.state={firstname:""}
       this.chnageData=this.chnageData.bind(this);
    }
    chnageData(e)
    {
      //.log(e.target.value);
      this.setState({firstname:e.target.value});
    }
    render()
    {
       return(
            <div>
                  <h1>{this.state.firstname}</h1>
                  <form>
                        <label>FirstName:</label><input type="text" value={this.state.firstname} onChange={this.chnageData}/>
                  </form>
            </div>
       );
    }
}

export default App;
