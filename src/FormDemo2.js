import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,Button } from 'reactstrap';

class FormDemo2 extends Component {

    state = { email: "", password: "", city: "", description: "" };

    onClickSubmit = (event) => {

        event.preventDefault();
        alertify.success(this.state.email + "     added to db");

    }

    onClickChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onClickSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" placeholder="Enter email" name="email" onChange={this.onClickChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" placeholder="Enter password" name="password" onChange={this.onClickChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" placeholder="Enter your description" name="description" onChange={this.onClickChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" onChange={this.onClickChange}>
                            <option>Istanbul</option>
                            <option>Ankara</option>
                            <option>Atina</option>
                            <option>Thessaloniki</option>
                            <option>London</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" >Save</Button>
                </Form>
            </div>
        );
    }
}

export default FormDemo2;