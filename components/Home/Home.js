import HomeCard from '@components/Home/HomeCard';

const Home = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div>
        <HomeCard />
      </div>
      <div>
        <HomeCard />
      </div>
      <div>
        <HomeCard />
      </div>
      <div>
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
