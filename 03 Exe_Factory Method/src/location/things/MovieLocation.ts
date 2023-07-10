import Location from "../Location";
import Movie from "./Movie";
import Item from "./interface/Item";

export default class MovieLocation extends Location{
    protected createItem(): Item {
        return new Movie();
    }
}