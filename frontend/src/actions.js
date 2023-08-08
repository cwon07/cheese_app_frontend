import { baseUrl } from "./base_url";
import { redirect } from 'react-router-dom';

export const createAction = async ({request}) => {
    // get the data from the form in the request
    const formData = await request.formData()
    // setup the object for new cheese
    const newCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('countryOfOrigin')
    }
    // send the new cheese to backend API
    await fetch(`${baseUrl}/cheese`, {
        // tell fetch to make a post request
        method: 'POST',
        headers: {
            // tells our backend that the data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newCheese object
        body: JSON.stringify(newCheese)
    })
    // redirect the user back to the frontend index route
    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id
    // grab the data from the form
    const formData = await request.formData()
    // build out the updated cheese
    const updatedCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('countryOfOrigin')
    }
    // send the updated person to our backend API
    await fetch(`${baseUrl}/cheese/${id}`, {
        // tell fetch to make a put request
        method: 'PUT',
        // tell backend that the data is in JSON format
        headers: {
            "Content-Type": "application/json"
        },
        // send the json string of the updatedCheese object
        body: JSON.stringify(updatedCheese)
    })
    // redirect the user to show page frontend route
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grab the id from the params
    const id = params.id
    // send a delete request to backend API
    await fetch(`${baseUrl}/cheese/${id}`, {
        // tell fetch to make a delte request
        method: 'DELETE'
    })
    // redirect user to the frontend index route
    return redirect('/')
}