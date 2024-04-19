import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <h1 style={{ color: 'white' }}>Foodies</h1>
  <div style={{ height: "10%", width: "100%", backgroundColor: "black", display: "flex" }}>
    <div style={{ flex: 1, backgroundColor: "gray", textAlign: "center", lineHeight: "40px", borderRight: "1px solid #ccc" }}>Item 1</div>
    <div style={{ flex: 1, backgroundColor: "gray", textAlign: "center", lineHeight: "40px", borderRight: "1px solid #ccc" }}>Item 2</div>
    <div style={{ flex: 1, backgroundColor: "gray", textAlign: "center", lineHeight: "40px", borderRight: "1px solid #ccc" }}>Item 3</div>
    <div style={{ flex: 1, backgroundColor: "gray", textAlign: "center", lineHeight: "40px" }}>Item 4</div>
  </div>
</div>

  );
}

export default App;
