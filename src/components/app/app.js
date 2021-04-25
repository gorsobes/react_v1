import React from 'react';
import Appheader from '../app-header/app-header';
import SerchPanel from '../search-panel/serch-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';


const App = () => {

const data =[
    {label: "Good run type of" , important:true, id:'sdss'},
    {label: "Good run type 2" , important:false,id:'fgfr'},
    {label: "Good run type 4444" , important:false,id:'fghg'}
];


    return (
        <div className="app">
        <Appheader/>
        <div className="searc-panel d-flex">
                <SerchPanel/>
                <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
        </div>
    )
}
export default App;