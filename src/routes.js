import App from "./App";
import Home from './components/Home/Home'
import Travel from "./components/Travel/Travel";
import About from "./components/About/About"

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/travel",
				element: <Travel />,
			},
			{
				path: "/about",
				element: <About />,
			},


		],
	},
];

export default routes;