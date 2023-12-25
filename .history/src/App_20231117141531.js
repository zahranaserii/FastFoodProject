import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import FastFoodList from "./FastFoodList/FastFoodList";
import Header from "./Header/Header";

function App() {
  return (
    <div className="bg-slate-200 max-w-6xl min-w-fit">
      <Header />
      <div className="flex h-[80px] justify-center">
        <CategoryList />
      </div>
      <FastFoodList />
    </div>
  );
}

export default App;
