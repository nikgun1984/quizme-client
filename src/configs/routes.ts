import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import StudySetPage from '../pages/studySet';
import MyStudySetsPage from '../pages/myStudySets';

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home Page',
		component: HomePage,
		exact: true,
		protected: false
	},
	{
		path: '/login',
		name: 'Sign Page',
		component: LoginPage,
		exact: true,
		protected: false
	},
	{
		path: '/register',
		name: 'Register Page',
		component: RegisterPage,
		exact: true,
		protected: false
	},
	{
		path: '/create-set',
		name: 'Study Set Page',
		component: StudySetPage,
		exact: true,
		protected: true
	},
	{
		path: '/my-sets',
		name: 'Own Sets Page',
		component: MyStudySetsPage,
		exact: true,
		protected: true
	},
	// {
	// 	path: '/:user',
	// 	name: 'User Page',
	// 	component: UserPage,
	// 	exact: true,
	// },
]

export default routes;