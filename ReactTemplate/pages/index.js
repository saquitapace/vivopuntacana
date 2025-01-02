import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../src/components/LanguageSwitcher';

const Counter = dynamic(() => import('../src/components/Counter'), {
  ssr: false,
});

import VideoPopup from '../src/components/VideoPopup';
import Layout from '../src/layouts/Layout';
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from '../src/sliderProps';
import CalendarPreview from '@/src/components/CalendarPreview';

const Index = () => {
  const [video, setVideo] = useState(false);
  const { t } = useTranslation('common');

  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className='hero-area'>
        <div className='hero-wrapper-one'>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-lg-8'>
                <div className='hero-content'>
                  <h1 className='wow fadeInUp' wow-data-delay='30mss'>
                    {t('hero.title')}
                  </h1>
                  <h3 className='wow fadeInDown' wow-data-delay='50ms'>
                    {t('hero.subtitle')}
                  </h3>
                  <div
                    className='hero-search-wrapper wow fadeInUp'
                    wow-data-delay='70ms'
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className='row'>
                        <div className='col-lg-5 col-md-4 col-sm-12'>
                          <div className='form_group'>
                            <input
                              type='search'
                              className='form_control'
                              placeholder={t('hero.searchByCategory')}
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
                              placeholder={t('hero.location')}
                              name='location'
                              required
                            />
                            <i className='ti-location-pin'></i>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12'>
                          <div className='form_group'>
                            <button className='main-btn icon-btn'>
                              {t('hero.searchNow')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className='tags'>
                    <span>{t('popular.title')}:</span>
                    <a href='#'>{t('popular.places.saloon')}</a>,
                    <a href='#'>{t('popular.places.restaurant')}</a>,
                    <a href='#'>{t('popular.places.game')}</a>,
                    <a href='#'>{t('popular.places.counter')}</a>,
                    <a href='#'>{t('popular.places.trainStation')}</a>,
                    <a href='#'>{t('popular.places.parking')}</a>,
                    <a href='#'>{t('popular.places.shopping')}</a>
                  </p>
                </div>
              </div>
              <div className='col-lg-2 d-flex justify-content-end align-items-start mt-4'>
                <LanguageSwitcher />
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
                    <h6>{t('categories.museums')}</h6>
                  </div>
                  <Link href='/'>
                    <a className='category-btn'>
                      <i className='ti-arrow-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-serving-dish'></i>
                    </div>
                    <h6>{t('categories.restaurant')}</h6>
                  </div>
                  <Link href='/'>
                    <a className='category-btn'>
                      <i className='ti-arrow-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-game-controller'></i>
                    </div>
                    <h6>{t('categories.gameField')}</h6>
                  </div>
                  <Link href='/'>
                    <a className='category-btn'>
                      <i className='ti-arrow-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-suitcase'></i>
                    </div>
                    <h6>{t('categories.jobAndFeed')}</h6>
                  </div>
                  <Link href='/'>
                    <a className='category-btn'>
                      <i className='ti-arrow-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-gift-box'></i>
                    </div>
                    <h6>{t('categories.partyCenter')}</h6>
                  </div>
                  <Link href='/'>
                    <a className='category-btn'>
                      <i className='ti-arrow-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-4 category-column'>
                <div className='category-item category-item-one'>
                  <div className='info text-center'>
                    <div className='icon'>
                      <i className='flaticon-dumbbell'></i>
                    </div>
                    <h6>{t('categories.fitnessZone')}</h6>
                  </div>
                  <Link href='/'>
                    <a className='category-btn'>
                      <i className='ti-arrow-right'></i>
                    </a>
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
                <span className='sub-title'>{t('listing.featuredList')}</span>
                <h2>{t('listing.exploreDestination')}</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='10ms'
              >
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-1.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>{t('listing.featured')}</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-chef'></i>
                      </div>
                      <div className='title'>
                        <h6>{t('listing.restaurant')}</h6>
                      </div>
                    </div>
                    <span className='status st-open'>{t('listing.open')}</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>{t('listing.foodCorner')}</a>
                    </Link>
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
                          <a href='#'>({t('listing.reviews')} 02)</a>
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
                          <i className='ti-location-pin'></i>
                          {t('listing.californiaUSA')}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>{t('listing.save')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='20ms'
              >
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-2.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>{t('listing.featured')}</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-government'></i>
                      </div>
                      <div className='title'>
                        <h6>{t('listing.museums')}</h6>
                      </div>
                    </div>
                    <span className='status st-open'>{t('listing.open')}</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>{t('listing.centralHistory')}</a>
                    </Link>
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
                          <a href='#'>({t('listing.reviews')} 02)</a>
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
                          <i className='ti-location-pin'></i>
                          {t('listing.californiaUSA')}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>{t('listing.save')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='30ms'
              >
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-3.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>{t('listing.fitness')}</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-dumbbell'></i>
                      </div>
                      <div className='title'>
                        <h6>{t('listing.fitness')}</h6>
                      </div>
                    </div>
                    <span className='status st-close'>
                      {t('listing.close')}
                    </span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>{t('listing.xtreamGym')}</a>
                    </Link>
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
                          <a href='#'>({t('listing.reviews')} 02)</a>
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
                          <i className='ti-location-pin'></i>
                          {t('listing.californiaUSA')}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>{t('listing.save')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='40ms'
              >
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-4.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>{t('listing.featured')}</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-suitcase'></i>
                      </div>
                      <div className='title'>
                        <h6>{t('listing.jobAndFeed')}</h6>
                      </div>
                    </div>
                    <span className='status st-open'>{t('listing.open')}</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>{t('listing.megaAgency')}</a>
                    </Link>
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
                          <a href='#'>({t('listing.reviews')} 02)</a>
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
                          <i className='ti-location-pin'></i>
                          {t('listing.californiaUSA')}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>{t('listing.save')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='50ms'
              >
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-5.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>{t('listing.featured')}</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-shopping'></i>
                      </div>
                      <div className='title'>
                        <h6>{t('listing.centralPlaza')}</h6>
                      </div>
                    </div>
                    <span className='status st-close'>
                      {t('listing.close')}
                    </span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>{t('listing.centralPlaza')}</a>
                    </Link>
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
                          <a href='#'>({t('listing.reviews')} 02)</a>
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
                          <i className='ti-location-pin'></i>
                          {t('listing.californiaUSA')}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>{t('listing.save')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='60ms'
              >
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/listing-grid-6.jpg'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>{t('listing.featured')}</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-color-palette'></i>
                      </div>
                      <div className='title'>
                        <h6>{t('listing.artGallery')}</h6>
                      </div>
                    </div>
                    <span className='status st-open'>{t('listing.open')}</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>{t('listing.nationalArt')}</a>
                    </Link>
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
                          <a href='#'>({t('listing.reviews')} 02)</a>
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
                          <i className='ti-location-pin'></i>
                          {t('listing.californiaUSA')}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>{t('listing.save')}</a>
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
                  <h2>{t('offer.title')}</h2>
                  <Link href='/how-work'>
                    <a className='main-btn icon-btn'>{t('offer.exploreNow')}</a>
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
                    <span className='sub-title'>
                      {t('features.speciality')}
                    </span>
                    <h2>{t('features.comprehensiveDestination')}</h2>
                  </div>
                  <h5>{t('features.description')}</h5>
                  <ul className='features-list-one'>
                    <li
                      className='list-item wow fadeInUp'
                      data-wow-delay='10ms'
                    >
                      <div className='icon'>
                        <i className='flaticon-find'></i>
                      </div>
                      <div className='content'>
                        <h5>{t('features.findWhatYouWant')}</h5>
                        <p>{t('features.description1')}</p>
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
                        <h5>{t('features.easyChooseYourPlace')}</h5>
                        <p>{t('features.description2')}</p>
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
                        <h5>{t('features.liveOnlineAssistance')}</h5>
                        <p>{t('features.description3')}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='place-area flex items-center justify-center w-full pt-115'>
        <CalendarPreview />
      </section>
      {/* <!--====== End Features Section ======--> */}
      {/* <!--====== Start Place Section ======--> */}
      <section className='place-area pt-115 pb-110'>
        <div className='container-fluid place-container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>{t('place.featurePlaces')}</span>
                <h2>{t('place.exploreByDestination')}</h2>
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
                    <span className='listing'>{t('place.listing')} 10</span>
                    <h3 className='title'>{t('place.australia')}</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
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
                    <span className='listing'>{t('place.listing')} 10</span>
                    <h3 className='title'>{t('place.australia')}</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
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
                    <span className='listing'>{t('place.listing')} 10</span>
                    <h3 className='title'>{t('place.australia')}</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
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
                    <span className='listing'>{t('place.listing')} 10</span>
                    <h3 className='title'>{t('place.australia')}</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
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
                    <span className='listing'>{t('place.listing')} 10</span>
                    <h3 className='title'>{t('place.australia')}</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Place Section ======--> */}
      {/* <!--====== Start Download Section ======--> */}

      {/*<!--====== End Download Section ======--> */}
      {/* <!--====== Start Popular Listing Section ======--> */}
      <section className='listing-grid-area pt-75 pb-110'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>{t('listing.featuredList')}</span>
                <h2>{t('listing.exploreDestination')}</h2>
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
                <span className='featured-btn'>{t('listing.featured')}</span>
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
                      <a href='#'>({t('listing.reviews')} 02)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>
                    <a>{t('listing.pizzaRecipe')}</a>
                  </Link>
                </h3>
                <p>{t('listing.popularRestaurantInCalifornia')}</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-open'>{t('listing.open')}</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>
                        {t('listing.californiaUSA')}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>{t('listing.save')}</a>
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
                      <a href='#'>({t('listing.reviews')} 02)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>
                    <a>{t('listing.gymGround')}</a>
                  </Link>
                </h3>
                <p>{t('listing.popularRestaurantInCalifornia')}</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-close'>{t('listing.close')}</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>
                        {t('listing.californiaUSA')}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>{t('listing.save')}</a>
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
                <span className='featured-btn'>{t('listing.featured')}</span>
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
                      <a href='#'>({t('listing.reviews')} 02)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>
                    <a>{t('listing.cityPalace')}</a>
                  </Link>
                </h3>
                <p>{t('listing.popularRestaurantInCalifornia')}</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-open'>{t('listing.open')}</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>
                        {t('listing.californiaUSA')}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>{t('listing.save')}</a>
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
                <span className='featured-btn'>{t('listing.featured')}</span>
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
                      <a href='#'>({t('listing.reviews')} 02)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='listing-content'>
                <h3 className='title'>
                  <Link href='/listing-details-1'>
                    <a>{t('listing.pizzaRecipe')}</a>
                  </Link>
                </h3>
                <p>{t('listing.popularRestaurantInCalifornia')}</p>
                <span className='phone-meta'>
                  <i className='ti-tablet'></i>
                  <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  <span className='status st-open'>{t('listing.open')}</span>
                </span>
                <div className='listing-meta'>
                  <ul>
                    <li>
                      <span>
                        <i className='ti-location-pin'></i>
                        {t('listing.californiaUSA')}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='ti-heart'></i>
                        <a href='#'>{t('listing.save')}</a>
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
                  <h5>{t('intro.playVideo')}</h5>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='intro-content-box intro-content-box-one wow fadeInRight'>
                  <div className='section-title section-title-left section-title-white mb-35'>
                    <span className='sub-title'>{t('intro.checkoutList')}</span>
                    <h2>{t('intro.professionalPlannersForYourVacation')}</h2>
                  </div>
                  <p>{t('intro.description')}</p>
                  <Link href='/listing-grid'>
                    <a className='main-btn icon-btn'>
                      {t('intro.exploreList')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <h2>{t('newsletter.getSpecialRewards')}</h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='newsletter-form wow fadeInRight'>
                  <div className='form_group'>
                    <input
                      type='email'
                      className='form_control'
                      placeholder={t('newsletter.enterAddress')}
                      name='email'
                      required
                    />
                    <i className='ti-location-pin'></i>
                    <button className='main-btn'>
                      {t('newsletter.subscribe')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Newsletter Section ======--> */}
      {/* <!--====== Start Client Section ======--> */}
      <section className='client-area pt-120'>
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
      </section>
      {/* <!--====== End Client Section ======--> */}
      {/* <!--====== Start Blog Section ======--> */}
      <section className='blog-area pt-115 pb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>{t('blog.recentArticles')}</span>
                <h2>{t('blog.everySingleJournal')}</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='blog-post-item blog-post-item-one mb-40 wow fadeInUp'
                data-wow-delay='10ms'
              >
                <div className='post-thumbnail'>
                  <Link href='/blog-details'>
                    <a>
                      <img
                        src='assets/images/blog/blog-1.jpg'
                        alt='Blog Image'
                      />
                    </a>
                  </Link>
                  <div className='post-date'>
                    <a href='#'>
                      20 <span>{t('blog.oct')}</span>
                    </a>
                  </div>
                </div>
                <div className='entry-content'>
                  <a href='#' className='cat-btn'>
                    <i className='ti-bookmark-alt'></i>
                    {t('blog.toursAndTravel')}
                  </a>
                  <h3 className='title'>
                    <Link href='/blog-details'>
                      <a>{t('blog.duisNonummySociosMattisTempusPenatibus')}</a>
                    </Link>
                  </h3>
                  <div className='post-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-comments-smiley'></i>
                          <a href='#'>{t('blog.comment')} 0</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-id-badge'></i>
                          <a href='#'>{t('blog.byAdmin')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='blog-post-item blog-post-item-one mb-40 wow fadeInUp'
                data-wow-delay='20ms'
              >
                <div className='post-thumbnail'>
                  <Link href='/blog-details'>
                    <a>
                      <img
                        src='assets/images/blog/blog-2.jpg'
                        alt='Blog Image'
                      />
                    </a>
                  </Link>
                  <div className='post-date'>
                    <a href='#'>
                      20 <span>{t('blog.oct')}</span>
                    </a>
                  </div>
                </div>
                <div className='entry-content'>
                  <a href='#' className='cat-btn'>
                    <i className='ti-bookmark-alt'></i>
                    {t('blog.toursAndTravel')}
                  </a>
                  <h3 className='title'>
                    <Link href='/blog-details'>
                      <a>
                        {t('blog.litoraPhasellusInPhasellusCurabiturPortaEun')}
                      </a>
                    </Link>
                  </h3>
                  <div className='post-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-comments-smiley'></i>
                          <a href='#'>{t('blog.comment')} 0</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-id-badge'></i>
                          <a href='#'>{t('blog.byAdmin')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='blog-post-item blog-post-item-one mb-40 wow fadeInUp'
                data-wow-delay='310ms'
              >
                <div className='post-thumbnail'>
                  <Link href='/blog-details'>
                    <a>
                      <img
                        src='assets/images/blog/blog-3.jpg'
                        alt='Blog Image'
                      />
                    </a>
                  </Link>
                  <div className='post-date'>
                    <a href='#'>
                      20 <span>{t('blog.oct')}</span>
                    </a>
                  </div>
                </div>
                <div className='entry-content'>
                  <a href='#' className='cat-btn'>
                    <i className='ti-bookmark-alt'></i>
                    {t('blog.toursAndTravel')}
                  </a>
                  <h3 className='title'>
                    <Link href='/blog-details'>
                      <a>
                        {t('blog.mattisParturentTortorLectusLestieSapienDapus')}
                      </a>
                    </Link>
                  </h3>
                  <div className='post-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-comments-smiley'></i>
                          <a href='#'>{t('blog.comment')} 0</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-id-badge'></i>
                          <a href='#'>{t('blog.byAdmin')}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='button text-center mt-40'>
                <Link href='/blog'>
                  <a className='main-btn icon-btn'>{t('blog.viewBlog')}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Blog Section ======--> */}
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Index;
