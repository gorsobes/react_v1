import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup} from 'reactstrap';
import './post-list.css';
const PostList = ({posts}) => {
const elements = posts.map((item) => {
    return (
        <li key={item.id} className='list-group-item'>
        <PostListItem 
        label= {item.label} 
        important= {item.important}/>
        </li>
    )
        });


    return (
        <ListGroup className="app-list">
           {elements}
         
        </ListGroup>
    )
}

    export default PostList;