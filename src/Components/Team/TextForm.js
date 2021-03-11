import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import "./TextStyle.scss";

class Form extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.sendText(this.state.text, this.props.team);
        this.setState({
            text: ''
        })
    }

    render(){
        return <div className="form-container">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    onChange={e => this.handleChange(e)} 
                    value={this.state.text} 
                    placeholder="ex: 0123456789" 
                    type="text"/>
                <Button type="submit">Text Your Team</Button>
            </form>
        </div>
    }
}

export default Form;