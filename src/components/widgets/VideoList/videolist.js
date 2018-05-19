import React from 'react';
import axios from 'axios';

import Button from '../Buttons/buttons';
import './videolist';
import VideoListTemplate from './VideosTemplate';

class VideoList extends React.Component {

  state = { 
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  renderTitle = () => {
    return this.props.title ?
    <h3><strong className="ufc">UFC</strong> Videos </h3>
     :
     null
  }

  renderButton = () => {

    return this.props.loadmore ?
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
      :
      <Button type="linkTo" cta="More videos" linkTo="/videos/"/>


  }

  request = (start, end ) => {
    if(this.state.teams.length < 1){
      axios.get(`http://localhost:3004/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
    }

    axios.get(`http://localhost:3004/videos?_start=${start}&_end=${end}`)
      .then(response => {
          this.setState({
            videos: [...this.state.videos, ...response.data],
            start,
            end
          })
      })
  }

  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }

  renderVideos = () => {
    let template = null

    switch(this.props.type){
      case("card"):
        template = <VideoListTemplate data={this.state.videos} teams={this.state.teams}/>
        break;
      default:
        template = null
    }
    return template
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end, end)
  }





  render(){
  return(
    <div className="video_wrapper">
      {this.renderTitle()}
      {this.renderVideos()}
      {this.renderButton()}
    </div>
  )
  }
}


export default VideoList;
