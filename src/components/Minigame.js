import React from 'react';
import Board from './Board';
import Star from './Star';

class Minigame extends React.Component {

  handleChange(event, minigame) {
    this.props.reorderGames(parseInt(event.target.value), minigame);
  }

  render() {
    const stars = [1,2,3,4,5,6];
    return (
      <>
        <div className="Minigame">
          <div className="content">
            <div className="roundNumber">
              <input
                type="number"
                name="roundNumber"
                id={`${this.props.index}round`}
                value={this.props.minigame.roundNumber}
                onChange={(event) => this.handleChange(event, this.props.minigame)}
              />
            </div>
            <h2 className="title">{this.props.minigame.name}</h2>
            <Board index={this.props.index} board={this.props.minigame.board} name={this.props.minigame.name} />
            <div className="stars-row">
              {stars.map(star => <Star
                key={star}
                index={this.props.index}
              />)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Minigame;
