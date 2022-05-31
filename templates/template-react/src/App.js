import "./App.css";
import ConnectWallet, { userSession } from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

function App() {
  console.log(userSession);
  console.log(userSession.isUserSignedIn());

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Stacks.js 👋</h2>

        {/* ConnectWallet file: `./src/components/ConnectWallet` */}
        <ConnectWallet />

        {/* ContractCallVote file: `./src/components/ContractCallVote` */}
        <ContractCallVote />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.hiro.so/intro"
          target="_blank"
        >
          Learn Stacks
        </a>
        <a className="App-link" href="https://reactjs.org" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
