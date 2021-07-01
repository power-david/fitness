import React from "react";
import { Media } from 'reactstrap';

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
        <h2
            style={{
                marginBottom: '25px',
                marginTop: '10px',
                textAlign: 'center'
            }}>2 Fit 2 Quit</h2>
    
      <Media>
        <Media left top href="">
          <Media 
          src="https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_1280.jpg" 
          style={{
              width: '100%',
              opacity: '0.5',
          }} />
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="">
          <Media 
          object data-src="holder.js/64x64" 
          src="https://cdn.pixabay.com/photo/2016/02/04/16/52/men-1179452_1280.jpg"
          style={{
              width: '100%',
              opacity: '0.5',
          }} />
        </Media>  
      </Media>
      <Media className="mt-1">
        <Media left bottom href="">
          <Media 
          object data-src="holder.js/64x64" 
          src="https://cdn.pixabay.com/photo/2015/09/29/12/15/bordeaux-963810_1280.jpg"
          style={{
            width: '100%',
            opacity: '0.5',
          }} />
        </Media>
      </Media>
    </div>
    );
};

export default Home;