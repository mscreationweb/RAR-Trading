import React from "react";
import ShopItem from "./ShopItem";
import { TationeriesItem } from "./TationeriesItem";
import { Link } from "react-router-dom";

const Tationeries = () => {
  return (
    <section className="shop-area pt-130 pb-130">
      <div className="container">

      <div className="row align-items-center">
         
         <div className="col-lg-12">
        
           <div className="project-nav-wrap ">
           
             <ul className="nav nav-tabs" id="myTab" role="tablist">
             <li className="nav-item" role="presentation">
               <Link to='/commercial' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
                   Commercial & Industrial Equipment
                 </h5></Link> 
               </li>
             <li className="nav-item" role="presentation">
                <Link to='/Cleaning' ><h5
                    className="nav-link"
                   id="all-tab"
                   data-bs-toggle="tab"
                  
                   type="button"
                   role="tab"
                   aria-controls="all-tab-pane"
                   aria-selected="true"
                 >
                  Cleaning Trolleys
                  & Accessories
                 </h5></Link> 

               </li>
               <li className="nav-item" role="presentation">
               <Link to='/Dispenserpaper' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
                   Dispenser &
                   Paper Products
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/printers ' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
                 Printers & Office gadgets
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/Hygiene-protective' ><h5
                    className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
                 Hygiene &
                 Protective Wears
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/Disposablel-products' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
             Disposable
             Products
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/Garbage-bins' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
          Garbage Bins
          & Bags
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/vacuum-cleaners' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
         Vacuum
         Cleaners
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/tationeries' ><h5
                  className="nav-link active"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
       Stationeries
                 </h5></Link> 
               </li>
               <li className="nav-item" role="presentation">
               <Link to='/industrial' ><h5
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
       Industrial & Automotive Batteries
                 </h5></Link> 
               </li>

               </ul>
           </div>
         </div>
               <div className="col-lg-12">
        
        {/* <div className="project-nav-wrap mb-40">old */}
       
         </div>
       </div>








        <div className="shop-top-wrap mb-50">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              
              {/* <div className="shop-showing-result">
                <p>Showing all 9 results</p>
              </div> */}
            </div>
            {/* <div className="col-lg-6 col-sm-6">
              <div className="shop-ordering">
                <select name="orderby" className="orderby">
                  <option value="Default sorting">Default sorting</option>
                  <option value="Sort by popularity">Sort by popularity</option>
                  <option value="Sort by average rating">
                    Sort by average rating
                  </option>
                  <option value="Sort by latest">Sort by latest</option>
                  <option value="Sort by latest">Sort by latest</option>
                </select>
              </div>
            </div> */}
          </div>
        </div>

        <div className="shop-item-wrap" >
        <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1" >
            {TationeriesItem.map((x, index) => (
              <div key={index} className="col">
                <ShopItem item={x} />
              </div>
            ))}
          </div>

          {/* <div className="autoload-btn text-center mt-30">
            <a href="#!" className="btn">
              Auto load
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Tationeries;
