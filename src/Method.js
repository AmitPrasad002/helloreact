import React,  {Component} from 'react';

class Method extends Component{
fbLink(){
return 'https://www.facebook.com/roneet.kumar'
}
fbName(){

return 'Amit Kumar'

}
    render(){
    return(

<div>
    <p>My name is {this.fbName()} and my facebook id is :<a href={this.fbLink()}>Roneet Kumar</a></p>
</div>

)
}
}

export default Method;