//Access Token for generating json
const accessToken = 117941897901277 

// API url syntax = https://superheroapi.com/api.php/accessToken/id
const API_url = 'https://superheroapi.com/api.php/' + accessToken 

/*Using Arrow functions . 
1. It will pass Chara cter name to the figcaption. 
2. Assign the imgage url to the image tag source attribute. 
3. Assign the Character name to the image tag alt attribute.

*/
const getAPIviaID = (id) => {
  fetch (API_url + '/' + id)
    .then(response => response.json()) 
    .then(json => {
      document.getElementById('figcaption').innerText = json.name
      document.querySelector('img').src = json.image.url
      document.querySelector('img').alt = json.name
    }) 
      
}
// Button for getting new character 
const button = document.getElementById('newCharacter')  
/* each click will generate a randomId number.
 As the superheroapi.com only has 732 photos marked with unique id, we pass that id as a argument into the functions 'geAPIviaID'
*/
button.onclick = () => { 
  let randomId = Math.floor(Math.random()*732)
  getAPIviaID(randomId) 
} 
