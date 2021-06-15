import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import StudySetPage from '../pages/studySet';
import MyStudySetsPage from '../pages/myStudySets';
import PracticeSet from '../pages/practicePage';
import GamePage from '../pages/game';
import QuizPage from '../pages/quiz';
import  EditStudySet from '../pages/editsetPage';

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
		path: '/studysets/:id/memorygame',
		name: 'Memory Game',
		component: GamePage,
		exact: true,
		protected: true
	},
	{
		path: '/studysets/:id/quiz',
		name: 'Own Sets Page',
		component: QuizPage,
		exact: true,
		protected: true
	},
	{
		path: '/studysets/:id/edit',
		name: 'Edit Set Page',
		component: EditStudySet,
		exact: true,
		protected: true
	},
	{
		path: '/studysets/:id',
		name: 'Study Set Page',
		component: PracticeSet,
		exact: true,
		protected: true
	},
	{
		path: '/studysets',
		name: 'Own Sets Page',
		component: MyStudySetsPage,
		exact: true,
		protected: true
	},

]

export default routes;