import styles from "./layout.module.scss";
import Header from '../Header';
import CategoriesBar from '../Categories';
import Head from 'next/head';

declare const window: any;
interface LayoutProps {
    children: any;
    noCategories?: string;
    data?:any;
  }
  
  const Layout: React.FC<LayoutProps> = (props : LayoutProps) => {
    if (typeof window !== 'undefined') {
      window.digitalData = {
        page: {
            pageInfo:{
                pageName :  props.data.pageName,
                title: props.data.title,
                category: props.data.type
            }
        }
      }
    }
   
    return (
      <>
      <Head>
        <title> {props.data.pageName}  </title>
        <meta name="description" content= {props.data.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.container}>
          <div className={styles.content}>
            <Header />
            <div className={styles.main}>
            {!props.noCategories && <CategoriesBar />}
              {props.children}
            </div>
          </div>
        </div>
      </>  
      );
  };

  export default Layout;