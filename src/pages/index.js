import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsesQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";



const HomePage = ({allNews}) => {
  // data from rtk query
  const { data, isLoading, isError, error } = useGetNewsesQuery();
  // console.log(allNews);

  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,  //server side rendering jate na hoy
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <AllNews allNews={allNews}/>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

/**
 * getStaticProps er structure(export korte hobe)
 *getStaticProps ei function pages folder er components er baire onno folder er components e use kora jabe na.
 
 export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  return {
    props:{
    }
  };
};

 * 
 */

// data fetching(static side generation, build time e file gula geenrate hocche)
export const getServerSideProps = async () => {


  const res = await fetch("http://localhost:5000/news"); //data from internal json server
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const data = await res.json();


  //client side e run korena. tai browser console e kono data show korbe na. data show korbe jei terminal theke project run hocche sei terminal e
  // console.log(data);  

  return {
    props:{
      allNews:data,   //data from internal dbms
      // allNews: data.data,  // when using internal API connected with mongoDB
    },

    // revalidate : 3,  //kotokkhn por por ei page ta rebuild hobe. ssr e proyojon hoyna.
  };
};
