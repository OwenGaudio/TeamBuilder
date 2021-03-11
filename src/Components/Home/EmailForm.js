import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import "./EmailStyle.scss";

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
        this.props.sendEmail(this.state.text);
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
                    placeholder="ex: email@domain.com" 
                    type="text"/>
                <Button classname="email-button" type="submit" variant="primary">Get Newsletter</Button>
            </form>
        </div>
    }
}

export default Form;