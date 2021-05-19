import "./App.css";
import Search from "../components/Search/search.component";
import CardList from "../components/Card-List/card-list.component";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setPeople( users ));
  },[]);

  console.log(people);

  const onSearch = (e) =>{
    e.preventDefault();
    setSearch(e.target.value);
  }

  const filteredPeople = people.filter(person => {
   return person.name.toLowerCase().includes(search.toLowerCase());
  })


  return (
    <>
      <div className="container">
      <br />
      <Search onSearch={onSearch}/>
      <br />
      <CardList people={filteredPeople}/>
      </div>
    </>
  );
}

export default App;
