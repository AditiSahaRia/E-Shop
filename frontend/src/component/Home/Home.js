import React, { Fragment} from 'react';
//import { CgMouse } from "react-icons/all";

const Home = () => {
  return (
    <Fragment>
        <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
                <button>
                  Scroll
                </button>
            </a>
        </div>
    </Fragment>
  );
};

export default Home;