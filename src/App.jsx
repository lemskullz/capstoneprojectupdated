import {useState} from 'react'
import Products from "./Components/Products/Products.jsx"
import Login from "./Components/Login/Login.jsx"
import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Header from "./Components/header/Header.jsx";
import Search from "./Components/search/Search";
import Button from "./Components/button/Button";
import './App.css'

function App() {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSearchData}
            />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>
      <Routes>
        <Route path="/home" element={<Products 
          items={items} 
          searchValue={searchValue} 
          setItem={setItem} 
          setSearchValue={setSearchValue}
          addedItems={addedItems}
          setAddedItem={setAddedItem}
          showAddProducts={showAddProducts}
          setShowAddProducts={setShowAddProducts}
        />} />
        <Route path="/login" element={< Login />} />
       </Routes>
    </div>
  )
}

export default App