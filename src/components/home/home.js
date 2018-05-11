import React from 'react';

import NewsSlider from '../widgets/Slider/news_slider';

const Home = () => {
  return(
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={5}
        settings={{
          dots: 'false',
          arrows: 'false',
        }}
      />
    </div>
  )
}


export default Home;
