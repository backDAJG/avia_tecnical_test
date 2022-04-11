import { CssBaseline, StyledEngineProvider } from "@mui/material";
import NavigationScroll from "./layout/NavigationScroll";
import Routes from "./routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <NavigationScroll>
        <Routes />
      </NavigationScroll>
    </StyledEngineProvider>
  );
}

export default App;
