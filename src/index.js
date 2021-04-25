import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/app/';
//import reportWebVitals from './reportWebVitals';
/*class WhoAmi extends Component{
    constructor(props){
        super(props);
        this.state = {
            years:26
        }
        this.nextYear = this.nextYear.bind(this)
    }
    
    nextYear(){
        this.setState(state => ({
            years: ++state.years
        }))
    }

    
    render(){
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return(
            <>
            <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}


const All = () => {
    return(
        <>
            <WhoAmi name="Jesica" surname="Sdtuy" link = "ya.ru"/>
            <WhoAmi name="Marc" surname="Sfffr" link = "yandex.ru"/>
            <WhoAmi name="Tom" surname="Kopl" link = "ops.ru"/>
        </>
    )
}*/


ReactDOM.render(<App/>,document.getElementById('root'));