import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link, withRouter, useLocation } from 'react-router-dom';
import AuthContext from '../../contexts/auth-context';
import './Navbar.scss';
import logo from '../../assets/favicon2.png';

const Navbar = (props) => {
  const [searchVal, setSearchVal] = useState('');
  const context = useContext(AuthContext);
  const path = useLocation();

  useEffect(() => {
    if (searchVal !== '') props.history.push('/search/' + searchVal);
  }, [props.history, searchVal]);

  const handleSeachValue = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      {path.pathname !== '/admin/login' ? (
        <nav
          className="navbar navbar-success"
          data-testid="navbar"
          style={{
            justifyContent: context.token
              ? 'stretch'
              : 'space-between',
          }}
        >
          <Link to={'/'} id="logo" data-testid="home-link">
            <img src={logo} alt="brand logo" />
          </Link>
          {!context.token && (
            <Link to="/login" data-testid="login-link">
              <Button
                variant="contained"
                color="secondary"
                className="nav_btn"
              >
                Login
              </Button>
            </Link>
          )}
          {context.token && (
            <div className="search_field_wrap">
              {' '}
              <div className="search_field_wrap">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchVal}
                  onChange={handleSeachValue}
                />
              </div>
            </div>
          )}
        </nav>
      ) : null}
    </>
  );
};

export default withRouter(Navbar);
