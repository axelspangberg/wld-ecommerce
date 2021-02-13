import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function Header() {
//   return <FontAwesomeIcon icon={faCoffee} />;
// }

export default function Header() {
  return (
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-300 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>VLD Ecommerce</span>
              <p class='font-sans text-3xl font-bold'>WE LOVE DENIM</p>
            </a>
          </div>
          <div className='flex justify-end lg:w-0 lg:flex-1'>
            <div class='grid grid-cols-2 gap-y-4 gap-x-8'>
              <a href='#'>
                <span className='sr-only'>VLD Ecommerce</span>
                <img
                  className='h-4 w-auto sm:h-6'
                  src='/search-solid.svg'
                  alt=''
                ></img>
              </a>
              <a href='#'>
                <span className='sr-only'>VLD Ecommerce</span>
                <img
                  className='h-4 w-auto sm:h-6'
                  src='/shopping-cart-solid.svg'
                  alt=''
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
