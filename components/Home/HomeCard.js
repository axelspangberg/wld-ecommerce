import Image from 'next/image';

const HomeCard = () => {
  return (
    <div className='hover:bg-red-700'>
      <Image src='/test.jpg' alt='me' width={500} height={600} />
    </div>
  );
};

export default HomeCard;
