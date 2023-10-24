import { BrowserRouter as Router } from 'react-router-dom';
import { PopUpStateProvider } from './contexts/PopupContext';
import { MapsStateProvider } from './contexts/MapsContext';
import MyRoutes from './routes/Routes';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.js';
import { Provider } from 'react-redux';
import './i18n/config';
import store from './store'


import Footer from './components/Footer/AppFooter';
import Header from './components/Header/AppHeader';

import './App.scss';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MapsStateProvider>
          <PopUpStateProvider>
            <Container>
              <Router>
                <Header />
                <MyRoutes />
                <Footer />
              </Router>
            </Container>
          </PopUpStateProvider>
        </MapsStateProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
