import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

// import { getOriginalNode } from "typescript";

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);
// console.log('Hi there!');
// const mapElement = document.getElementById("map");
// if (mapElement) {
// 	new google.maps.Map(mapElement,{    
//         zoom: 1,
//         center: {lat: 0, lng: 0}
//     });
// }