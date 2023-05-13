
import './App.css';
import Bio from "./componet/Bio"
import FullName from "./componet/FullName"
import Profession from './componet/Profession';


function App() {
  return (
    <div className="App">
     
      
      

      
    

  

  <table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">Num</th>   
      <th scope="col">fullName</th>
      <th scope="col">bio</th>
      <th scope="col">profession</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><FullName handleName="Bmw" /></td>
      <td> <Bio handleName="number one" /></td>
      <td><Profession  handleName="car" /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><FullName handleName="Elyes" /></td>
      <td> <Bio handleName="..." /></td>
      <td><Profession  handleName="Engineer" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><FullName handleName="Rana" /></td>
      <td> <Bio handleName="..." /></td>
      <td><Profession  handleName="business" /></td>
    </tr>
  </tbody>
</table>



    
</div>
  );
}

export default App;
