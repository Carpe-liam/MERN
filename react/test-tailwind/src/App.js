import './App.css';

import Thing from './Components/Thing';

function App() {
  return (
    <div className="App" class="container mx-auto bg-yellow-400 h-20">
      <button class="btn bg-blue-600 hover:bg-blue-800 px-4 text-light mt-2">Test</button>
      <Thing />
    </div>
  );
}

export default App;
