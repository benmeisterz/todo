import { useState } from "react"
import './todo.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
  { id: 4, description: "Phone", quantity: 12, packed: false },
];

function App() {
  return (
    <Form />
  )


  function Form() {
    const [description, setDescription] = useState("")
    const [items, setItems] = useState([])

    function handleAddItems(item) {
      setItems(items => [...items, item])
    }

    function handleSubmit(e) {
      e.preventDefault()

      // if (!description) return
      const newItem = { description, id: Date.now() }
      console.log(newItem)
      setDescription("")

      handleAddItems(newItem)
    }

    return (
      <>

        <form onSubmit={handleSubmit} className="add-form">
          <h1>Todo</h1>
          <input className="textfield"
            input maxLength={10}
            placeholder="Add a todo"
            type="text"
            value={description}
            onChange={e => {
              // console.log(e.target.value)
              setDescription(e.target.value)
            }

            }
          />
          <div className="myb">
            <button>Add</button>
          </div>

          <ul>{items.map(item =>
            <li key={item.id}>{item.description} ❌ </li>
          )}</ul>
        </form>


      </>
    )

  }
}

export default App
