import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import wisePl from '../../assets/WisePl.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Styles/Style.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isFixed ? 'fixed' : ''}`}>
        <div className="topbar clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left">
                <p>
                  <strong>
                    <i className="fa fa-phone" style={{ color: '#F7C04A' }} />
                  </strong>{' '}
                  +65 8945 6089 &nbsp;&nbsp;
                  <strong>
                    <i className="fa fa-envelope" style={{ color: '#F7C04A' }} />
                  </strong>{' '}
                  <a href="mailto:petersplim705@gmail.com">petersplim705@gmail.com</a>
                </p>
              </div>

              <div className="col-md-6 col-sm-6 text-right">
                <div className="social-container">
                  <Link
                    className="youtube"
                    to="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM"
                    title="YouTube"
                  >
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link className="avatar" to="/admin" title="Profile">
                    <i className="fas fa-user-circle" style={{ marginLeft: '20px' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-default yamm">
            <div className="navbar-header">
              <div className="logo-normal">
                <Link className="navbar-brand" to="/" style={{ display: 'flex' }}>
                  <img
                    src={wisePl}
                    alt="WisePl_logo"
                    style={{ borderRadius: '5px', marginBottom: '450px' }}
                  />
                </Link>
              </div>
              <button
                type="button"
                className="navbar-toggle collapsed"
                aria-expanded="false"
                aria-controls="navbar"
                onClick={toggleNav}
                style={{ marginLeft: 'auto' }}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div
              id="navbar"
              className={`navbar-collapse collapse ${isNavOpen ? 'open' : ''}`}
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={() => setIsNavOpen(false)}>About Us</Link>
                </li>
                <li className="dropdown yamm-fw yamm-half">
                  <Link
                    to="/programs"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/videos" onClick={() => setIsNavOpen(false)}>Videos</Link>
                </li>
                <li>
                  <Link to="/contactus" onClick={() => setIsNavOpen(false)}>Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* CSS for Social Container and Media Query for Mobile */}
      <style>
        {`
          .header {
            background-color: #000;
            transition: background-color 0.3s;
          }

          .social-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          /* Responsive Design for Mobile View */
          @media (max-width: 767px) {
            .header {
              background-color: #000; /* Set background color for mobile */
            }

            .social-container {
              justify-content: center;
            }

            .social-container a {
              margin: 0 10px;
            }

            .navbar-header, .navbar-collapse {
              width: 100%;
              display: flex;
              justify-content: center;
            }

            .navbar-brand img {
              width: 100px;
            }

            .navbar-collapse {
              display: ${isNavOpen ? 'block' : 'none'}; /* Hide/show based on isNavOpen */
            }

            .navbar-toggle {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
