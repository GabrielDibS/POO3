import Client from "./clients/Client";
import LimeFactory from "./factory/LimeFactory";
import NiniNineFactory from "./factory/NineNineFactory";
import UberFactory from "./factory/UberFactory";
import ITransportFactory from "./factory/interface/ITransportFactory";
import Company from "./vehicles/consts/Company";

const currentCompany = Company.UBER;
let factory! : ITransportFactory;
switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory();
        break;
    case Company.NINENINE:
        factory = new NiniNineFactory();
        break;
    case Company.LIME:
        factory = new LimeFactory();
        break;
    default :
        console.log("asdasd");

}

const client = new Client(factory);
client.startRoute();