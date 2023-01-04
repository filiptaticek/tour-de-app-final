import { useState } from "react"
import { FormButton } from "../formParts/FormButton"
import { UniversalInput } from "../formParts"
import { UniversalForm } from "./UniversalForm"
import { postRequest } from "../../src/functions/api/post"

export const AddUserForm = ()=>{

  const [showForm,setFormShown] = useState<boolean>(false)
  const [first_name,setFirstName] = useState<string>("")
  const [surname,setSurname] = useState<string>("")
  const handleAddingUsers = ()=>{
    event?.preventDefault()
    postRequest({first_name,surname,programmer_id:1},"programmer")
    setFormShown(false)
  }

  const handleFirstName = (event:any) => {setFirstName(event.target.value)}
  const handleSurname = (event:any) => {setSurname(event.target.value)}

  return(
    <>
      <div className="flex mb-2">
        <FormButton className="bg-main_color w-[150px] m-auto" onClick={()=>setFormShown(true)} text="Add users" />
      </div>
      {showForm&&
      <UniversalForm header="Add new user" closeForm={()=>setFormShown(false)} onSubmit={handleAddingUsers}>
        <UniversalInput text="Fill in the first name" value={first_name} onChange={handleFirstName} />
        <UniversalInput text="Fill in the surname" value={surname} onChange={handleSurname} />
        <div className="flex mt-8">
          <FormButton className="bg-button_green" type="submit" text="Add the user"/>
        </div>
      </UniversalForm>
      }
    </>
  )
}