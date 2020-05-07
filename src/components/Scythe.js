import React from 'react';
import Die from './Die';
import "./Scythe.scss";
import { times } from "lodash";

class Scythe extends React.Component {

  topRewards = ["coin", "heart", "pumpkin", "coin", "heart", "pumpkin"];
  bottomRewards = ["heart", "pumpkin", "coin", "pumpkin", "coin", "heart"];
  scrambledDice = [5, 6, 2, 1, 4, 3]

  renderTopDie(i) {
    return (
      <Die key={`${i+1}die`} i={i+1} dieClasses="topDie" />
    );
  }

  renderTopRewards(i, rewards) {
    return (
      <img className="topReward" key={rewards[i]+i} src={`/assets/Links/${rewards[i]}.png`} alt={rewards[i]}/>
    );
  }

  renderBottomDie(i, dice) {
    return (
      <Die key={`${dice[i]}die`} i={dice[i]} dieClasses="bottomDie" />
    );
  }

  renderBottomRewards(i, rewards) {
    return (
      <img className="bottomReward" key={rewards[i]+i} src={`/assets/Links/${rewards[i]}.png`} alt={rewards[i]}/>
    );
  }

  renderStars(i) {
    return (
      <img className="star" key={i} src={`/assets/Links/star_victory.png`} alt="star"/>
    );
  }

  render() {
    return (
      <>
        <p>
        Mark a #: The top row provides bonuses; the bottom row costs resources.
        </p>
        <div className="scytheC">
          {times(6, (i) => this.renderTopDie(i))}
          {times(6, (i) => this.renderTopRewards(i, this.topRewards))}
          {times(6, (i) => this.renderBottomDie(i, this.scrambledDice))}
          {times(6, (i) => this.renderBottomRewards(i, this.bottomRewards))}
          {times(6, (i) => this.renderStars(i))}
        </div>
      </>
    );
  }
}

export default Scythe;
