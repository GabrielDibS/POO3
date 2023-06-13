import Location from "../Location";
import Game from "./Game";
import Item from "./interface/Item";

export default class GameLocation extends Location{
    protected createItem(): Item {
        return new Game();
    }
}