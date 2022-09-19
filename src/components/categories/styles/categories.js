import styled from 'styled-components/macro';
import { mobile } from '../../../responsive.js';

export const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	${mobile({ padding: '0px', flexDirection: 'column' })}
`;
