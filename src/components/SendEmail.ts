


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
// const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  // Client-side stub
  console.log("Email sending is currently disabled in the client-side version.", Object.fromEntries(formdata));
  alert("Email functionality requires a backend server. Check console for form data.");
  return;
};
