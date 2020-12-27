import React, {Component} from 'react'; 
import TextField from "@material-ui/core/TextField/TextField";

import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
class App extends Component { 
constructor(props) { 
	super(props); 
	this.state = { 
	userInput : "", 
  list:[] 

	} 
} 

updateInput(value){ 
	this.setState({ 
	userInput: value, 
	}); 
} 

addItem(){ 
	if(this.state.userInput !== '' ){ 
	const userInput = { 
    id : Math.random(),  
		value : this.state.userInput 
	}; 
	const list = [...this.state.list]; 
	list.push(userInput); 

	this.setState({ 
		list, 
    userInput:""
	}); 
	} 
} 

deleteItem(key){ 
	const list = [...this.state.list]; 
	const updateList = list.filter(item => item.id !== key); 
	this.setState({ 
	list:updateList, 
	}); 

} 

render(){ 
	return(
   <div>
    <h1 style={{textAlign:"center"}}>TODO LIST </h1>
		
	<form  style={{marginLeft:"40%"}}>
     <TextField id="standard-basic" label="Add List" 
			placeholder="add item . . . "
			size="lg"
			value = {this.state.userInput} 
			onChange = {item => this.updateInput(item.target.value)} 
			aria-label="add something"
			aria-describedby="basic-addon2"
		/> 
			<Button variant="contained" color="primary"
			onClick = {()=>this.addItem()} 
			> 
			ADD 
			</Button> 
  </form>
  <Card>
    
		{this.state.list.map(item => {return( 

    <Grid container  spacing={2} style={{marginTop:20 ,marginLeft:20,marginBottom:20}}
    			>

			{item.value}
    <div style={{color:"#eb6e4b",fontSize:16 ,marginLeft:20}} >
     {new Date().toDateString()}
     
    </div>
     <div style={{marginLeft:100}}>
     <Button  
     variant="contained" color="primary" onClick = { () => this.deleteItem(item.id) } >
        delete</Button>
    
    </div>
		</Grid>

		)})} 
		</Card> 

    </div>
	 );
  }
}
export default App; 
