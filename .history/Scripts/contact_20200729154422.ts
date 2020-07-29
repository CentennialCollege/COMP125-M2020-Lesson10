// IIFE module
"use strict";
export class Contact 
{
    constructor(public firstName:string="", public lastName:string="", public emailAddress:string="", public contactNumber:string="", public shortMessage:string="") 
    {
    } 

    public toString():string
    {
        let outputstring:string = "";
        outputstring += "First Name    : " + this.firstName + "\n";
        outputstring += "Last Name     : " + this.lastName + "\n";
        outputstring += "Email Address : " + this.emailAddress + "\n";
        outputstring += "Contact Number: " + this.contactNumber + "\n";
        outputstring += "Short Message : " + this.shortMessage + "\n";
        return outputstring;
    }

    public toJSON():any
    {
        let JSONObject =
        {
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            contactNumber: this.contactNumber,
            shortMessage: this.shortMessage, 
        };

        return JSONObject;
    }

    setContact(JSON_Data:any)
    {
        this.firstName = JSON_Data.firstName;
        this.lastName = JSON_Data.lastName;
        this.emailAddress = JSON_Data.emailAddress;
        this.contactNumber = JSON_Data.contactNumber;
        this.shortMessage = JSON_Data.shortMessage;
    }
}