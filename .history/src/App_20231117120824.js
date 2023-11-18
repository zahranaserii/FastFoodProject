import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/Header";

function App() {
  return (
    <div className="bg-slate-200 max-w-6xl min-w-full">
      <Header />
      <div className="flex justify-center">
        <CategoryList />
      </div>
    </div>
  );
}

export default App;
