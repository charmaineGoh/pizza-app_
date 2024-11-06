import React ,{useState} from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
const pizzas = [
    {
        name: "Spinach Pizza",
        description: "Tomato, mozzarella, spinach, and ricotta cheese",
        price: 10,
        image: "pizzas/spinaci.jpg",
    },
    {
        name: "Focaccia",
        description: "Bread with italian olive oil and rosemary",
        price: 6,
        image: "pizzas/focaccia.jpg",
      },
      {
        name: "Pizza Margherita",
        description: "Tomato and mozarella",
        price: 10,
        image: "pizzas/margherita.jpg",
       
      },
      {
        name: "Pizza Funghi",
        description: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        image: "pizzas/funghi.jpg",
   
      },
      {
        name: "Pizza Salamino",
        description: "Tomato, mozarella, and pepperoni",
        price: 15,
        image: "pizzas/salamino.jpg",
        
      },
      {
        name: "Pizza Prosciutto",
        description: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        image: "pizzas/prosciutto.jpg",
       
      },
    
    

  
];
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
function Header() {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= 10 && currentTime < 22;

  return (
      <header>
          <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>Charmaine's Pizza Co.</h1>
          {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
      </header>
  );
}


function Pizza({ name, description, price, image}) {
    return (
        <div className="pizza">
            <img src={image} alt={`Pizza ${name}`} className="pizza-image" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
        </div>
    );
}


function Menu() {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());

  

  const filteredPizzas = pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm)
  );

  return (
      <div className="menu">
          <h2>Our Menu</h2>
          <input
              type="text"
              placeholder="Search pizzas..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
          />
          <div className="pizzas">
              {filteredPizzas.map((pizza, index) => (
                  <Pizza
                      key={index}
                      name={pizza.name}
                      description={pizza.description}
                      price={pizza.price}
                      image={pizza.image}
                     
                  />
              ))}
          </div>
      </div>
  );
}


function Footer() {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= 10 && currentTime < 22;

  const handleOrderClick = () => {
      alert("Select your order");
  };

  return (
      <footer className="footer">
          {isOpen ? (
              <>
                  <p>We're currently open</p>
                  <button className="order-button" onClick={handleOrderClick}>Order</button>
              </>
          ) : (
              <p>Sorry, we're closed</p>
          )}
      </footer>
  );
}



    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);