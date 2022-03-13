import 'primereact/resources/themes/lara-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/normalize.css';
import './styles/setting.css';
// import './styles/base.css';
// import './styles/form.css';
// import './styles/navbar.css';
// import './styles/card.css';

// import { RegisterScreen } from './components/auth/RegisterScreen';
// import { LoginScreen } from './components/auth/LoginScreen';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';


export const UreviewApp = () => {



	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	)
}
