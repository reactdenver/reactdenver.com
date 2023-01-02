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

<div className='signup-form'>
    <div id="form-header">
    <h4 className='form-title'>Join us downtown and online</h4>
    </div>

    <div className="form-content">
    <Form method='POST'>
        <div id="form-control">
        <label className='input-label'>
          Your Name{" "}
        </label>
          <input className='input-field' type='text' name='first-name' />
        </div>

      <div className="form-control">
        <label className='input-label'>
          Email{" "}
        </label>
          <input className='input-field' type='text' name='email' />
      </div>

      <div className='form-control radio-button-label'>
        <label>Attending in Person
          <input className='radio-checkbox-button' name='in-person/online' type='radio' value='in-person' onChange={handleAttendenceChange} />
        </label>
      </div>

      <div className='form-control radio-button-label'>
        <label>Joining Online
        <input className='radio-checkbox-button' name='in-person/online' type='radio' value='virtual' onChange={handleAttendenceChange}/>
        </label>
      </div>

      {/* <div className='form-control radio-button-label'>
        <label>Yes, I want pizza</label>
        <input className='radio-checkbox-button' id='pizza' name='pizza' type='checkbox' disabled={!pizzaEnabled}/>
      </div> */}

      <div className='form-control'>
        <button type='submit'>
            Register
          </button>
      </div>
    </Form>

    </div>
    </div>
    </>
  )
}

