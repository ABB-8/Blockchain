import { useNavigate } from 'react-router-dom';
import {
	SigninPageButton,
	SigninPageContainer,
	SigninPageExplain,
	SigninPageInput,
	SigninPageMovementLogin,
	SigninPageSideWrap,
	SigninPageTestingSpan,
	SigninPageTitle,
} from './style';

import axios, { AxiosResponse } from 'axios';
import { BaseSyntheticEvent, useState } from 'react';

const SignUp = () => {
	axios.defaults.baseURL = 'http://192.168.0.145:8000';
	const navigate = useNavigate();
	const [getEmail, setEmail] = useState<string>('');
	const [getPw, setPw] = useState<string>('');
	const [getPwCh, setPwCh] = useState<string>('');
	const [getUsername, setUsername] = useState<string>('');

	const handleInputEmail = (e: BaseSyntheticEvent) => {
		setEmail(e.target.value);
	};
	const handleInputUsername = (e: BaseSyntheticEvent) => {
		setUsername(e.target.value);
	};
	const handleInputPw = (e: BaseSyntheticEvent) => {
		setPw(e.target.value);
	};
	const handleInputPwCh = (e: BaseSyntheticEvent) => {
		setPwCh(e.target.value);
	};

	const signUpButtonEvent = async () => {
		try {
			const res1 = await axios.post('/join', {
				username: getUsername,
				password: getPw,
				email: getEmail,
			});
			navigate('/login');
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<SigninPageContainer>
			<SigninPageSideWrap>
				<SigninPageTitle>
					함께, 더 나은 세상을 만들어가는 여정에 당신의 손길을
					더해주세요.
				</SigninPageTitle>
				<SigninPageTestingSpan>
					Honestly, you don't need to sign up, login. I just wanted to
					make it.
				</SigninPageTestingSpan>
				<SigninPageInput
					type="text"
					placeholder="UserName"
					onChange={(e) => {
						handleInputUsername(e);
					}}
					value={getUsername}
				></SigninPageInput>
				<SigninPageInput
					type="text"
					placeholder="Email"
					onChange={(e) => {
						handleInputEmail(e);
					}}
					value={getEmail}
				></SigninPageInput>
				<SigninPageInput
					type="password"
					placeholder="Password"
					onChange={(e) => {
						handleInputPw(e);
					}}
					value={getPw}
				></SigninPageInput>
				<SigninPageInput
					type="password"
					placeholder="Password Check"
					onChange={(e) => {
						handleInputPwCh(e);
					}}
					value={getPwCh}
				></SigninPageInput>
				<SigninPageButton onClick={signUpButtonEvent}>
					Continue
				</SigninPageButton>
				<SigninPageExplain>
					Already have an account?{' '}
					<SigninPageMovementLogin to="/login">
						Log in
					</SigninPageMovementLogin>
				</SigninPageExplain>
			</SigninPageSideWrap>
		</SigninPageContainer>
	);
};

export default SignUp;
