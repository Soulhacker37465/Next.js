import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script id='12'>
        {`alert("Welcome to  contact page");`}
      </Script>
      this  is contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "contact Facebook - Connect with the world",
  description: "This is contact Facebook page and we can connect with the world using this app",
};