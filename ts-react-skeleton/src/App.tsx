import React, { useEffect, useState } from "react";

const Placeholder: React.FC = () => {
  return (
    <div className="flex flex-col items-center border rounded-md px-1 py-1 w-4/12 animate-pulse">
      <div className=" bg-gray-200 h-40 w-full"></div>
      <div className="border w-full">
        <div className="bg-gray-200 h-5 w-20 my-1"></div>
        <div className="bg-gray-200 h-5 w-40 my-1"></div>
      </div>
    </div>
  );
};

const Item: React.FC = () => {
  return (
    <div className="flex flex-col items-center border rounded-md px-1 py-1 w-4/12">
      <img
        className="h-40 w-full"
        src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
      <div className="border w-full">
        <div>Cat taking a nap</div>
        <div className=" whitespace-nowrap overflow-hidden text-ellipsis">Start by creating a new React project with Create React App v5.0+ if you don't have one already set up.</div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="border flex flex-wrap">{isLoading ? Array.from({ length: 25 }).map((_, idx) => <Placeholder key={idx} />) : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}</div>
  );
}

export default App;
