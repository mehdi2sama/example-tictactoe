import React from 'react';
import {
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Square(props) {
  const style = props.bsSize === 'large' ? {
    width: '70px',
    height: '70px',
  } : {
    width: '35px',
    height: '35px',
  };
  return (
    <Button style={style} disabled={props.disabled} onClick={props.onClick}>
      {props.value === ' ' ? '-' : props.value}
    </Button>
  );
}
Square.propTypes = {
  bsSize: PropTypes.oneOf(['xsmall', 'large']),
  value: PropTypes.oneOf([' ', 'X', 'O']),
  onClick: PropTypes.func,
  disabled: PropTypes.boolean,
};

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        disabled={this.props.disabled}
        value={this.props.squares[i]}
        bsSize={this.props.bsSize}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
Board.propTypes = {
  bsSize: PropTypes.oneOf(['xsmall', 'large']),
  squares: PropTypes.arrayOf(PropTypes.oneOf([' ', 'X', 'O'])),
  onClick: PropTypes.func,
  disabled: PropTypes.boolean,
};

