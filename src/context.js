  import React, {Component} from 'react';
import photo1 from './images/1.png';
import photo2 from './images/2.png';
import photo3 from './images/3.png';
import photo4 from './images/4.png';
import photo5 from './images/5.png';
import photo6 from './images/6.png';

export const MyContext = React.createContext();

export default class Container extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      photo: photo1,
      photoColor: photo4,
      engine: [],
      engineChosed: '',
      colorChosed: '',
      changePage: () => this.setState(actualPage => ({page: actualPage.page + 1, currentPrice: this.state.price})),
      testeclick: (types) => this.changeValueEngine(types),
      changeColor: (color) => this.changeColor(color),
    }
  } 

  changeValueEngine(types){
    if(types === "P") {
      this.setState({
        price: this.state.currentPrice + this.state.engine[0].price,
        engineChosed: this.state.engine[0].kwh + this.state.engine[0].type,
        photo: photo1,
      });
    } else if(types === "S") {
      this.setState({
        price: this.state.currentPrice + this.state.engine[1].price, 
        engineChosed: this.state.engine[1].kwh + this.state.engine[1].type,
        photo: photo2,
      });

    } else {
      this.setState({
        price: this.state.currentPrice + this.state.engine[2].price,
        engineChosed: this.state.engine[2].kwh + this.state.engine[2].type,
        photo: photo3,
      });
    }
  }

  changeColor(color){
    if(color === 'red'){
      this.setState({
        colorChosed: this.state.color[0].label,
        price: this.state.currentPrice + this.state.color[0].price,
        photoColor: photo4,
      })
    } else if(color === 'blue'){
      this.setState({
        colorChosed: this.state.color[1].label,
        price: this.state.currentPrice + this.state.color[1].price,
        photoColor: photo5,
      })
    } else {
      this.setState({
        colorChosed: this.state.color[2].label,
        price: this.state.currentPrice + this.state.color[2].price,
        photoColor: photo6,
      })
    }
  }

  async componentDidMount(){  
    await fetch('https://next.json-generator.com/api/json/get/41ORKNZDU')
    .then(response => response.json())
      .then(data => {this.setState({
        price: data.data.price, 
        currentPrice: data.data.price,
        engine: data.data.engine.items,
        descColor: data.data.color.description,
        color: data.data.color.items,
      }); 
    })
    this.setState({
       engineChosed: this.state.engine[0].kwh + this.state.engine[0].type,
       colorChosed: this.state.color[2].label,
    })
  }
  
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}