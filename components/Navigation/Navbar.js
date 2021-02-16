const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className='space-y-2'>
          <li className='text-2xl font-sans font-semibold uppercase hover:text-gray-500'>
            <a href='#' className=''>
              <span>new item</span>
            </a>
          </li>
          <li className='text-2xl font-sans font-semibold uppercase hover:text-gray-500'>
            <a href='#'>
              <span className=''>categories</span>
            </a>
          </li>
          <li className='text-2xl font-sans font-semibold uppercase hover:text-gray-500'>
            <a href='#' className=''>
              <span>brands</span>
            </a>
          </li>
          <li className='text-2xl font-sans font-semibold uppercase text-red-500 hover:text-red-600'>
            <a href='#' className=''>
              <span>sale</span>
            </a>
          </li>
        </ul>
      </div>

      <div className='pt-6'>
        <ul className='space-y-2'>
          <li className='text-2xl font-sans font-semibold uppercase hover:text-gray-500'>
            <a href='#' className=''>
              <span>comming soon</span>
            </a>
          </li>
          <li className='text-2xl font-sans font-semibold uppercase hover:text-gray-500'>
            <a href='#' className=''>
              <span>blog</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
