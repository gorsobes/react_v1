import React, {Component} from 'react';
import Appheader from '../app-header/app-header';
import SerchPanel from '../search-panel/serch-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px; 
`

export default class  App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: "Good run type of" , important:true,like:false, id:1},
                {label: "Good run type 2" , important:false,like:false,id:2},
                {label: "Good run type 4444" , important:false,like:false,id:3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.maxId = 4;
    }

deleteItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
             const before = data.slice(0,index);
             const after = data.slice(index +1);
             const newArr = [...before, ... after];
                return{
                    data: newArr
                }
        });
}

addItem (body){
const newItem = {
    label: body,
    important: false,
    id: this.maxId++
}
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
 
    });
}
onToggleImportant(id){

}

onToggleLiked(id){
this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id ===id);

    const old = data[index];
})
}
    
render(){
    return (
        <AppBlock>
        <Appheader/>
        <div className="searc-panel d-flex">
                <SerchPanel/>
                
                <PostStatusFilter/>
        </div>
        <PostList posts={this.state.data}
        onDelete={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleLiked={this.onToggleLiked}/>
        <PostAddForm
        onAdd={this.addItem}/>
        </AppBlock>
    )
}
   
}
