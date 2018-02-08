import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends React.Component {
  sub = (e) => {
    e.preventDefault();
    //console.log(e.target.elements.firstname.value);
    //console.log(e.target.elements.sex.value);
    axios.post('/sub', {
      name: e.target.elements.firstname.value,
      sex: e.target.elements.sex.value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log("submitting!");
  }
  render(){
    return (
      <div>
        <form onSubmit={this.sub}>
          <p>name:</p>
          <input id="firstname" type="text" name="firstname" /><br />
          male<input id="male" type="radio" name="sex" value="male"/><br />
          female<input id="female" type ="radio" name="sex" value="female" />
          <button>Submit</button>
        </form>
      </div>
  );
  }
}

ReactDOM.render(<Form /> , document.getElementById('app'));


