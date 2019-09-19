import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// class Demo extends Component{
// 	render(){
// 		return <div className='mycss'>
// 			<h1> hello world {this.props.name} </h1>
// 			<p> my first cls compo </p>
// 		       </div>
// 	}
// }

// const Demo = (props) => {
// 	return <div className='mycss'>
// 	<h1> hello world {props.name} </h1>
// 	<p> my first functional comp </p>
// 			</div>
// }


const Demo = ({name}) => {
	return <div className='mycss'>
	<h1> Hello World {name} </h1>
	<p>  My first functioanl comp </p>
		   </div>
}

export default Demo;