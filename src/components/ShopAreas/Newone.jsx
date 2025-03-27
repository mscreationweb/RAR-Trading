import React from "react";
import ShopItem from "./ShopItem";
import { ShopItems } from "./ShopItems";
import { Link } from "react-router-dom";

const Newone = () => {
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
                   className="nav-link"
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
                   className="nav-link active"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="true"
                 >
                 Industrial & Automotive Batteries
                 </h5></Link> 
               </li>


               </ul>
           </div>
         </div>
               <div className="col-lg-12">
        
        {/* <div className="project-nav-wrap mb-40">old */}
        <div className="project-nav-wrap mb-40">
        
          <ul className="nav nav-tabs" id="myTab" role="tablist">
{/* 
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
                   className="nav-link"
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
               </li> */}














               {/* <li className="nav-item" role="presentation">
                 <p
                   className="nav-link active"
                   id="all-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#all-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="all-tab-pane"
                   aria-selected="true"
                 >
                   Allss
                 </p>

               </li> */}
               {/* <Link to='/Chemical'>Chemical</Link> */}
               {/* <li className="nav-item" role="presentation">
                 <button
                   className="nav-link"
                   id="office-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#office-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="office-tab-pane"
                   aria-selected="false"
                 >
                   Home
                 </button>
               </li> */}
               {/* <li className="nav-item" role="presentation">
                 <button
                   className="nav-link"
                   id="home-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#home-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="home-tab-pane"
                   aria-selected="false"
                 >
                   cleaning
                 </button>
               </li> */}
               {/* <li className="nav-item" role="presentation">
                 <button
                   className="nav-link"
                   id="outdoor-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#outdoor-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="outdoor-tab-pane"
                   aria-selected="false"
                 >
                   Outdoor
                 </button>
               </li> */}
               {/* <li className="nav-item" role="presentation">
                 <button
                   className="nav-link"
                   id="laundry-tab"
                   data-bs-toggle="tab"
                   data-bs-target="#laundry-tab-pane"
                   type="button"
                   role="tab"
                   aria-controls="laundry-tab-pane"
                   aria-selected="false"
                 >
                   Laundry Service
                 </button>
               </li> */}
             </ul>
           </div>
         </div>
       </div>







        

       <div className="shop-item-wrap">
  <div className="col-lg-12 col-md-6 col-sm-9">
    <div className="col">
      {/* Row 1 */}
      <div className="row">
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
              <img src="/img/AllRAR/newone/1.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/2.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/3.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/4.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/5.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
       
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/7.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/8.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/9.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="shop-thumb">
            <Link>
            <img src="/img/AllRAR/newone/6.webp" alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
      </div>
      {/* Row 2 */}
    
      {/* Row 3 - Added 5 & 6 */}
      
      {/* Row 4 - Added 7 & 8 */}
     
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Newone;
