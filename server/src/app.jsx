import React from 'react';
import ReactDOM from 'react-dom';

const form = (p) => {
  return (
      <form>
        <input type="text" name="firstname" />
      </form>;
      )
}

ReactDOM.render(<p>This will be a form!</p>, document.getElementById('app'));


