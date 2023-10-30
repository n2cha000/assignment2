// import React, { Component } from 'react'
// import axios from 'axios'

// //import Suggestions from './suggestions'

// const { API_KEY } = process.env
// const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       predictions: [],
//     };
//   this.onChange = this.onChange.bind(this); 
//  /*  state = {
//     error: false,
//     query: '',
//     results: []
//   } */
// }
//   getPredictions(value){
//  // getInfo = () => {
// /*     axios.get(`${API_URL}`)
//       .then(({ data }) => {
//         this.setState({
//           results: data.data
//         })
//       })
//       .catch(() => this.setState({ error: true })) */
//       return [
//         // 'Boston',
//         // 'Los Angeles',
//         // 'San Diego',
//         // 'San Franciso',
//         // 'Sacramento',
//         // 'New York',
//         // 'New Jersie',
//         // 'Chicago',
//       ].filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
//   }

//   onChange(e) {
//     // clear timeout when input changes value
//     clearTimeout(this.timeout);
//     const value = e.target.value;
//     this.setState({
//       value
//     });

//     if (value.length > 0) {
//       // make delayed api call
//       this.timeout = setTimeout(() => {
//         const predictions = this.getPredictions(value);
//         this.setState({
//           predictions
//         });
//       }, 250);
//     } else {
//       this.setState({
//         predictions: []
//       });
//     }
//   }

//   /* handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         // this.showDropdown()
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } else if (!this.state.query) {
//         // this.hideDropdown()
//       }
//     })
//   } */

//   render() {
//     return ( 
//       <div >
//       <input type = "text" value={this.state.value} onChange = {this.onChange}/>
//         <div> 
//         {
//           this.state.predictions.map((item, index) => (
//             <div key={index + item}>{item}</div>
//           ))
//         } 
//         </div> 
//       </div>
//     )
// }
// }

// export default Search