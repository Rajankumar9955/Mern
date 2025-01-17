

const AuthorModel=require("../Models/authorModel");
const BookModel=require("../Models/bookModel")
const DataSave=async(req,res)=>{
   const {authorname,booktitle,bookprice}=req.body;
   try {
    const Author=await AuthorModel.create({
        authorname:authorname,
    })

    const Book=await BookModel.create({
        booktitle:booktitle,
        bookprice:bookprice,
        authorid:Author._id,
    })
          await AuthorModel.findByIdAndUpdate(Author._id, { $push: { books: Book._id } })
          res.send("Ok");

   } catch (error) {
    console.log(error)
   }

}
const UserDisplay=async(req,res)=>{
    const Data=await AuthorModel.find().populate("books");
    res.send(Data);
}


module.exports={
    DataSave,
    UserDisplay,
}