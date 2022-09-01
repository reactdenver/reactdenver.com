import { redirect } from "@remix-run/node"
import {useState} from 'react'

export const action = async ({request}) => {
  const form = await request.formData();
  const name = form.get('first-name')
  const email = form.get('email')
  const inPerson = form.get('in-person')
  const online = form.get('online')
  const pizza = form.get('pizza')

  const fields = {name, email, inPerson, online, pizza}

  const post = await db.post.create({data: fields})
  
  return redirect('/')
}

export default function Forms(){

  const [isChecked, setIsChecked] = useState(false)


function handleClick(e){
  if(e.target.value === 'radio1'){
    setIsChecked(true)
  } else {
    document.getElementById('pizza').checked = false
    setIsChecked(false)
  }
}

  return (
    <>

    <div id="form-header">
    <h4>Join us downtown and online</h4>
    </div>

    <div id="form-content">
    <form method='POST'>
        <div id="form-control">
        <label>
          Your Name:{" "}
          <input type='text' name='first-name' />
        </label>
        </div>

      <div id="form-control">
        <label>
          Email:{" "}
          <input type='text' name='email' />
        </label>
      </div>

      <div id='form-control'>
        <label>Attending in Person</label>
        <br />
        <input name='in-person/online' type='radio' value='radio1' onChange={handleClick} />
      </div>

      <div id='form-control'>
        <label>Joining Online</label>
        <br />
        <input name='in-person/online' type='radio' value='radio2' onChange={handleClick}/>
      </div>

      <div id='form-control'>
        <label>Yes, I want pizza</label>
        <br />
        <input id='pizza' name='pizza' type='checkbox' disabled={isChecked ? false : true}/>
      </div>

      <div id='form-control'>
        <button type='submit'>
            Submit
          </button>
      </div>
    </form>

    </div>
    </>
  )
}

