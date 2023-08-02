import React, { useState } from "react";
function TodoList() {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const addItems = () => {
        // setItems([...items, inputData]);
        // console.log(items)

        setItems((items) => {
            const updateList = [...items, inputData];
            setInputData("");
            console.log(updateList);
            return updateList;
        });
    };
    function removeActivity(i){
const updateListData=items.filter((elem,id)=>{
return i!==id;
})
setItems(updateListData);
    }
    function removeAll(){
        setItems([]);
    }
    return (
        <>
            <div className="mt-52">
                <h1 className="font-serif text-2xl">CREATE YOUR ITEM'S LIST HERE</h1>
                <div className="inputs-fields">
                    <input
                        type="text"
                        Placeholder="Enter Item's"
                        className="border-1 border-black mt-2 px-3 py-2 rounded-xl"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />{" "}
                    <button
                        className="border-1 border-black rounded-xl bg-yellow-200 px-3 p-2 text-black cursor-pointer mx-2"
                        onClick={addItems}
                        title="Add Item's"
                    >
                        +
                    </button>
                </div>
                <div className="Add-items">
                    <div className="items-name">
                        {items !== [] &&
                            items.map((data, i) => {
                                return (
                                    <>
                                        <p key={i}>
                                            <div className=" border border-1 border-black rounded-lg w-80 py-2 my-2 m-auto bg-yellow-300">{data}</div>
                                            <div><button className="border border-1 border-white rounded-xl px-2 py-2 bg-red-600 text-white" onClick={()=>removeActivity(i)}>Remove(-)</button></div>
                                        </p>
                                    </>
                                );
                            })}
                       
                       
                    </div>
                </div>
{items.length>=1 &&  <div className="btn">
                    <button className=" border border-1 border-black px-1 py-1 my-3 rounded-lg bg-cyan-50 text-black bg-red-600 text-white" onClick={removeAll}>
                        Remove All
                    </button>
                </div>}
               
            </div>
        </>
    );
}
export default TodoList;
