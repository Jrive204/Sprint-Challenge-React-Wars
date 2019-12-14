import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Form, CardImg } from "reactstrap";
import Formsearch from "./components/Formsearch";
import Page from "./components/Page";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [search, setSearch] = useState(``);
  const [data, setData] = useState(``);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  let axOne = `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`;
  let axTwo = `https://swapi.co/api/people/?page=${page}&format=json`;

  const requestOne = axios.get(axOne);
  const requestTwo = axios.get(axTwo);

  const chgimg = () => {
    setCount(count + 10);
  };

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread(
          (...response) => {
            const requestOne = response[0];
            const requestTwo = response[1];

            let imagechar = requestOne.data;
            let people = requestTwo.data.results;

            console.log(`firstlist`, imagechar);
            console.log(`secondlist`, people);

            // console.log(`people`, people);
            let char = people.map(
              (e, i) => {
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
                      <CardImg
                        src={imagechar[i + count].image}
                        width='100%'
                        alt='Card image cap'
                        style={{ paddingBottom: `4%` }}
                      />
                      {console.log(
                        `imagesbitches`,
                        imagechar[i].image,
                        people[i]
                      )}
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
                        </li>
                        <Button className='votebutton' color='danger'>
                          Vote!
                        </Button>
                      </ul>
                    </Card>
                  </div>
                ); // close return
              } //close map
            ); //close e
            setData(char);
            console.log(`page`, page);
          } // close response
        )
      ) //close then
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
  console.log(`this is search`, search);

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
        count={count}
        pageprev={e =>
          page == 1 ? null : setPage(page - 1) - setCount(count - 10)
        }
        page={page}
        pagechangeradd={e => setCount(count + 10) + setPage(page + 1)}></Page>
    </div>
  );
};

export default App;
