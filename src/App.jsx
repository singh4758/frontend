import { ThemeProvider } from '@material-ui/styles';
import { React } from 'react';
import { TestComponent } from './page';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TestComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
