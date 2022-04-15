import { FC } from "react";
import Layout from "../../layout/Layout";
import { IHomePage } from "./homePage.interface";

const HomePage: FC<IHomePage> = () => {
  return (
    <>
      <Layout>
        <p>HomePage</p>
      </Layout>
    </>
  );
};

export default HomePage;
