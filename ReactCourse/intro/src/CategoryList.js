import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state={}
    //     // this.state={counter:1}
    //     this.state = {
    //         categories: [
    //             { categoryId: 1, caretgoryName: "Beverages" },
    //             { categoryId: 2, caretgoryName: "Condiments" }]
    //     }
    // }

    state = {
        // categories: [
        //     { categoryId: 1, caretgoryName: "Beverages" },
        //     { categoryId: 2, caretgoryName: "Condiments" }],

        // currentCategory:""

        categories: []
    };

    //life cycle event - getCategories bununla calisitirlmali
    componentDidMount(){
        this.getCategories();
    }

    //Data'mizi Api'den getirmek icin (kurulan json)
    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response=>response.json()) //response'u json'a dondurur
        .then(data=>this.setState({categories:data}));;
    }


    // changeCategory = (category) =>{
    //     this.setState({currentCategory:category.caretgoryName})
    // } //arrow Function
    
    render() {
        return (
            <div>
                {/* <h3>CategoryList</h3> */}
                {/* <h3>{this.props.title}</h3> */}
                <h3>{this.props.info.title}</h3>
                <h3>{this.state.counter}</h3>
                <ListGroup>
                    {
                        //Donguler kullandiginda React performans icin her bir elemani bibirinden ayiracak essiz olacak bir id ister
                        // this.state.categories.map(category => (
                        //     <ListGroupItem key={category.categoryId}>{category.caretgoryName}</ListGroupItem>
                        // )) //category:array'in her bir elemani

                        this.state.categories.map(category => (
                            // <ListGroupItem key={category.categoryId}>{category.caretgoryName}</ListGroupItem>
                            
                            // <ListGroupItem onClick={()=>this.setState({currentCategory:"abc"})} //lambda
                            // key={category.categoryId}>{category.caretgoryName}</ListGroupItem> 
                            // <ListGroupItem onClick={this.setState({currentCategory:category.caretgoryName})} 
                            // key={category.categoryId}>{category.caretgoryName}</ListGroupItem>

                            // <ListGroupItem onClick={()=>this.changeCategory(category)} 
                            // key={category.categoryId}>{category.caretgoryName}</ListGroupItem>

                            //sctive veya active={true} syni anlama gelir.
                            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                                onClick={()=>this.props.changeCategory(category)} 
                                key={category.id}
                            >
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }

                    {/* <h4>{this.state.currentCategory}</h4> */}

                    {/* <h4>{this.props.currentCategory}</h4> <- */}

                    {/* <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem> */}

                </ListGroup>
            </div>
        )
    }
}
