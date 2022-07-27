import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: '1.jpeg',
          desc: 'Rit amet nisl ac est pharetra imperdiet',
          category: 'chairs',
          price: '11.46',
        },
        {
          id: 2,
          title: 'Стол белый',
          img: '2.jpeg',
          desc: 'Rit amet nisl ac est pharetra imperdiet',
          category: 'chairs',
          price: '11.46',
        },
        {
          id: 3,
          title: 'Стол чёрный',
          img: '3.jpeg',
          desc: 'Rit amet nisl ac est pharetra imperdiet',
          category: 'chairs',
          price: '11.46',
        },
        {
          id: 4,
          title: 'Диван синий',
          img: '4.jpeg',
          desc: 'Rit amet nisl ac est pharetra imperdiet',
          category: 'chairs',
          price: '11.46',
        },
        {
          id: 5,
          title: 'Пуфик жёлтый',
          img: '5.jpeg',
          desc: 'Rit amet nisl ac est pharetra imperdiet',
          category: 'chairs',
          price: '11.46',
        },
        {
          id: 6,
          title: 'Диван зелёный',
          img: '6.jpeg',
          desc: 'Rit amet nisl ac est pharetra imperdiet',
          category: 'chairs',
          price: '11.46',
        }
      ]
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
   )
  }
}

export default App;
