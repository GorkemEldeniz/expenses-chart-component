import styled, { css } from "styled-components";
import "../style/var.css";

const Main = styled.main`
	width: 40%;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (max-width: 1000px) {
		width: 95%;
	}
`;

const Header = styled.header`
	background-color: var(--soft-red);
	color: var(--cream);
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	border-radius: 1rem;
`;

const Body = styled.div`
	padding: 1rem;
	border-radius: 1rem;
	background-color: var(--very-pale-orange);
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Span = styled.span`
	color: var(--medium-brown);
	font-size: 1rem;
	font-weight: 400;
`;

const Divider = styled.div`
	height: 1px;
	background-color: var(--cream);
`;

const Graph = styled.div`
	display: flex;
	gap: 1rem;
	height: 200px;
`;

type Data = {
	active : boolean;
	amount : number;
}


const Column = styled.div`
	${(props :Data) => css`
		height: ${props.amount}%;
		background-color: ${props.active ? "var(--cyan)" : "var(--soft-red)"};
	`}
	border-radius:.5rem;
	position: relative;
	}
`;



const PopUp = styled.div`
		position: absolute;
		border-radius: 0.5rem;
		z-index: 99;
		background-color: var(--dark-brown);
		padding: 0.4rem;
		color: var(--cream);
		top: -2.4rem;
		left: calc(50% - 1.8rem);
	@media (max-width:400px) {
		font-size: 0.75rem;
		top: -2rem;
		left: calc(50% - 1.6rem);
	}
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 0;
	& {
		div {
			text-align: right;
			div {
				color: var(--dark-brown);
				font-weight: 700;
			}
		}
	}
`;

const H1 = styled.h1`
	font-size: 2rem;
	color: var(--dark-brown);
`;

export { Header, Main, Body, Footer, Span, H1, Divider, Graph, Column, PopUp };
