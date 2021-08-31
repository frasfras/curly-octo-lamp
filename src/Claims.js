import React, {Component} from 'react';
import Airtable from 'airtable';



var base = new Airtable({apiKey: 'keyjVpG4zXCD49VfC'}).base('apprF45aHSyfT4Xl8');

class Claims extends Component {
   nameSubmit(event){
    event.preventDefault();
     var developerName = this.refs.name.value;
    
     this.setState({developerName}, function(){
      console.log(this.state);
     });
   }

   stakeChange = (e) => {
  const{name, valuea} = e.target;
  var value = this.refs.stake.value;
    this.setState({
      ['stake']: value
    });
    console.log(this.state);
   }

   photoChange = (e) => {
  const{name, valuea} = e.target;
  var value = this.refs.photo.value;
    this.setState({
      ['photo']: value
    });
   }

   typeChange = (e) => {
  const{name, valuea} = e.target;
  var value = this.refs.type.value;
    this.setState({
      ['type']: value
    });
   }
  
  
 

  questionSubmit(event){
    event.preventDefault();   

   
    // this.setState({isSubmitted: true});
    // submit airtable
    base('Car').create([
      {
    "fields": {
      "Name": this.state.stake,
      "Photo": this.state.photo,
      "Type of damage": this.state.type
     }
    }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });

    console.log(this.state);
  } 

  
  onSubmit(){
  

  }

  
  constructor(props) {
     super(props);
     this.state ={

      developerName: '',
      airtable: '',
      stake: '',
      photo: '',
      type: '',
      isSubmitted: false
     };
     this.nameSubmit = this.nameSubmit.bind(this);
     
     // this.handleInputChange = this.handleInputChange.bind(this);
     this.questionSubmit = this.questionSubmit.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
  }

  render(){
      var developerName;
      var questions;
           

      if (this.state.developerName !== '' && this.state.isSubmitted === false){
           // developerName = <div>
           
           //    <h1> Hi developer , enter your name </h1>
           //     <form onSubmit ={this.nameSubmit}>  
           //        <input className="namy" type="text" placeholder="enter your name" ref="name" /><br/>

           //       <input style={{display:'none'}} className="namy" type="text" placeholder="enter your airtable api key" ref="base" /><br/>
           //        <input className="button" type="submit" value = "submit" />
           //     </form>
           // </div>;
           // questions = ''
      
      } else if (this.state.developerName === '' && this.state.isSubmitted === false){
            developerName = <h3> Automated damage Register </h3>

            questions = <div>
              <h2>   <a  className="App-link"
          
        >
         Car Claims  Dispatcher
        </a>  {this.state.developerName} </h2>
 
       
              <form onSubmit={this.questionSubmit}> 
               
                   

                   
                    <div className="card">
                  <label> Claimant Name  </label> &nbsp;
	                    <input className="" type="text" placeholder="" onChange={this.stakeChange} ref="stake"  /><br/>
	               <label align ="left"> Photo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	                     <input className="" type="text" placeholder="" onChange={this.photoChange} ref="photo"  /><br/>
					 <label> Type of damage </label>
						 <input className="" type="text" placeholder="" onChange={this.typeChange} ref="type"  /><br/>

                   </div>
                 
                   <input className="button" type="submit" value = "submit" />
              </form>
              </div>
      }

    return(
      <div> 
              {developerName}
              
              --------------------------------------------------------
            {questions}
             
             

      </div>
    );
  }
}


export default Claims;