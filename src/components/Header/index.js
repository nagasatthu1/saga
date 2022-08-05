import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const navigate = useNavigate();
  const style = {
    cursor: 'pointer',
  };
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand
            className="cusor"
            style={style}
            onClick={() => {
              navigate('../');
            }}
          >
            Saga
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink
                  className="cusor"
                  style={style}
                  aria-current="page"
                  onClick={() => {
                    navigate('../');
                  }}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="cusor"
                  style={style}
                  onClick={() => {
                    navigate('../counter');
                  }}
                >
                  CounterApp
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="cusor"
                  style={style}
                  onClick={() => {
                    navigate('../users');
                  }}
                >
                  User
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
