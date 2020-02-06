// import emotion from 'emotion/dist/emotion.umd.min.js'; だめ
import { css } from "emotion";

const backgroundColor = ({
		primary,
		secondary,
		background
	}) =>
	primary ? "red" : secondary ? "green" : background;

export const appButton = (props) => css `
  border: none;
  cursor: pointer;
  outline: none;
  padding: 2rem 1rem;
  appearance: none;
  background: ${props.backgroundColor};
  };
`;

//svelte的にはこう書いてほしいぽいけど動かない
// let dynamicStyle = (props) => css `color: ${props.color}`
