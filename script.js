function maskEmail(email) {
    const atIndex = email.indexOf('@');
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    if (username.length <= 2) {
      return username[0] + domain;
    }
  
    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const maskedPart = '*'.repeat(username.length - 2);
  
    return firstChar + maskedPart + lastChar + domain;
  }
  
  const email = "constantinegumunyu25@gmail.com.com";
  

  console.log(maskEmail(email));
  