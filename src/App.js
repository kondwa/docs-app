
import {RedocStandalone } from 'redoc';
function App() {
  return (
    <RedocStandalone specUrl="https://petstore.swagger.io/v2/swagger.json" />
  );
}

export default App;
