import Location from "./location/Location";

declare var process;

let location: Location;
if(process.argv.includes("--Grand Theft Auto)")){
    location = new GameLocation();
    location.startLocation();
}else if(process.argv.includes("--Toy Story")){
    location = new MovieLocation();
    location.startLocation();
}else{
    console.log("Selecione o tipo de item");
}