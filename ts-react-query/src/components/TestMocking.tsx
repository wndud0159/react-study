import React, { useState } from "react";

interface Props {
  name: string;
  age: number;
}

const Item: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      name: {name} / age: {age}
    </div>
  );
};

const TestMocking: React.VFC = () => {
  const [data, setData] = useState<Props[]>([]);
  const [error, setError] = useState(null);

  const clickHandler = () => {
    fetch(`/peoples?firstName=juyoung`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json.data.people);
        console.log(json.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <button onClick={clickHandler}>데이터 가져오기</button>
      {data.map((person) => (
        <Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
      ))}
    </div>
  );
};

export default TestMocking;
