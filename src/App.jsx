import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      occupation: "Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      city: "San Francisco",
      occupation: "Designer",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 28,
      city: "Los Angeles",
      occupation: "Developer",
    },
    {
      id: 4,
      name: "Robert Brown",
      age: 35,
      city: "Chicago",
      occupation: "Manager",
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 22,
      city: "Miami",
      occupation: "Marketing Specialist",
    },
    {
      id: 6,
      name: "Michael Wilson",
      age: 40,
      city: "Seattle",
      occupation: "Data Scientist",
    },
    {
      id: 7,
      name: "Olivia Martinez",
      age: 27,
      city: "Austin",
      occupation: "Product Manager",
    },
    {
      id: 8,
      name: "Daniel Lee",
      age: 32,
      city: "Denver",
      occupation: "UX Designer",
    },
    {
      id: 9,
      name: "Sophia White",
      age: 29,
      city: "Boston",
      occupation: "HR Coordinator",
    },
    {
      id: 10,
      name: "James Harris",
      age: 31,
      city: "Houston",
      occupation: "Software Engineer",
    },
  ];
  const [back, setback] = useState("white");
  const [count, setcount] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchOccupation, setSearchOccupation] = useState("");
  const [filteredData, setFilteredData] = useState(sampleData);
  const [hide, sethide] = useState("block");
  const [time, settime] = useState(new Date().toLocaleTimeString());
  const [p, setproducts] = useState([]);
  const [category, setcategory] = useState("");
  const [filterdata, setfiltereddata] = useState([]);
  const [color, setcolor] = useState("");

  let inte;
  function timefn() {
    inte = setInterval(() => {
      settime(new Date().toLocaleTimeString());
      console.log(time);
    }, 1000);
  }
  function stopfn() {
    clearInterval(inte);
    inte = null;
  }
  function changecolor2(e) {
    const newColor = e.target.innerText;
    document.body.style.backgroundColor = newColor;
    setcolor(newColor);
  }

  function hidepara() {
    var value = hide == "none" ? "block" : "none";
    sethide(value);
    var par = document.querySelector("#para");
    console.log(par, value);
    par.style.display = value;
    var text = document.querySelector("#display").innerHTML;
    var changetext = text == "Display" ? "hide" : "Display";
    document.querySelector("#display").innerHTML = changetext;
  }

  function changecolor() {
    var newco = `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`;

    setback(newco);

    document.body.style.backgroundColor = back;
    document.body.style.color = document.body.style.color === "black";
  }

  useEffect(() => {
    {
      document.title = "count value is " + count;

      // fetch(`https://fakestoreapi.com/products/${count}`)
      //   .then((res) => res.json())
      //   .then((p) => setproducts([p]));
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((p) => setproducts(p));
    }
  }, [count]);

  useEffect(() => {
    if (category) {
      const filtered = p.filter((pp) => pp.category === category);
      setfiltereddata(filtered);
    } else {
      setfiltereddata(p);
    }
  }, [category, p]);

  useEffect(() => {
    const newData = sampleData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchName.toLowerCase()) &&
        user.age.toString().includes(searchAge) &&
        user.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        user.occupation.toLowerCase().includes(searchOccupation.toLowerCase())
    );
    setFilteredData(newData);
  }, [searchName, searchAge, searchCity, searchOccupation]);

  return (
    <>
      <h3>{time}</h3>
      <button onClick={stopfn}>Stop</button>
      <button onClick={timefn}>start</button>
      <br></br> <h1>Hello world</h1>
      <select value={category} onChange={(e) => setcategory(e.target.value)}>
        {p
          .filter(
            (pp, index, arr) =>
              arr.findIndex((obj) => obj.category === pp.category) === index
          )
          .map((pp) => (
            <option key={pp.category}>{pp.category}</option>
          ))}
      </select>
      <table border="1">
        <tbody>
          {filterdata.map((pp) => (
            <tr key={pp.id}>
              {" "}
              {/* ✅ Add key for React optimization */}
              <td>
                <h3>{pp.title}</h3>
              </td>
              <td>
                <span>{pp.price}</span>
              </td>
              <td>
                <p>{pp.description}</p>
              </td>
              <td>
                <img src={pp.image} width={200} height={50} alt={pp.title} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Next
      </button>
      <input
        type="text"
        placeholder="Enter name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={searchAge}
        onChange={(e) => setSearchAge(e.target.value)}
      />
      <select
        name="city"
        id="city"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      >
        {sampleData.map((user) => (
          <option>{user.city}</option>
        ))}
      </select>
      <select
        name="occupation"
        id="occupation"
        value={searchOccupation}
        onChange={(e) => setSearchOccupation(e.target.value)}
      >
        {sampleData.map((user) => (
          <option>{user.occupation}</option>
        ))}
      </select>
      <div>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th>occupation</th>
          </tr>
          {filteredData.map((user) => (
            <tr key="user.id">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>{user.occupation}</td>
            </tr>
          ))}
        </table>
      </div>
      <p id="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={hidepara} id="display">
        Hide
      </button>
      <button
        onClick={() => {
          if (count < 1) {
            alert("cant decrease further");
            return;
          }
          setcount(count - 1);
        }}
      >
        Decrease
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
      <button onClick={changecolor}>change</button>
      <button onClick={changecolor2}>blue</button>
    </>
  );
}

export default App;
