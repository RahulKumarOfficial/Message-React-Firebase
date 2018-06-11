import React, { Component } from "react";
import trim from 'trim';
class MessageBox extends Component{
    constructor(props){
        super(props);
        this.state={
            message:'',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            message:e.target.value,
        });
        //console.log(this.state.message);
    }

    onSubmit(e){
        // if(trim(e.target.value)!==''){
            e.preventDefault();
            let dbCon = this.props.db.database().ref('/messages');
            dbCon.push({
                message:this.state.message
            });
            console.log('inside if');
        //}
        this.setState({
            message:'',
        });
        console.log('successfully sent');       
    }
    render(){
        return(
            <form>
            <textarea className="textarea"
             cols="100"
             placeholder="Type a message here" 
             onChange={this.onChange} defaultValue={this.state.message}></textarea>
             <button onClick={this.onSubmit}>Click Me</button>
            </form>

        );
        }
       
        

    

}
export default MessageBox;