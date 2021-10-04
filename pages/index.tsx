
import Script from "next/script";
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout';
import Button from '../components/Button';
import HorizontalCard from '../components/HomeCard/horizontal-card';
import VerticalCard from '../components/HomeCard/vertical-card';
import image1 from '../public/assests/Pngtree-memphis-style-line-point-line-3797599.png'
import jacket from '../public/assests/jacket.png';
import image2 from '../public/assests/image2.png';
import image3 from '../public/assests/image3.png';
import image4 from '../public/assests/image4.png';
import image5 from '../public/assests/image5.png';
import image6 from '../public/assests/image6.png';
import image7 from '../public/assests/image7.png';
import Products from '../components/Products';


interface HomeProps {
  data: any;
  targetdata: any;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {targetImageContent , targetCountrySpecificContent } = props.targetdata.content;
  return (
    <Layout data={props.data}>
    <div className={styles.container}>
      
      <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>⚡</span>New In
            </h1>
            <h3 className={styles.description}>
              <span className={styles.emoji}>💗</span> {targetCountrySpecificContent || 'Place holder'}
            </h3>
            <div className={styles.headerButtons}>
          
            </div>
          </div>
          <Products>
            <HorizontalCard
                bgColor="#BCE7F0"
                title="Get up to 50% off"
                image={targetImageContent || image1}
              />
              <HorizontalCard
                bgColor="#A9DFBF"
                title="Get up to 30% off"
                image={image2}
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Hugo Boss Leather Jacket"
                image={jacket}
                price= {300}
                sale_price={200} 
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Hugo Boss Leather Jacket"
                image={image3}
                price= {300}
                sale_price={200} 
              />
            </Products>
            <Products reverse>
              <HorizontalCard
                  bgColor="#EBDEF0"
                  title="Get up to 50% off"
                  image={image5}
                />
                <HorizontalCard
                  bgColor="#BCE7F0"
                  title="Get up to 50% off"
                  image={image6}
                />  
              <VerticalCard
                  bgColor="#f6f6f6"
                  name="Hugo Boss Leather Jacket"
                  image={image7}
                  price= {300}
                  sale_price={200} 
                />
                <VerticalCard
                  bgColor="#f6f6f6"
                  name="Hugo Boss Leather Jacket"
                  image={image4}
                  price= {300}
                  sale_price={200} 
                />
            </Products>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
           Powered by Sumanta Pakira 
          </span>
        </a>
      </footer>
      <Script src="https://assets.adobedtm.com/ed8972503195/79c9f2afc55b/launch-5b9afb97c763-development.min.js" async/>
    </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //const data = await res.json();
  const data = {
    type : 'Home Page',
    pageName: 'Next e-Commerce Home Page',
    title: 'content:next:en:home'
  }
 
  const targetres = await fetch("http://localhost:3005/api/targetcontent");
  const targetdata = await targetres.json();
  console.log("targetdata : ",targetdata)

  return {
    props: {
      data,
      targetdata,
    },
  };
}

export default Home
