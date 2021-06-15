export default interface IRoute {
	path: string;
	name: string;
	exact: boolean;
	protected: boolean;
	component: any;
	props?: any;
}