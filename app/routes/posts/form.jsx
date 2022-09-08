import { redirect } from "@remix-run/node"
import {useState} from 'react'
import {Form} from '@remix-run/react'

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

  const [pizzaEnabled, setPizzaEnabled] = useState(true)

function handleAttendenceChange(e){
  setPizzaEnabled(e.target.value === 'in-person')
}

  return (
    <>

    <div id="form-header">
    <h4>Join us downtown and online</h4>
    </div>

    <div className="form-content">
    <Form method='POST'>
        <div id="form-control">
        <label>
          Your Name:{" "}
          <input type='text' name='first-name' />
        </label>
        </div>

      <div className="form-control">
        <label>
          Email:{" "}
          <input type='text' name='email' />
        </label>
      </div>

      <div className='form-control'>
        <label>Attending in Person</label>
        <br />
        <input name='in-person/online' type='radio' value='in-person' onChange={handleAttendenceChange} />
      </div>

      <div className='form-control'>
        <label>Joining Online</label>
        <br />
        <input name='in-person/online' type='radio' value='virtual' onChange={handleAttendenceChange}/>
      </div>

      <div className='form-control'>
        <label>Yes, I want pizza</label>
        <br />
        <input id='pizza' name='pizza' type='checkbox' disabled={!pizzaEnabled}/>
      </div>

      <div className='form-control'>
        <button type='submit'>
            Submit
          </button>
      </div>
    </Form>

    </div>
    </>
  )
}

