import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "1.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "chairs",
          price: "11.46",
        },
        {
          id: 2,
          title: "Стол белый",
          img: "2.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "tables",
          price: "11.46",
        },
        {
          id: 3,
          title: "Стол чёрный",
          img: "3.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "tables",
          price: "11.46",
        },
        {
          id: 4,
          title: "Диван синий",
          img: "4.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "sofas",
          price: "11.46",
        },
        {
          id: 5,
          title: "Пуфик жёлтый",
          img: "5.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "pouffes",
          price: "11.46",
        },
        {
          id: 6,
          title: "Диван зелёный",
          img: "6.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "sofas",
          price: "11.46",
        },
      ],
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
