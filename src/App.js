import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'




 /***************
  * React Hooks *
  * useState()  *
  ***************/

// useState() is the hook that allows us to manage state in a funcatonal component 
// This method returns an array with exactly two elements and always two elements. 
// using array destructering [e.1, el2]: 
// this allows you to pull elements out of the array you get back from the right side of  the equal sign
// personState give you access person's data. 

/************* React  Hooks  with Functional Component *************************************************************** */

// const app = props => {
//  const [personState, setPersonState] = useState(
//     // pass initial state
//     {
//           persons: [
//            { name: 'aa', age: 11 },
//            { name: 'bb', age: 22 },
//            { name: 'cc', age: 33 }
           
//           ]
//         }
//   );
  

//   const [otherState, setOtherState] = useState(' SOME OTHER STATE');
//   console.log(personState, otherState);


//   const switchNameHandler = () => {
//     // console.log('was clicked')
//     // setPersonState : pass new person obj data
//     setPersonState({ persons: [
//       { name: 'dd', age: 77 },
//       { name: 'ee', age: 88 },
//       { name: 'cffc', age: 99 }
      
//      ], 
//      otherstate: personState.otherstate
//     })
//   }

//   return (
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">what's up React</h1>
//     </header>
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//     <button onClick={switchNameHandler}> Switch name </button>
//     <Person name={personState.persons[0].name} age= {personState.persons[0].age} />    
//     <Person 
//       name={personState.persons[1].name} 
//       age= {personState.persons[1].age} /> 

//     <Person name={personState.persons[2].name} age= {personState.persons[2].age} /> 
//   </div>
//   )
//   }
//   export default app;

/************* React  Hooks ************************************************************************** */
class App extends Component {
  state = {
    persons: [
     { name: 'aa', age: 11 },
     { name: 'bb', age: 22 },
     { name: 'cc', age: 33 }
     
    ],
    otherstate: ' sdfksjfdasl',
    showPersons: false
  }

  switchNameHandler = (newName, newAge) => {
    // console.log('was clicked')
    this.setState({ persons: [
      { name: 'dd', age: 77 },
      { name: newName, age: newAge },
      { name: 'cffc', age: 99 }
      
      ]
    } )
  }

  nameChangedHndler = (e) => {
    this.setState({ persons: [
      { name: 'dd', age: 77 },
      { name: e.target.value, age: 1.5},
      { name: 'cffc', age: 99 }
      
    ]
  } )
}

ageChangedHndler = (e) => {
  this.setState({ persons: [
    { name: 'dd', age: 77 },
    { name:'小宇', age: e.target.value},
    { name: 'cffc', age: 99 }
    
  ]
} )
}
// Toggle person handler
togglePersonsHnadler = () => {
  console.log(' toggle personhandler is called ')
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    return (
      <div className="App">
       
          
      <h1 className="App-title">what's up React</h1>
      <button 
        
        onClick={this.togglePersonsHnadler}>Toggle Persons </button>
        
      
      {
        this.state.showPersons === true ? 
        <div>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} />    

        <Person 
          name={this.state.persons[1].name} 
          age= {this.state.persons[1].age} 

          click={this.switchNameHandler.bind(this, 'Xiaoyu', 1.5)} 

          nameChanged = {this.nameChangedHndler}
          ageChanged = {this.ageChangedHndler} >

        </Person> 

      </div> : null
      
      }

      </div>
      
     
    );
   
    // return React.createElement('div', null, React.createElement('h1', null, ' helleo'))
  }
}

export default App;
