import Head from 'next/head';

import Header from '@components/Navigation/Header';
import Footer from '@components/Navigation/Footer';
import Navbar from '@components/Navigation/Navbar';
import Main from '@components/Main';

import { fetchEntries } from 'utils/contentfulPosts';
import Post from '@components/Post';

export default function App({ posts }) {
  return (
    <div>
      <Head>
        <title>WLD Ecommerce</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <Header title='WLD Ecommerce' />
        <div className='flex flex-row pt-6'>
          <div className='w-3/12'>
            <Navbar />
          </div>
          <div className='w-9/12'>
            <Main />
          </div>
        </div>

        {/* <div className='posts'>
          {posts.map((p) => {
            return (
              <Post
                key={p.date}
                date={p.date}
                image={p.image.fields}
                title={p.title}
              />
            );
          })}
        </div> */}

        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
