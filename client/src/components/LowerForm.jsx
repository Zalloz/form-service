import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const LowerForm = ({ agents = [] }) => {
  return (
    <div className="formInnerLowerContainer">
      {agents.map((agent, idx) => {
        return (
          <div key={idx}
            className="formAgentContainer"
            id={"formAgentContainer" + idx}>
            <span>
              <img src={agent.agent_photo}
                className="formAgentImage"
                id={"formAgentImage" + idx} />
            </span>
            <span className="formAgentName"
              id={'formAgentName' + idx}>
              {agent.agent_name}
            </span>
            <span id={'formAgentStars' + idx}>
              <StarRatingComponent
                className="formAgentStars"
                name="rate1"
                starCount={5}
                starColor={"#3dca59"}
                emptyStarColor={"white"}
                value={agent.average_stars} />
            </span>
            <span className="formAgentRatings"
              id={'formAgentRatings' + idx}>
              ({agent.num_ratings})
        </span>
            <span className="formAgentSales"
              id={'formAgentSales' + idx}>
              {agent.recent_sales}
              <p className="formAgentSalesP">
                Recent Sales
          </p>
            </span>
            <span className="formAgentPhone"
              id={'formAgentPhone' + idx}>
              {agent.phone}
            </span>
            <span className="formAgentType"
              id={'formAgentType' + idx}>
              {agent.agent_type.toUpperCase() + " AGENT"}
            </span>
          </div>
        )
      })}
      <p className="formInnerLowerContainerP">
        Learn how to appear as the agent above
    </p>
    </div>
  )
}

export default LowerForm;