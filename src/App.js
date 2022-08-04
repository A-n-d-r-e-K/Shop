import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
          category: "chairs",
          price: "11.46",
        },
        {
          id: 3,
          title: "Стол чёрный",
          img: "3.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "chairs",
          price: "11.46",
        },
        {
          id: 4,
          title: "Диван синий",
          img: "4.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "chairs",
          price: "11.46",
        },
        {
          id: 5,
          title: "Пуфик жёлтый",
          img: "5.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "chairs",
          price: "11.46",
        },
        {
          id: 6,
          title: "Диван зелёный",
          img: "6.jpeg",
          desc: "Rit amet nisl ac est pharetra imperdiet",
          category: "chairs",
          price: "11.46",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
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
