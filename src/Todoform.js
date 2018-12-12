import React, {Component} from 'react';
import * as ptypes from 'prop-types';
class Todoform extends Component{
    constructor(props){
    super(props)
    this.state ={
    count:0
    }


}

    componentDidMount(){
    console.log('did mount')
    }
    componentWillMount(){
        console.log('will mount')
    }
    shouldComponentUpdate(){
if(this.state.count > 10){
    return false    
}
    return true
}
  incrementcount = ()=>{
this.setState({
count : this.state.count+1
})
}
decrementcount = ()=>{
    this.setState({
    count : this.state.count-1
    })
    }
render(){
return(
<section>
<form onSubmit={this.props.addTask}>
<input type='text' value={this.props.currentTask} onChange={this.props.updateTask}/>
<button type='submit'>Submit</button>
</form>
<button onClick={this.decrementcount}>count addition</button>
{this.state.count}
<button onClick={this.incrementcount}>count addition</button>


</section>

)
}
}


Todoform.propTypes={
    addTask:ptypes.func.isRequired,
    currentTask:ptypes.string.isRequired,
    updateTask:ptypes.func.isRequired,
}


export default Todoform