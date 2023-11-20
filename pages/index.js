// import dynamic from "next/dynamic";
import Head from "next/head";
import HomeScreen from "./Screens/HomeScreen/index";

// const HomeScreen = dynamic(() => import("./Screens/HomeScreen/index"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />
    </>
  );
}
