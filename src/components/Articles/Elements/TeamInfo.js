import React from 'react';
import './teaminfo.css';


const TeamInfo = (props) => {

  return(
    <div className="articleTeamHeader">
      <div className="left"
        style={{
          background: `url('/images/teams/${props.team.logo}')`
        }}
        >

      </div>
      <div className="right">
        <span>{props.team.city}-{props.team.name}</span>
      </div>

      <div>
        <span>W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}</span>
      </div>
    </div>

  )
}


export default TeamInfo;
