'use client';
import CalendarPreview from '@/src/components/CalendarPreview';
import VideoPopup from '@/src/components/VideoPopup';
import Layout from '@/src/layouts/Layout';
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from '@/src/sliderProps';
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className='hero-area'>
        <div className='hero-wrapper-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='hero-content'>
                  <h1 className='wow fadeInUp'>Dream Explore Discover</h1>
                  <h3 className='wow fadeInDown'>
                    People Don’t Take,Trips Take People
                  </h3>
                  <div className='hero-search-wrapper wow fadeInUp'>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className='row'>
                        <div className='col-lg-5 col-md-4 col-sm-12'>
                          <div className='form_group'>
                            <input
                              type='search'
                              className='form_control'
                              placeholder='Search By Category'
                              name='search'
                              required
                            />
                            <i className='ti-ink-pen'></i>
                          </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                          <div className='form_group'>
                            <input
                              type='text'
                              className='form_control'
                              placeholder='Location'
                              name='location'
                              required
                            />
                            <i className='ti-location-pin'></i>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12'>
                          <div className='form_group'>
                            <button className='main-btn icon-btn'>
                              Search Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className='tags'>
                    <span>Popular:</span>
                    <a href='#'>Saloon</a>,<a href='#'>Restaurant</a>,
                    <a href='#'>Game</a>,<a href='#'>Counter</a>,
                    <a href='#'>Train Station</a>,<a href='#'>Parking</a>,
                    <a href='#'>Shooping</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Section ======--> */}
      {/* <!--====== Start Category Section ======--> */}
      <section className='category-area'>
        <div className='container'>
          <div className='category-wrapper-one wow fadeInDown'>
            <div className='row no-gutters'>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-government'></i>
                    </div>
                    <h6>Museums</h6>
                  </div>
                  <Link className='category-btn' href='/'>
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-serving-dish'></i>
                    </div>
                    <h6>Restaurant</h6>
                  </div>
                  <Link className='category-btn' href='/'>
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-game-controller'></i>
                    </div>
                    <h6>Game Field</h6>
                  </div>
                  <Link className='category-btn' href='/'>
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-suitcase'></i>
                    </div>
                    <h6>Job & Feed</h6>
                  </div>
                  <Link className='category-btn' href='/'>
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-gift-box'></i>
                    </div>
                    <h6>Party Center</h6>
                  </div>
                  <Link className='category-btn' href='/'>
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-dumbbell'></i>
                    </div>
                    <h6>Fitness Zone</h6>
                  </div>
                  <Link className='category-btn' href='/'>
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Category Section ======--> */}
      {/* <!--====== Start Listing Section ======--> */}
      <section className='listing-grid-area pt-115 pb-75'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-75 wow fadeInUp'>
                <span className='sub-title'>Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='listing-item listing-grid-one mb-45 wow fadeInUp'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-1.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-chef'></i>
                      </div>
                      <div className='title'>
                        <h6>Restaurant</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>Food Corner</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='listing-item listing-grid-one mb-45 wow fadeInUp'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-2.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-government'></i>
                      </div>
                      <div className='title'>
                        <h6>Museums</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>Central History</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='listing-item listing-grid-one mb-45 wow fadeInUp'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-3.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Fitness</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-dumbbell'></i>
                      </div>
                      <div className='title'>
                        <h6>Fitness</h6>
                      </div>
                    </div>
                    <span className='status st-close'>Close</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>Xtream Gym</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='listing-item listing-grid-one mb-45 wow fadeInUp'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-4.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-suitcase'></i>
                      </div>
                      <div className='title'>
                        <h6>Job & Feed</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>Mega Agency</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='listing-item listing-grid-one mb-45 wow fadeInUp'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-5.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-shopping'></i>
                      </div>
                      <div className='title'>
                        <h6>Central Plaza</h6>
                      </div>
                    </div>
                    <span className='status st-close'>Close</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>Central Plaza</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='listing-item listing-grid-one mb-45 wow fadeInUp'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-6.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-color-palette'></i>
                      </div>
                      <div className='title'>
                        <h6>Art Gallery</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>National Art</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Listing Section ======--> */}
      {/* <!--====== Start offer Section ======--> */}
      <section className='cta-area'>
        <div
          className='cta-wrapper-one bg_cover'
          style={{ backgroundImage: `url(assets/images/bg/cta-bg-1.jpg)` }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='cta-content-box text-center wow fadeInUp'>
                  <img src='assets/images/icon-1.png' alt='offer icon' />
                  <h2>Splash Yourself Bigger Offer on Everyday</h2>
                  <Link className='main-btn icon-btn' href='/how-work'>
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End offer Section ======--> */}
      {/* <!--====== Start Features Section ======--> */}
      <section className='features-area'>
        <div className='features-wrapper-one pt-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='features-img wow fadeInLeft'>
                  <img
                    src='assets/images/features/features-1.jpg'
                    alt='Features Image'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='features-content-box features-content-box-one'>
                  <div className='section-title section-title-left mb-25 wow fadeInUp'>
                    <span className='sub-title'>Our Speciality</span>
                    <h2>Comprehnsive All Great Destination Here</h2>
                  </div>
                  <h5>
                    Risus urnas Iaculis per amet vestibulum luctus.tincidunt
                    ultricies aenean quam eros eleifend sodales cubilia mattis
                    quam.
                  </h5>
                  <ul className='features-list-one'>
                    <li
                      className='list-item wow fadeInUp'
                      data-wow-delay='10ms'
                    >
                      <div className='icon'>
                        <i className='flaticon-find'></i>
                      </div>
                      <div className='content'>
                        <h5>Find What You Want</h5>
                        <p>
                          Rhoncus dolor quam etiam mattis, tincidunt nec
                          lobortis sociis facilisi aenean netus tempor duis.
                        </p>
                      </div>
                    </li>
                    <li
                      className='list-item wow fadeInUp'
                      data-wow-delay='20ms'
                    >
                      <div className='icon'>
                        <i className='flaticon-place'></i>
                      </div>
                      <div className='content'>
                        <h5>Easy Choose Your Place</h5>
                        <p>
                          Rhoncus dolor quam etiam mattis, tincidunt nec
                          lobortis sociis facilisi aenean netus tempor duis.
                        </p>
                      </div>
                    </li>
                    <li
                      className='list-item wow fadeInUp'
                      data-wow-delay='30ms'
                    >
                      <div className='icon'>
                        <i className='flaticon-social-care'></i>
                      </div>
                      <div className='content'>
                        <h5>Live Online Assistance</h5>
                        <p>
                          Rhoncus dolor quam etiam mattis, tincidunt nec
                          lobortis sociis facilisi aenean netus tempor duis.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Features Section ======--> */}
      {/* <!--====== Start Place Section ======--> */}
      <section className='place-area pt-115 pb-110'>
        <div className='container-fluid place-container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>Feature Places</span>
                <h2>Explore By Destination</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className='place-slider-one wow fadeInDown'
          >
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/place-1.jpg' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Australia</h3>
                    <Link className='arrow-btn' href='/listing-grid'>
                      <i className='ti-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/place-2.jpg' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Australia</h3>
                    <Link className='arrow-btn' href='/listing-grid'>
                      <i className='ti-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/place-3.jpg' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Australia</h3>
                    <Link className='arrow-btn' href='/listing-grid'>
                      <i className='ti-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/place-4.jpg' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Australia</h3>
                    <Link className='arrow-btn' href='/listing-grid'>
                      <i className='ti-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/place-2.jpg' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Australia</h3>
                    <Link className='arrow-btn' href='/listing-grid'>
                      <i className='ti-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Place Section ======--> */}

      {/* <!--====== Start Popular Listing Section ======--> */}
      <section className='listing-grid-area pt-75 pb-110'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <Slider
            {...ListingSliderOne}
            className='listing-slider-one wow fadeInDown'
          >
            <div className='listing-item listing-grid-item-two'>
              <div className='listing-thumbnail'>
                <img
                  src='assets/images/listing/listing-grid-7.jpg'
                  alt='Listing Image'
                />
                <a href='#' className='cat-btn'>
                  <i className='flaticon-chef'></i>
                </a>
                <span className='featured-btn'>Featured</span>
                <ul className='ratings ratings-four'>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li>
                    <span>
                      <a href='#'>(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>Pizza Recipe</Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-open'>Open</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='listing-item listing-grid-item-two'>
              <div className='listing-thumbnail'>
                <img
                  src='assets/images/listing/listing-grid-8.jpg'
                  alt='Listing Image'
                />
                <a href='#' className='cat-btn'>
                  <i className='flaticon-dumbbell'></i>
                </a>
                <ul className='ratings ratings-three'>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li>
                    <span>
                      <a href='#'>(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>Gym Ground</Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-close'>close</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='listing-item listing-grid-item-two'>
              <div className='listing-thumbnail'>
                <img
                  src='assets/images/listing/listing-grid-9.jpg'
                  alt='Listing Image'
                />
                <a href='#' className='cat-btn'>
                  <i className='flaticon-government'></i>
                </a>
                <span className='featured-btn'>Featured</span>
                <ul className='ratings ratings-five'>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li>
                    <span>
                      <a href='#'>(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>City Palace</Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-open'>Open</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='listing-item listing-grid-item-two'>
              <div className='listing-thumbnail'>
                <img
                  src='assets/images/listing/listing-grid-1.jpg'
                  alt='Listing Image'
                />
                <a href='#' className='cat-btn'>
                  <i className='flaticon-chef'></i>
                </a>
                <span className='featured-btn'>Featured</span>
                <ul className='ratings ratings-two'>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li className='star'>
                    <i className='flaticon-star-1'></i>
                  </li>
                  <li>
                    <span>
                      <a href='#'>(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>Pizza Recipe</Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-open'>Open</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Popular Listing Section ======--> */}
      {/* <!--====== Start Intro Video Section ======--> */}
      <section className='intro-video'>
        <div
          className='intro-wrapper-one bg_cover pt-115'
          style={{ backgroundImage: `url(assets/images/bg/video-bg-1.jpg)` }}
        >
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <div className='play-content play-content-one text-center wow fadeInLeft'>
                  <a
                    href='#'
                    className='video-popup'
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className='flaticon-play-button'></i>
                  </a>
                  <h5>Play Video</h5>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='intro-content-box intro-content-box-one wow fadeInRight'>
                  <div className='section-title section-title-left section-title-white mb-35'>
                    <span className='sub-title'>Checkout List</span>
                    <h2>Professional planners for your vacation</h2>
                  </div>
                  <p>
                    Risus urnas Iaculis per amet vestibulum luctus tincidunt
                    ultricies aenean quam eros eleifend sodales cubilia mattis
                    quam.
                  </p>
                  <Link className='main-btn icon-btn' href='/listing-grid'>
                    Explore List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='place-area flex items-center justify-center w-full pt-115'>
        <CalendarPreview />
      </section>
      {/* <!--====== End Intro Video Section ======--> */}
      {/* <!--====== Start Newsletter Section ======--> */}
      <section className='newsletter-area'>
        <div className='container'>
          <div
            className='newsletter-wrapper newsletter-wrapper-one bg_cover'
            style={{
              backgroundImage: `url(assets/images/bg/newsletter-bg-1.jpg)`,
            }}
          >
            <div className='row'>
              <div className='col-lg-5'>
                <div className='newsletter-content-box-one wow fadeInLeft'>
                  <div className='icon'>
                    <i className='flaticon-email'></i>
                  </div>
                  <div className='content'>
                    <h2>Get Special Rewards</h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='newsletter-form wow fadeInRight'>
                  <div className='form_group'>
                    <input
                      type='email'
                      className='form_control'
                      placeholder='Enter Address'
                      name='email'
                      required
                    />
                    <i className='ti-location-pin'></i>
                    <button className='main-btn'>Subscribe +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Newsletter Section ======--> */}
      {/* <!--====== Start Client Section ======--> */}
      <div className='client-area pt-120'>
        <div className='client-wrapper-one pb-120'>
          <div className='container'>
            <Slider
              {...ClientSliderOne}
              className='client-slider-one wow fadeInDown'
            >
              <div className='client-item'>
                <div className='client-img'>
                  <a href='#'>
                    <img src='assets/images/client/01.png' alt='Client Image' />
                  </a>
                </div>
              </div>
              <div className='client-item'>
                <div className='client-img'>
                  <a href='#'>
                    <img src='assets/images/client/02.png' alt='Client Image' />
                  </a>
                </div>
              </div>
              <div className='client-item'>
                <div className='client-img'>
                  <a href='#'>
                    <img src='assets/images/client/03.png' alt='Client Image' />
                  </a>
                </div>
              </div>
              <div className='client-item'>
                <div className='client-img'>
                  <a href='#'>
                    <img src='assets/images/client/04.png' alt='Client Image' />
                  </a>
                </div>
              </div>
              <div className='client-item'>
                <div className='client-img'>
                  <a href='#'>
                    <img src='assets/images/client/02.png' alt='Client Image' />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* <!--====== End Client Section ======--> */}
    </Layout>
  );
};
export default Index;
