import type { NextPage } from "next";
import Layout from "../app/components/layout/Layout";
import HomePage from "../app/components/screens/home/HomePage";

const Home: NextPage = () => {
  return (<div>
    <Layout>
      <HomePage></HomePage>
    </Layout>
  </div>)
};

export default Home;
