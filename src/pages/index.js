import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";


const HomePage = ({allNews}) => {
  console.log(allNews);
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
      <Banner />
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

// data fetching
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  //client side e run korena. tai browser console e kono data show korbe na. data show korbe jei terminal theke project run hocche sei terminal e
  console.log(data);  
  return {
    props:{
      allNews:data,
    },
    revalidate : 3,  //kotokkhn por por ei page ta rebuild hobe
  };
};
