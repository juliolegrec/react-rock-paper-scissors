import React from 'react';
import styled from 'styled-components';

const colors = {
  rock: {
    color: 'hsl(349, 70%, 56%)',
    shadow: 'hsl(349, 70%, 36%)',
  },
  paper: {
    color: 'hsl(230, 89%, 62%) ',
    shadow: 'hsl(230, 89%, 42%) ',
  },
  scissors: {
    color: 'hsl(39, 89%, 49%)',
    shadow: 'hsl(39, 89%, 29%)',
  },
  lizard: {
    color: 'hsl(261, 73%, 60%)',
    shadow: 'hsl(261, 56%, 28%)',
  },
  spock: {
    color: 'hsl(189, 59%, 53%)',
    shadow: 'hsl(189, 61%, 26%)',
  },
};

const GuessButton = styled.button`
  background-image: url(./assets/images/icon-${(props) => props.type}.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;
  background-color: white;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  box-shadow: inset 0 8px rgba(0, 0, 0, 0.1),
    0 8px 0
      ${(props) =>
        colors[props.type] ? colors[props.type].shadow : 'hsl(216, 79%, 71%)'};
  width: 102px;
  border-width: 16px;
  border-style: solid;
  border-color: ${(props) =>
    colors[props.type] ? colors[props.type].color : 'hsl(216, 79%, 91%)'};
  padding: 48px;

  &:enabled:active {
    box-shadow: none;
    transform: translateY(8px);
  }

  &:disabled {
    cursor: initial;
  }

  @media (min-width: 425px) {
    &.choice-btn,
    &.result-btn {
      width: 152px;
      border-width: 24px;
      padding: 60px;
    }
  }

  @media (min-width: 768px) {
    &.result-btn {
      width: 224px;
      border-width: 32px;
      padding: 88px;
    }
  }

  &.small {
    width: 102px;
    border-width: 16px;
    padding: 48px;
  }

  &.medium {
    width: 152px;
    border-width: 24px;
    padding: 60px;
  }

  &.large {
    width: 224px;
    border-width: 36px;
    padding: 88px;
  }
`;

export default function Button({ className, type, getUserChoice, disabled }) {
  function handleInput(e) {
    getUserChoice(e.currentTarget.value);
  }

  return (
    <GuessButton
      className={className}
      value={type}
      disabled={disabled}
      type={type}
      onClick={(e) => handleInput(e)}
    />
  );
}
