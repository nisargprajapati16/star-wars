import "./App.css";

import Planets from "../Planets";

const App = () => {
  const formatFunc = (row) => {
    return {
      ...row,
      films_count: row.films.length,
      residents_count: row.residents.length,
    };
  };
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets
        formatFunc={formatFunc}
        customColumns={["films_count", "residents_count"]}
      />
    </div>
  );
};

export default App;
