import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/Header";

function App() {
  return (
    <div className="bg-red-200 max-w-5xl container">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;