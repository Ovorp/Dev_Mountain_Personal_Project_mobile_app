import React from 'react';
import { useEffect, setState } from 'react';
import { connect } from 'react-redux';

function Header(props) {
  const { firstName, lastName } = props.user;

  return (
    <header>
      <h1>
        {firstName} {lastName}
      </h1>

      <h1>Header</h1>
    </header>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);

//need to write the function to load profile pictures.
