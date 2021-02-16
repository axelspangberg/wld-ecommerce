const Header = () => {
  return (
    <header>
      <div className='relative bg-white'>
        <div className='max-w-full mx-auto'>
          <div className='flex justify-between border-b-2 border-gray-500 py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start'>
              <a href='#'>
                <p className='font-sans text-3xl font-bold'>WE LOVE DENIM</p>
              </a>
            </div>
            <div className='flex justify-end lg:w-0 lg:flex-1 md:w-0 md:flex-1'>
              <input
                type='text'
                placeholder='SEARCH FOR ITEM(S)'
                className='px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-lg outline-none focus:outline-none focus:shadow-outline w-1/2'
              ></input>
              <div
                id='search-toggle'
                className='search-icon cursor-pointer pl-6 mt-2'
              >
                <svg
                  className='fill-current pointer-events-none text-grey-darkest w-7 h-7 inline'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'></path>
                </svg>
              </div>
              <div
                id='shopping-toggle'
                className='search-icon cursor-pointer pl-6 mt-2'
              >
                <svg
                  className='fill-current pointer-events-none text-grey-darkest w-7 h-7 inline'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
