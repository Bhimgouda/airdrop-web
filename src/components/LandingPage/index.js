import React, { useContext } from 'react';
import { classNames } from '../../utils/helpers';
import { ThemeContext } from '../../context/ThemeContext';

const LandingPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="p-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="bg-moi-gradient inline-block text-transparent text-[71px] bg-clip-text text-center">
            Personalized Internet
          </p>
          <p className={classNames(isDarkMode ? 'text-moi-snowfall' : 'text-moi-purple-400', 'font-semibold text-4xl')}>
            Your Network. Your Way.
          </p>
          <p
            className={classNames(
              isDarkMode ? 'text-moi-snowfall' : 'text-moi-purple-400',
              'w-[600px] pt-2 text-center text-lg',
            )}
          >
            MOI is a transformational p2p protocol and an open network that empowers its users to dynamically control
            their identity, storage and digital assets based on their unique needs.
          </p>
        </div>
        <div className="flex  space-x-6 pt-4 px-64  items-center justify-between position ">
          <button className="rounded text-sm  selector 	 text-center button_color  px-10 py-3 font-normal font-sans text-white transition focus:outline-none">
            Get Started
          </button>
          <button className=" flex  button_color2  selector2  rounded-md font-semibold text-black  focus:outline-none">
            Ecosystems
          </button>
        </div>

        <img className="mx-auto pb-[130px]" src={'/images/moiBg.svg'} />
        <div className="p-auto flex flex-col justify-start gap-y-[130px]">
          <div className="flex justify-around">
            <img src="images/lock.svg" alt="lock" />

            <div
              className={classNames(
                isDarkMode ? 'text-moi-snowfall' : 'text-moi-purple-400',
                'max-w-[443px] px-12 py-8 dark:bg-card-gradient rounded-lg shadow bg-first-text dark:border-gray-700',
              )}
            >
              <a href="#">
                <p className="mb-2 text-2xl font-semibold">We must decentralize</p>
              </a>
              <p className="mb-6 font-light text-[22.64px] leading-[145%]">
                Human Interactions are primarily Personalized Value Transfers. Today's digital networks treat value
                transfers as information transfers and a employ a programmatic way of value discovery resulting in a
                systemic and unsustainable model for the Internet of Value.{' '}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-7 py-[9px] text-2xl font-medium text-center bg-button-gradient rounded-md mt-5"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p
              className={classNames(
                isDarkMode ? 'text-moi-snowfall' : 'text-moi-purple-400',
                'mt-4 text-[32px] font-semibold not-italic leading-[145%] pb-[72px]',
              )}
            >
              Distribution
            </p>
            <img src="images/distribution.svg" alt="Distribution" className="w-[676px] h-[584px]" />
          </div>
          <div className="flex justify-center">{/* <h1>Card Component</h1> */}</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
