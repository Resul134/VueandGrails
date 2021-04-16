import apiurl from '../Utils/apiurl'
export default function FetchVehicles (vehicles) {
  return fetch(`${apiurl}/vehicle`)
    .then(r => r.json())
    .then(json => { vehicles = json })
    .catch(error => console.error('Error retrieving vehicles: ' + error))
}
