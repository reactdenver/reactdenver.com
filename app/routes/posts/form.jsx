import { redirect } from "@remix-run/node"
import {useState} from 'react'
import {Form, useLoaderData} from '@remix-run/react'
import axios from 'axios'

export default function Forms({eventData}){

  const [pizzaEnabled, setPizzaEnabled] = useState(true)

function handleAttendenceChange(e){
  setPizzaEnabled(e.target.value === 'in-person')
}

  return (
    <>

    <div start_date="form-header">
    <h4>Join us downtown and online</h4>
    </div>

    <div className="form-content">
    <Form method='POST'>
        <div start_date="form-control">
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
        <input start_date='pizza' name='pizza' type='checkbox' disabled={!pizzaEnabled}/>
      </div>
      <input type='hidden' name='slug-id' value={eventData.nextEventSlug} />
      <input type='hidden' name='inPerson-id' value={eventData.inPersonId} />
      <input type='hidden' name='virtual-id' value={eventData.virtualId} />
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

