import { Link, Navigate } from 'react-router-dom';
import {
	NavBarAboutText,
	NavBarContainer,
	NavBarSideContainer,
	NavBarTextWrap,
} from './style';
import Home from './NavInfo';
import { isLoginState } from '../../../stores/atom';
import { useRecoilState } from 'recoil';

const NavBar = () => {
	return (
		<NavBarContainer>
			<NavBarSideContainer>
				<NavBarAboutText
					key={'charge'}
					to="http://localhost:3000/charge"
				>
					CHARGE
				</NavBarAboutText>
				{localStorage.getItem('isLogin') === 'false' ? (
					<>
						<NavBarAboutText
							key={'login'}
							to="http://localhost:3000/login"
						>
							LOG IN
						</NavBarAboutText>
						<NavBarAboutText
							key={'signup'}
							to="http://localhost:3000/signup"
						>
							SIGN UP
						</NavBarAboutText>
					</>
				) : (
					<NavBarAboutText key={'mypage'} to="localhost:3000/mypage">
						MY PAGE
					</NavBarAboutText>
				)}
			</NavBarSideContainer>
		</NavBarContainer>
	);
};

export default NavBar;
