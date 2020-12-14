import React from "react"
import classes from "./Contacts.module.css"
import ContactItem from "./ContactItem/ContactItem"
import Image from "../../svg/wa.png"

const wa = Image

const Contacts = () => {
    return (
<div className={classes.ContactWrapper}>
   <ContactItem name="телефон" img={wa}/>
   <ContactItem name="телефон" img={wa}/>
   <ContactItem name="телефон" img={wa}/>
   <ContactItem name="телефон" img={wa}/>
    </div>
    )
}

export default Contacts