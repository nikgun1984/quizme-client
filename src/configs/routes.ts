import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import StudySetPage from '../pages/studySet';
// import UserPage from '../pages/user';

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
	{
		path: '/create-set',
		name: 'Study Set Page',
		component: StudySetPage,
		exact: true,
	},
	// {
	// 	path: '/:user',
	// 	name: 'User Page',
	// 	component: UserPage,
	// 	exact: true,
	// },


]

export default routes;