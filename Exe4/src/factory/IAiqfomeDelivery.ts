import Beer from "../deliveryz/drinkables/Beer";
import IDrink from "../deliveryz/drinkables/interfaces/IDrink";
import Hamburger from "../deliveryz/eatables/Hamburger";
import IFood from "../deliveryz/eatables/interfaces/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IAiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburger();
    }

}