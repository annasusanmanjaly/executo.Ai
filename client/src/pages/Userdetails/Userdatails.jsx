import React,{useState} from 'react'
import photo from '../../assets/photo.png'
import './Userdetails.css'
// import { Link } from 'react-router-dom';




    function Userdetails() {
    const [value, setValue] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);
    const [isloggedin,setIsloggedin] = useState(true)
    const handleSubmit = () =>{
      setIsloggedin(!isloggedin)
    }
    const handleInputChange = (value) => {
        if (value && value.length >= 13) {
          setIsDisabled(false);
        } else {
          setIsDisabled(true);
        }
     setValue(value);
     };
return(
<div className='flex justify-center items-center flex-col'>
<div className='useless'>
<img src={photo} alt="photo" className="bio"/>
</div>
<div className='division'>
<h3 className='upload'>Upload your profile picture</h3>
<input type="text"
 className='name'
 onChange={handleInputChange}
 value='Enter your name'

 />     
<input type="text"
className='mail'
 onChange={handleInputChange}
  value='Enter your mail id'
  /> 
<button
            className={'save'}
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            Save
          </button>        
</div>
</div>
)
}

export default Userdetails;
