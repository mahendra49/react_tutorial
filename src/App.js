import React from 'react';

class App extends React.Component {


  constructor(){
    super();
    this.state = {

      nodes : [[-50, -50, -50], [-50, -50, 50], [-50, 50, -50], [-50, 50, 50],
        [50, -50, -50], [50, -50, 50], [50, 50, -50], [50, 50, 50]],
        
      edges : [[0, 1], [1, 3], [3, 2], [2, 0], [4, 5], [5, 7], [7, 6],
        [6, 4], [0, 4], [1, 5], [2, 6], [3, 7]] ,
        
      cxt:null,
      timer:null,
      timeInterval:null,
      oldx:150,
      oldy:150,
      direction:null
    }

  }


  componentDidMount() {
    
    const context = this.refs.canvas.getContext('2d');
    console.log(context);
    //this.state.cxt = this.refs.canvas;
    this.setState({cxt:context,timer:200});
  }


  rotateCuboidAlongX = (rotationangle) => {

      var sinX = Math.sin(rotationangle);
      var cosX = Math.cos(rotationangle);

      let nodes = this.state.nodes;

      console.log(nodes == this.state.nodes);

      nodes.forEach( (node) =>{
          
          const x = node[0];
          const y = node[1];
          const z = node[2];

          node[1] = y * cosX - z * sinX;
          node[2] = z * cosX + y * sinX;

      });

     // this.setState({nodes:nodes});
  }



  rotateCuboidAlongY = (rotationangle )=>{
      
      var sinX = Math.sin(rotationangle);
      var cosX = Math.cos(rotationangle);

      var nodes = this.state.nodes;

      nodes.forEach((node)=> {
          var x = node[0];
          var y = node[1];
          var z = node[2];

          node[0] = x * cosX + z * sinX;
          node[2] = z* cosX - x * sinX;

      });     
  }

  Zaxis = (rotationangle )=>{
      
      var sinX = Math.sin(rotationangle);
      var cosX = Math.cos(rotationangle);
      var nodes = this.state.nodes;

      nodes.forEach( (node)=> {
          var x = node[0];
          var y = node[1];
          var z = node[2];

          node[0] = x* cosX - y * sinX;
          node[1] = y* cosX + x * sinX;

      });     

      //this.setState({nodes:nodes});
  }

  drawCuboid = ()=> {
    this.setState(( {cxt , nodes , edges} )=>{
    cxt.save();

    cxt.clearRect(0, 0, 500, 500);
    cxt.translate(500 / 2, 500 / 2);
    cxt.strokeStyle = "blue";
    cxt.fillStyle = '#bbb';
    cxt.strokeStyle = '#000';

    cxt.lineWidth = 2;
    

    cxt.beginPath();

    this.state.edges.forEach(function (edge) {
        var p1 = nodes[edge[0]];
        var p2 = nodes[edge[1]];
        cxt.moveTo(p1[0], p1[1]);
        cxt.lineTo(p2[0], p2[1]);
    });

    cxt.closePath();
    cxt.stroke();
   

    cxt.shadowOffsetX = 10;
    cxt.shadowOffsetY = 10;
    cxt.shadowBlur    = 4;
    cxt.shadowColor   = 'rgba(180, 180, 180, 0.8)';
    // fill shape, draw stroke
    cxt.fill();
    cxt.stroke();
    cxt.closePath();
    cxt.restore();
    
    cxt.restore();
    });

  }

  Xaxis = ()=>{
    let tmp = setInterval(()=>{
      console.log("on click event");
      this.rotateCuboidAlongX(Math.PI/180);
      this.drawCuboid();
    }, this.state.timer);

    this.setState( {timeInterval:tmp});

  }

  incr = ()=>{
    this.setState((state)=>{
      clearInterval(state.timeInterval);
    })
    this.setState({timer:this.state.timer+100});
    this.Xaxis();
  }

  decr = ()=>{
    this.setState((state)=>{
      clearInterval(state.timeInterval);
    })
    this.setState({timer:this.state.timer-100});
    this.Xaxis();
  }


  Yaxis = ()=>{
    this.setState((state)=>{
      clearInterval(state.timeInterval);
    })
    let tmp = setInterval(()=>{
      console.log("on click event");
      this.rotateCuboidAlongY(Math.PI/180);
      this.drawCuboid();
    }, this.state.timer);

    this.setState( {timeInterval:tmp});
  }

  Zaxis = ()=>{
    this.setState((state)=>{
      clearInterval(state.timeInterval);
    })
    let tmp = setInterval(()=>{
      console.log("on click event");
      this.rotateCuboidAlongY(Math.PI/180);
      this.drawCuboid();
    }, this.state.timer);

    this.setState( {timeInterval:tmp});
  }

  
  //move mouse

  mousemovemethod =  (e)=> {

      let oldx = this.state.oldx;
      let oldy = this.state.oldy;
      let direction = this.state.direction;

      if (e.pageX > oldx && e.pageY == oldy) {
          direction="East";
          this.Xaxis();
          document.getElementById('h1').innerHTML = "along Y axis";
      }
      else if (e.pageX == oldx && e.pageY > oldy) {
          direction="South";
          document.getElementById('h1').innerHTML = "along Z axis";
          this.Zaxis();
      }
      else if (e.pageX == oldx && e.pageY < oldy) {
          direction="North";
          document.getElementById('h1').innerHTML = "along Z axis";
          this.Zaxis();
      }
      else if (e.pageX < oldx && e.pageY == oldy) {
          direction="West";
          document.getElementById('h1').innerHTML = "along X axis";
          this.Yaxis();
      }
              
      oldx = e.pageX;
      oldy = e.pageY;
      
      this.setState({oldx,oldy,direction});

      console.log(direction);
  }


  render() {

    return (

      <div onMouseMove={(e)=>this.mousemovemethod(e)}>
        <h3 id='h1'> </h3>
        
        <canvas ref='canvas'  width="500" height="500" onClick={  this.Xaxis } > 
        </canvas>

        <button onClick={this.incr} > INCR SPEED </button>
        <button  onClick={this.decr} > DECR SPEED </button>

        <button  onClick={this.Xaxis}> Along X axis</button>
        <button  onClick={this.Yaxis} > Along Y axis</button>
        <button  onClick={this.Zaxis}> Along Z axis</button>

      </div>

    );
  }
}


export default App;
