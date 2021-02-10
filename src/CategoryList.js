import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
    state = {
        categories: []
    };
    
    // Component'ler yerlestikten sonra asagidaki event calisir
    componentDidMount(){ 
        this.getCategories();
    }
    
    getCategories = () =>{ // Fetch - Promise
        fetch("http://localhost:3000/categories")
        .then(response =>response.json())
        .then(data =>this.setState({categories:data}));
    };
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category =>
                            (<ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                                onClick= {()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>))
                    }
                </ListGroup>
                {/* <h3>{this.props.currentCategory}</h3> */}
            </div>
        );
    }
}

export default CategoryList;