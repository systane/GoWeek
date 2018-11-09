//stackNavigator --> Navegação por clicks (botões) ; tabNavigador --> Navegação por abas semelhante ao instagram
import {createStackNavigator} from 'react-navigation';

//Components
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createStackNavigator({
    Login,
    Timeline,
    New
});

export default Routes;