import { Outlet } from "react-router-dom";



function MainContent() {
	return (
		<div className="wrapper">
			<Outlet />
		</div>
	);
}

export default MainContent;