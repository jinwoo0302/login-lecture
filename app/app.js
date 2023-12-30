"use strict";

// 모듈
const express=require("express");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
dotenv.config();

const app=express();


// 라우팅
const home=require("./src/routes/home");


// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL통해 전달되는 데이터에 한글, 공백 등 문자 포함 시 제대로 인식되지 않는 에러 해결
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",home);

module.exports=app;