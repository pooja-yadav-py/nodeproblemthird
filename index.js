const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    console.log("server start succesfully");
    //path variable
    const path = req.url;

    //queryparams from path
    const urlData = url.parse(path,true)
    const queryParamsObject = url.parse(path,true).query
    console.log(path);
    console.log(urlData,queryParamsObject);
    console.log(queryParamsObject.radius);

    //create routes
    if(path.includes("circle")){
        const radius = queryParamsObject.radius;
        const areaOfCircle = Math.PI * radius * radius;
        const finalAreaOfCircle = areaOfCircle.toFixed(2);
        console.log("area of circle",finalAreaOfCircle);
        //setHeader
        res.setHeader("content-type","text/html");
        res.write(`Area of circle is ${finalAreaOfCircle}`);
        res.end();
    }
   
    //create routes
    else if(path.includes("sphere")){
        const radius = queryParamsObject.radius;
        const volumeOfSphere = 4*Math.PI * radius * radius;
        const finalVolumeOfSphere = volumeOfSphere.toFixed(2);
        console.log("volume of sphere is",finalVolumeOfSphere);
        //set Header
        res.setHeader("content-type","text/html");
        res.write(`volume of sphare is ${finalVolumeOfSphere}`);
        res.end();
    }
    else{
        res.write("Hello world");
        res.end();
    }

}).listen(8080);