import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Newapp from './Newapp';
// import Todolist from './Todolist';
// import Todoform from './Todoform';

var rootId = document.getElementById('root')
// class Todoitem extends Component{
//     constructor(){
//         super()
//         this.changestatus = this.changestatus.bind(this)
//         this.updateTask = this.updateTask.bind(this)
//         this.addTask = this.addTask.bind(this)
//         this.deleteTask = this.deleteTask.bind(this)
//         this.updateformTask = this.updateformTask.bind(this)
//         this.state={
//             tasklist : [{ 
//                 name : 'Amit Kumar',
//                   completed : false
//                 },
//                 { name : 'Manish goyal',
//                 completed : false
//               },
//               { name : 'Rohit Gupta',
//               completed : false
//             },
//             { name : 'Vansh Sing chandravanshi',
//             completed : false
//             }],
//             currentTask:''
//         }
//     }
//     updateformTask(index, newvals){
//         var tasknew = this.state.tasklist[index];
//         tasknew['name']=newvals
//      this.setState({
//     tasknew

//      })
//     }


// changestatus(index){
// var tasknew = this.state.tasklist;
// var tasks = tasknew[index];
// tasks.completed= !tasks.completed;
// this.setState({
// tasknew:tasknew
// })
// }
// updateTask(newValue){
// this.setState({
// currentTask : newValue.target.value
// })
// }
// addTask(evt){
//     evt.preventDefault()
// let tasknew = this.state.tasklist;
// let currentnew = this.state.currentTask;
// tasknew.push({
//     name:currentnew,
//     completed:false
// })
// this.setState({
// currentnew,
// currentTask:''
// })
// }

// deleteTask(index){
// let currentnew = this.state.tasklist
// currentnew.splice(index, 1)
// this.setState({
// currentnew

// })

// }
// render(){
// return(
//     <section>
//         <Todoform currentTask ={this.state.currentTask}
//         updateTask={this.updateTask}
//         addTask={this.addTask}
//         />
// <ul>
// {this.state.tasklist.map((newname, index)=>{
// return(
// <Todolist key={index} detail={newname} index={index} clickhandler={this.changestatus}
// deleteTask={this.deleteTask} updateformTask = {this.updateformTask}
// />
// )})
// }

// </ul>
// </section>

// )
// }
// }
  
ReactDOM.render(<Newapp />, rootId)
