import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './newslist.css';
import Button from '../Buttons/buttons';
import CardInfo from '../CardInfo/cardinfo';


class NewsList extends React.Component {

  state = { 
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount

  }

  componentWillMount(){

    this.request(this.state.start, this.state.end)

  }

  request = (start, end) => {

    if(this.state.teams.length < 1 ){

      axios.get(`http://localhost:3004/teams`)
        .then(response => {
          this.setState({
            teams:response.data
          })
        })

    }
    axios.get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          items:[...this.state.items, ...response.data],
          start,
          end
        })
      })
  }

  loadMore = () => {
    let newArticles = this.state.end + this.state.amount
    this.request(this.state.end, newArticles)
  }

  renderNews = (type) => {
    let template = null

    switch(type){
      case("card"):
        template = this.state.items.map((item, i) => (
          <CSSTransition classNames={{
            enter: 'newslist_wrapper',
            enterActive: 'newslist_wrapper_active'
          }}
          timeout={500}
          key={i}
          >
            <div>
              <div className="newslist_item">
                <Link to={`/articles/${item.id}`}>

                  <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                  <h2>{item.title}</h2>

              </Link>
              </div>

            </div>

          </CSSTransition>

        ))
        break
      default:
        template = null
    }

    return template
  }

  render(){
  console.log(this.state.teams)

    return(
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
        {this.renderNews(this.props.type)}

      </TransitionGroup>
        <Button

          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
          ></Button>
        <div onClick={() => this.onLoadMore()}>


        </div>
      </div>
    )
  }
}


export default NewsList;
