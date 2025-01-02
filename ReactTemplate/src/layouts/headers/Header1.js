import MessageIcon from '@/src/components/MessageIcon';
import NotificationIcon from '@/src/components/NotificationIcon';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { Contact, Home, Listing, Pages } from '../Menu';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';

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
                  Claim your business{' '}
                  <Link href='/'>
                    <a>Here</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='flex justify-end '>
                {/* <ul className='d-flex'> */}
                {/* <li> */}
                {/* <div className='w-1/3 border z-100'> */}
                <LanguageSwitcher />
                {/* </div> */}
                {/* </li> */}
                {/* </ul> */}
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
                  <Link href='/'>
                    <a className='brand-logo'>
                      <img
                        src='assets/images/logo/logo-1.png'
                        alt='Brand Logo'
                      />
                    </a>
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
                        <Link href='/'>
                          <a>Home</a>
                        </Link>
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

                      <SignedIn>
                        <li className=''>
                          <Link href='/calendar/day'>
                            <a className=''>Events</a>
                          </Link>
                        </li>
                      </SignedIn>
                      <Contact />

                      <li className='nav-btn'>
                        <Link href='/add-listing'>
                          <a className='main-btn icon-btn'>Add Listing</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='col-lg-4 col-5'>
                <div className='header-right-nav'>
                  <ul className='d-flex align-items-center'>
                    <li className='cursor-pointer'>
                      <MessageIcon />
                    </li>
                    <li className='cursor-pointer'>
                      <NotificationIcon />
                    </li>
                    <li className='user-btn'>
                      <SignedIn>
                        {/* Mount the UserButton component */}
                        <UserButton afterSignOutUrl='/' />
                      </SignedIn>
                      <SignedOut>
                        {/* Signed out users get sign in button */}
                        <div className='px-3 py-2 text-lg  shadow rounded-xl bg cursor-pointer'>
                          <Link href='/sign-in'>
                            <LogIn />
                          </Link>
                        </div>
                        {/* <SignInButton /> */}
                      </SignedOut>
                      {/* <Link href='/'>
                        <a className='icon'>
                          <i className='flaticon-avatar'></i>
                        </a>
                      </Link> */}
                    </li>
                    <li className='hero-nav-btn'>
                      <Link href='/add-listing'>
                        <a className='main-btn icon-btn'>Add Listing</a>
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
