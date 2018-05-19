import React from 'react';

import NewsSlider from '../widgets/Slider/news_slider';
import NewsList from '../widgets/NewsList/NewsList';
import VideoList from '../widgets/VideoList/videolist';

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

      <NewsList
      type="card"
      loadmore={true}
      start={5}
      amount={3}

      />

      <VideoList
      type="card"
      title={true}
      loadmore={true}
      start={0}
      amount={3}

      />
    </div>
  )
}


export default Home;
