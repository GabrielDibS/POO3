import RedeSulAdapter from "./adapters/RedeSulAdapter";
import Correios from "./correios/Correios";
import ICorreiosTransport from "./correios/ICorreiosTransport";
import RedeSul from "./redesul/RedeSul";

const transport : ICorreiosTransport = new Correios();
transport.sendCorreios();
transport.receiveCorreios();

const transport1 : ICorreiosTransport = new RedeSulAdapter(new RedeSul());
transport1.sendCorreios();
transport1.receiveCorreios();
