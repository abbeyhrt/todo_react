import React from 'react';

class Form extends React.Component {
  createTodo(event) {
    event.preventDefault();
    console.log('gonna do some stuff ');
  }

  render() {
    return (
      <form className="form">
        <h2>What do you need to do today?</h2>
        <input
          ref={input => (this.todo = input)}
          className="chore-input"
          type="text"
          placeholder="Type todo here"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default Form;
