import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/Header";

function App() {
  return (
    <div className="bg-slate-200 max-w-7xl container">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;