export const sendContactForm = async (data) => 
fetch('/api/contact', {
  
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Contact-Type": "application/json",
    Accept: "application/json",
  },
});