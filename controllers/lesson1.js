const helloRoute= (req ,res) =>{
    res.send("Hello Dani");
};

const helloDani= (req ,res) =>{
    res.send("Hello Daniel");
};

module.exports= {
    helloRoute,helloDani
};