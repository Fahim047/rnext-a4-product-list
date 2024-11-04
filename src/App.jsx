import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
const App = () => {
	return (
		<>
			<Header />
			<Banner />
			<Shop />
			<Footer />
			<ToastContainer position="top-center" autoClose={3000} />
		</>
	);
};

export default App;
