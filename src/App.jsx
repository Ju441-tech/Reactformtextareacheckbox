
import { useState } from 'react'
//Formulaire non contrôlé, l'évènement onSubmit  est sur le form, pas sur l'input, ça marche aussi pour les text area,et les checkboxs

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    console.log(data.get('firstName'))
  }
  const [checked, setChecked] = useState(false)
  const toggleChange = () => {
    setChecked(!checked)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input name="firstName"></input>
        <input type="checkbox" onChange={toggleChange}></input>
        {checked && <button>Soumettre le formulaire</button>}
      </form>

    </div >
  );
}

export default App;
