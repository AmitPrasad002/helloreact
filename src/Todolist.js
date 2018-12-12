import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import * as ptypes from 'prop-types';
class Todolist  extends Component{
        constructor(props){
                super(props)
                
                this.state={
                isEditing : false
                }
                this.renderForm = this.renderForm.bind(this)
                this.editForm = this.editForm.bind(this)
                this.toggleState = this.toggleState.bind(this)
                this.updateForm = this.updateForm.bind(this)
        }
        updateForm(evt){
               evt.preventDefault(); 
              
       this.props.updateformTask(this.props.index, this.input.value) 
       this.toggleState()
        }
s      
        toggleState(){
                const {isEditing} = this.state
                this.setState({
                isEditing:!isEditing

               }) 
               
        }
        renderForm(){
                return(
        <form onSubmit={this.updateForm}>
        <input type="text" defaultValue={this.props.detail.name} ref={(value)=>{
                this.input = value


        }} />
        <button type="submit">Update Form</button>
        </form>
        )
        }
        

        editForm(){
                return(
        <li onClick={()=>{this.props.clickhandler(this.props.index)}}
        className={this.props.detail.completed ? 'completed' : ''}>
        {this.props.detail.name}
        <button type="button" onClick={(evt)=>{
        evt.stopPropagation()
        this.toggleState()        
        }}>edit</button>
        <button type="button" onClick={(evt)=>{
        evt.stopPropagation()
        this.props.deleteTask(this.props.index)}}>Delete</button>
        </li>
        )
        }
        render(){
               const {isEditing} = this.state
              

        return(
                <section>
                {isEditing ? this.renderForm() :  this.editForm() }
                </section>

               
        )
}
}


Todolist.propTypes ={
        clickhandler:ptypes.func.isRequired,
        detail:ptypes.object.isRequired,
        index:ptypes.number.isRequired,
        deleteTask:ptypes.func.isRequired,
        updateformTask:ptypes.func.isRequired,

}






export default Todolist