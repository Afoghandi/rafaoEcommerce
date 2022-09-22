import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWU2YjM5NmQzZmZmYzI2ZjcxYWUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzcxNzc3MywiZXhwIjoxNjYzNzIxMzczfQ.ILtAwWU-RlTs9D63uwEwO6E3dB2m1ey_Pdg-pxUfXeg';

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
