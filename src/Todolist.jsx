import { useState } from "react";

const Todolist = () => {
  const [activity, setActivity] = useState("");
  const [listdata, setListData] = useState([]);

  function addActivity() {
    // Ensures empty input is not added
    setListData((listdata) => {
      let updatedList = [...listdata, activity];
      console.log(updatedList);
      return updatedList;
    });
    setActivity(""); // Clears the input field
  }
  function removeActivity(index) {
    let filter = listdata.filter((el, id) => {
      return index != id;
    });
    setListData(filter);
  }
  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <h1>TodoList</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="enter activity"
          className="text-slate-950"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity} className="bg-rose-500 ml-4 p-2">
          Add
        </button>
      </div>
      <div>
        {listdata != [] &&
          listdata.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <div className="bg-stone-500 w-40 my-4">{item}</div>
                <button
                  className="bg-red-500 text-white rounded-2xl cursor-pointer ml-5"
                  onClick={() => removeActivity(index)}
                >
                  ✖️
                </button>
              </div>
            );
          })}
      </div>
      {listdata.length >= 2 && (
        <button
          className="bg-sky-600 text-white rounded-2xl cursor-pointer ml-5"
          onClick={() => removeAll()}
        >
          remove ALL
        </button>
      )}
    </>
  );
};

export default Todolist;
