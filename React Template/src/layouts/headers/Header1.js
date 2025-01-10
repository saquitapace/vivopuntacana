import UserPrfoile from '@/src/components/UserPrfoile';
import Link from 'next/link';
import { Contact, Home, Listing, Pages } from '../Menu';
import LanguageSelector from '@/src/components/LanguageSelector';

const Header1 = () => {
  return (
    <header className='header-area header-area-one d-none d-xl-block'>
      <div className='header-top'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='top-social'>
                <ul className='social-link'>
                  <li>
                    <span>Follow us:</span>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='ti-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='ti-twitter-alt'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='ti-pinterest'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='ti-dribbble'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='ti-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='top-content text-center'>
                <p>
                  Claim your business <Link href='/'>here</Link>
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='top-right'>
                <ul className='d-flex align-items-center'>
                  {/* <li>
                    <UserPrfoile />
                  </li> */}
                  <li>
                    <LanguageSelector />
                  </li>
                  <li>
                    <Link href='/'>
                      <i className='ti-search'></i>
                      <span>Search here</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-navigation'>
        <div className='container-fluid'>
          <div className='primary-menu'>
            <div className='row'>
              <div className='col-lg-2 col-5'>
                <div className='site-branding'>
                  <Link className='brand-logo' href='/'>
                    <img src='assets/images/logo/logo-1.png' alt='Brand Logo' />
                  </Link>
                </div>
              </div>
              <div className='col-lg-6 col-2'>
                <div className='nav-menu'>
                  <div className='navbar-close'>
                    <i className='ti-close'></i>
                  </div>
                  <nav className='main-menu'>
                    <ul>
                      <li className='menu-item has-children'>
                        <Link href='/'>Home</Link>
                        <ul className='sub-menu'>
                          <Home />
                        </ul>
                      </li>
                      <li className='menu-item has-children'>
                        <a href='#'>Listings</a>
                        <ul className='sub-menu'>
                          <Listing />
                        </ul>
                      </li>
                      <li className='menu-item has-children'>
                        <a href='#'>Pages</a>
                        <ul className='sub-menu'>
                          <Pages />
                        </ul>
                      </li>
                      <li className='menu-item '>
                        <Link href='/calendar/day'>Calendar</Link>
                      </li>

                      <Contact />
                      <li className='nav-btn'>
                        <Link className='main-btn icon-btn' href='/add-listing'>
                          Add Listing
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='col-lg-4 col-5'>
                <div className='header-right-nav'>
                  <ul className='d-flex align-items-center'>
                    <UserPrfoile />
                    <li className='hero-nav-btn'>
                      <Link className='main-btn icon-btn' href='/add-listing'>
                        Add Listing
                      </Link>
                    </li>
                    <li className='nav-toggle-btn'>
                      <div className='navbar-toggler'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
