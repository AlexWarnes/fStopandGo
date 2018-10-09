// import React from 'react';
// const google = window.google;

// export class GoogleMap extends React.Component {
//     componentDidMount() {
//         if (!this.props.lat || !this.props.lng) {
//             this.map = new google.maps.Map(
//                 this.refs.map, {zoom: 4, center: {lat:38, lng: 75}}
//             );
//         } else {
//             this.map = new google.maps.Map(
//                 this.refs.map, {
//                     zoom: 16,
//                     center: {lat:this.props.lat, lng: this.props.lng}
//                 });
//             const marker = new google.maps.Marker({
//                 position: {
//                     lat:this.props.lat, 
//                     lng: this.props.lng
//                 }, 
//                 map:this.map
//             }); 
//         }
//     }
    
//     render(){
//         return(
//             <div id="map" ref="map">

//             </div>
//         );
//     }
// }

// export default GoogleMap;
