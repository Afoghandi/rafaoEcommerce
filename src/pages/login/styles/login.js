import styled from 'styled-components/macro';
import { mobile } from '../../../responsive';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url('https://media.gq.com/photos/5eab4aaeeffccbb34a5b0454/master/pass/gq%20may%202020%20The%20Future%20of%20the%20Fashion%20Show%20Is%20Here.jpg')
			center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: '75%' })}
`;
export const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;

export const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	cursor: pointer;
	color: white;
`;
export const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
