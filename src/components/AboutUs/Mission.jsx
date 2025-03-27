import React from "react";
import { Link } from "react-router-dom";

const Mission = ({ item }) => {
  return (
    <div className="blog-item-two">
      {/* <div className="blog-thumb-two">
        <Link to={item.url}>
          <img src={item.src2} alt="" />
        </Link>
      </div> */}
      
  <div className="row justify-content-center mt-5 " style={{marginBottom:'200px'}} >
  <div className="col-lg-6 col-md-6 mb-5">
    <div className="blog-content-two"  id="mission">
      <h5 className="tag">RAR Cleaning Equipment      </h5>
      <div className="blog-meta">
        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          High-Quality Products – Sourced from trusted brands and manufacturers.

          </li>
         
        </ul>
        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Competitive Pricing – Cost-effective cleaning solutions for every budget.

          </li>
         
        </ul>

        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Expert Guidance – Professional advice to help you choose the right cleaning equipment.

          </li>
         
        </ul>



        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Reliable After-Sales Support – Ensuring long-term performance and customer satisfaction.


          </li>
         
        </ul>


        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Timely Delivery – Fast and efficient supply of cleaning products and equipment.


          </li>
         
        </ul>
      </div>
    </div>
  </div>

  <div className="col-lg-6 col-md-6">
    <div className="blog-content-two"  id="missions">
      <h5 className="tag">RAR Trading</h5>
      <div className="blog-meta">
      <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Quality Assurance – We source products from reputable manufacturers to ensure durability and performance.
          </li>
         
        </ul>


        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Competitive Pricing – Offering cost-effective solutions without compromising quality.

          </li>
         
        </ul>


        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Reliable Customer Support – Dedicated to assisting customers with product selection and after-sales service.


          </li>
         
        </ul>


        <ul className="list-wrap">
          <li >
          <i className="fas fa-check-circle" />
          Timely Delivery – Ensuring prompt and efficient supply of products.
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</div>


      
    </div>
  );
};

export default Mission;
