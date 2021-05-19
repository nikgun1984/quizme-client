import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home Page',
		component: HomePage,
		exact: true,
	},
	{
		path: '/login',
		name: 'Sign Page',
		component: LoginPage,
		exact: true,
	},
	{
		path: '/register',
		name: 'Register Page',
		component: RegisterPage,
		exact: true,
	},

]

export default routes;