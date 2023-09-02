const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")
//@desc Get all contacts
//@route Get '/api/contacts'
//@access public

const getContacts= asyncHandler( async(req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)});



//@desc Create contacts
//@route Post ' /api/contacts/'
//@access public

const createContact=asyncHandler( async(req,res)=>{
    console.log("The reuest body is",req.body)
    const {name,email,phone} = req.body;
    if(!name || !email||!phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const contact=await Contact.create({
        name,email,phone,user_id:req.user.id
    })
    res.status(201).json(contact)
}); 

//@desc Get all conatcts id
//@route Get 'api/contacts/:id'
//@access public

const getContact=asyncHandler( async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error('Conatct not found')

    }
    res.status(200).json(contact)
});

//@desc Update all conatcts id
//@route PUT 'api/contacts/:id'
//@access public

const updateContact=asyncHandler( async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if (!contact){
      res.status(404)
      console.log("Contact not found")
    }
    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("USER DONT HAVE PERMISSION TO UPDATE OTER CONTACTS ")
    }
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new: true})
    res.status(200).json(updatedContact)
});

//@desc DELETE all conatcts id
//@route DELETE 'api/contacts/:id'
//@access public

const deleteContact=asyncHandler( async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if (!contact){
      res.status(404)
      console.log("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("USER DONT HAVE PERMISSION TO DELETE OTER CONTACTS ")
    }
     await Contact.deleteOne({_id:req.params.id})
    res.status(200).json(contact)
});


module.exports={getContacts,createContact,getContact,updateContact,deleteContact};