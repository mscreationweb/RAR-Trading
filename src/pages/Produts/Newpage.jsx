import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import Cleaning from "../../components/ShopAreas/Cleaning";
import Tationeries from "../../components/ShopAreas/Tationeries";
import Newone from "../../components/ShopAreas/Newone";

const Newpage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={"Industrial & Automotive Batteries"} subtitle={"Shop "} />
      {/* <Cleaning/> */}
      <Newone />
    </Layout>
  );
};

export default Newpage;