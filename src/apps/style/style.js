// import emotion from 'emotion/dist/emotion.umd.min.js'; だめ
import { css } from "emotion";

const brand = '#74D900';

// sp = 480
// tab = 768
// pc = 980
// lg = 1200

const breakpoints = [480,768,980,1200]
const mq = breakpoints.map(
	bp => `@media (min-width: ${bp}px)`
)

export const title = css `
	color: ${brand};
	font-size: 1em;
	white-space: nowrap;
`;

export const comicSans = css `
	font-family: 'Comic Sans MS', cursive;
`;

export const box = css `
	position: relative;
	display: inline-block;
	border: 2px solid ${brand};
	line-height: 1;
	padding: 4px;
	border-radius: 4px;
	position: relative;

	&::before{
    content: '';
    background: red;
    width: 20px;
    height: 1px;
    display: block;
    position: absolute;
    top: 200px;
	}

	${mq[2]}{
		background: red;
	}

	${mq[3]} {
		background: blue;
	}
`;

export const link = css `
	color: inherit;
	font-weight: bold;
	text-decoration: none;
	border-bottom: 1px solid ${brand};
	&:hover {
		text-decoration: none;
		background: ${brand};
	}
`;
