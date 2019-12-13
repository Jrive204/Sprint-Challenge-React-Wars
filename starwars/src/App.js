import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Form } from "reactstrap";
import Formsearch from "./components/Formsearch";
import Page from "./components/Page";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [search, setSearch] = useState(``);
  const [data, setData] = useState(``);
  const [page, setPage] = useState(1);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(` https://swapi.co/api/people/?page=${page}&format=json`)
      .then(response => {
        let people = response.data.results;
        let char = people.map(e => {
          console.log(`hello`, people);
          return (
            <div className='charCarddiv'>
              <Card
                className='cards'
                body
                inverse
                style={{
                  backgroundColor: "#333",
                  borderColor: "#rgba(51, 51, 51, 0.9)"
                }}>
                <ul style={{ listStyle: `none`, paddingRight: `40px` }}>
                  <li>
                    <CardTitle>
                      <h4 id={e.name} key={e.name}>
                        {e.name}
                      </h4>
                    </CardTitle>
                  </li>
                  <li>Films: {e.films.length}</li>
                  <li>
                    Birth Year: {e.birth_year} &nbsp; Gender: {e.gender}
                    {e.homeworld.name}
                  </li>
                  <Button className='votebutton' color='danger'>
                    Vote!
                  </Button>
                </ul>
              </Card>
            </div>
          );
        });
        setData(char);
        console.log(page);
      })
      .catch(err => {
        err.msg = `Sorry Reload`;
      });
  }, [page]);

  const handlechange = e => {
    setSearch(e.target.value);
  };

  const clicksearch = e => {
    setSearch(search);
  };
  console.log(`change`, search);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <h3>Favorite Character</h3>
      <Formsearch
        clicksearch={clicksearch}
        search={search}
        handlechange={handlechange}></Formsearch>
      <div>{data}</div>
      <Page
        pageprev={e => (page == 1 ? null : setPage(page - 1))}
        page={page}
        pagechangeradd={e => setPage(page + 1)}></Page>
    </div>
  );
};

export default App;
