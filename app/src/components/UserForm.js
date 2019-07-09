import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input style={{ margin:"20px auto", display:"block" }} type="text" name="zipcode" data-test="zip-code"/>
      <button name="submit" data-test="submit">Submit</button>
    </form>
  );
}

export default UserForm;