import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    document.body.classList.toggle('light', !darkMode)
  }, [darkMode])

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={category}
        onAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
