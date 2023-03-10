export function filteredresults (query,usersArray) {
  let result = []
  for(let i = 0 ; i < usersArray.length;i++) {
    let temp = Object.values(usersArray[i].personalDetails).join("").toLocaleLowerCase()
    if(temp.includes(query.toLocaleLowerCase())){
        result.push(usersArray[i])
    }
  }
  return result
}





export function validateUser (user, step)  {
  const errors = {};

  if (step === 0) {
    if (!user.personalDetails.name) {
      errors.name= "Name is required";
    }
    if (!user.personalDetails.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.personalDetails.email)) {
      errors.email = "Email is invalid";
    }
    if (!user.personalDetails.phone) {
        errors.phone = "phone is required";
      } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(user.personalDetails.phone)) {
        errors.phone = "phone is invalid";
      }
      if (!user.personalDetails.state) {
        errors.state= "State is required";
      }
      if (!user.personalDetails.gender) {
        errors.gender= "Gender is required";
      }
      if (!user.personalDetails.city) {
        errors.city= "city is required";
      }
      if (!user.personalDetails.country) {
        errors.country= "Country is required";
      }
      if (!user.personalDetails.pincode) {
        errors.pincode= "Pincode is required";
      }
      else if(user.personalDetails.pincode.length !== 6){
        errors.pincode = "Pincode is invalid"
      }          
      if (!user.personalDetails.address1) {
        errors.address1= "Address1 is required";
      }
      if (!user.personalDetails.address2) {
        errors.address2= "Address2 is required";
      }
      if (!user.personalDetails.dateofbirth) {
      
        errors.dateofbirth= "Dateofbirth is required";
      } else if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(user.personalDetails.dateofbirth)) {
        errors.dateofbirth = "DateOfBirth is invalid";
      } else if (calculateAge(user.personalDetails.dateofbirth) < 18){
        errors.dateofbirth= "DateOfBirth is  less than 18" 
      }
      else if (calculateAge(user.personalDetails.dateofbirth) > 58){
        errors.dateofbirth= "DateOfBirth is  greater than 58" 
      }
  } else if (step === 1)  {
    if (!user.bankDetails.aadhaar) {
      errors.aadhaar = "Aadhaar is required";
    } else if (!/^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/.test(user.bankDetails.aadhaar)) {
        errors.aadhaar = "Aadhaar is invalid";
      }
    
    if (!user.bankDetails.pan) {
      errors.pan = "Pan is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(user.bankDetails.pan)) {
      errors.pan = "Pan is invalid";
    }
    if (!user.bankDetails.bankname) {
      errors.bankname= "BankName is required";
    }
    if (!user.bankDetails.bankaccountnumber) {
      errors.bankaccountnumber= "Account no is required";
    }
    if (!user.bankDetails.ifsc) {
      errors.ifsc= "Ifsc code is required";
    }
  }
  // else if (step === 2)  {
  //   if (!user.experience.length) {
  //     errors.aadhaar = "Aadhaar is required";
  //   } else if (!/^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/.test(user.bankDetails.aadhaar)) {
  //       errors.aadhaar = "Aadhaar is invalid";
  //     }
    
  
  // }



    return errors;
  }



  function calculateAge(date) {
    var formattedDate = date.split("/")
    var birthdateTimeStamp = new Date(formattedDate[2], formattedDate[1], formattedDate[0])
    var currentDate = new Date().getTime();
    var difference = currentDate - birthdateTimeStamp;
    var currentAge = Math.floor(difference / 31557600000)
    // dividing by 1000*60*60*24*365.25
    return currentAge
  }