import './App.css';
import './index.css';
function App() {
  const pizza_list = [
    {
      name: "Margherita",
      ingredients: "Tomato Sauce, Mozzarella, Basil",
      price: "$8.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: false
    },
    {
      name: "Pepperoni",
      ingredients: "Tomato Sauce, Mozzarella, Pepperoni",
      price: "$9.99",
      photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg",
      IsSold: false
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
      price: "$11.99",
      photo: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=pizza-2619967.jpg&fm=jpg",
      IsSold: true
    }
    ,
    {
      name:"Hawaiian",
    ingredients:"Tomato Sauce, Mozzarella, Ham, Pineapple",
    price:"$10.99",
    photo:"https://images7.alphacoders.com/596/596343.jpg",
    IsSold:true
    },
    {
      name:"Veggie",
      ingredients:"Tomato Sauce, Mozzarella, Bell Peppers, Olives, Onions, Mushrooms",
      price:"$10.49",
      photo:"https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg",
      IsSold:false
    },
    {
      name:"Meat Lover's",
    ingredients:"Tomato Sauce, Mozzarella, Pepperoni, Sausage, Ham, Bacon",
    price:"$12.49",
    photo:"https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg",
    IsSold:true
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
      price: "$11.99",
      photo: "https://www.tasteofhome.com/wp-content/uploads/2021/01/New-York-Style-Pizza_EXPS_FT20_105578_F_1217_1.jpg",
      IsSold: true
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
      price: "$11.99",
      photo: "https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg",
      IsSold: true
    }
    
  ];

  return (
    <div>
      <Header />
      <Pizza />
      <div className="pizza-list-container">
        {pizza_list.map((pizza, index) => (
          <Pizzalist 
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            pic={pizza.photo}
            IsSold={pizza.IsSold}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Pizzalist(props) {
  return (
    <div className="pizza-list">
      <img src={props.pic} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <p className="price">{props.price}</p>
      <button className="bg-slate-200 w-40 h-10 rounded-full">{props.IsSold ? 'In Stock' : 'Out of Stock'}</button>
      
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="heading">React Pizza</h1>
      
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <h2 className="p-heading">OUR MENU</h2>
      <p className="p-para">Ever looked at Pizza Toppings and wondered, "WHY SO LESS"?
      we made the pizzas that we all deserve - PIZZAS</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <div className="footer p-6 bg-gray-100 text-center">
      {isOpen && (
        <div className="order mb-4">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="rounded-md bg-violet-500 hover:bg-violet-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-200 text-white font-semibold py-2 px-4 shadow-lg mt-2">
            Order
          </button>
        </div>
      )}
      <p>&copy; 2024 React Pizza. All rights reserved.</p>
    </div>
  );
}



export default App;
