import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
    en_no:{
        type:String,
        required:true,
    },
    marks:{
        type:String,
        required:true,
    },
    exam_name:{
        type:String,
        required:true,
    }
});

const Result =mongoose.model('testExam',ResultSchema);
export default Result;