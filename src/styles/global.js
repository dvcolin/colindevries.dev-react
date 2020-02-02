import { createGlobalStyle } from 'styled-components';
import SairaExtraCondensedBold from '../fonts/SairaExtraCondensed-Bold.ttf';
import SairaExtraCondensedMedium from '../fonts/SairaExtraCondensed-Medium.ttf';

export default createGlobalStyle`

@font-face {
    font-family: Saira Extra Condensed;
    font-style: normal;
    font-weight: 700;
    src: url(${SairaExtraCondensedBold});
}

@font-face {
    font-family: Saira Extra Condensed;
    font-style: normal;
    font-weight: 500;
    src: url(${SairaExtraCondensedMedium});
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
    box-sizing: border-box;
}
html, body {
    height: 100%;
    width: 100%;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {
	background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.body};
    line-height: ${props => props.theme.lineHeights.body};
}
`;
