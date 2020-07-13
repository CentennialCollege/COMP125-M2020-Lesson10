// IIFE module
"use strict";
let objects;
(function(objects){
    class Contact {
        constructor(firstName="", lastName="", emailAddress="", contactNumber="", shortMessage="") {
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailAddress = emailAddress;
            this.contactNumber = contactNumber;
            this.shortMessage = shortMessage;
        }

        toString()
        {
            let outputstring = "";
            outputstring += "First Name    : " + this.firstName + "\n";
            outputstring += "Last Name     : " + this.lastName + "\n";
            outputstring += "Email Address : " + this.emailAddress + "\n";
            outputstring += "Contact Number: " + this.contactNumber + "\n";
            outputstring += "Short Message : " + this.shortMessage + "\n";
            return outputstring;
        }
    }
    objects.Contact = Contact;

}(objects || (objects = {})));