import express from "express";
const app=express();

app.use(express.static("public"));
app.use(express.json());

const biodata={
    nama:["Aliya Rohaya Siregar"],
    nim:["02042111005"],
    alamat:["Padang Bujur"],
    kecamatan:["Sipirok"],
    propinsi:["Sumatera Utara"],
    ttl:["Padang Bujur, 08-04-2003"],
    jenis_kelamin:["perempuan"],
    umur:["19 tahun"],
    agama:["islam"]}

app.get("/api/biodata",(req,res)=>{
    res.send(biodata);
})

app.listen(3000,()=>console.log("server sedang berjalan"));