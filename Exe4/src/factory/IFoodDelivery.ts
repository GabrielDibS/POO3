import SoftDrink from "../deliveryz/drinkables/SoftDrink";
import IDrink from "../deliveryz/drinkables/interfaces/IDrink";
import HotDog from "../deliveryz/eatables/HotDog";
import IFood from "../deliveryz/eatables/interfaces/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
        
    }
}