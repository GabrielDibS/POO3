import IDrink from "../../deliveryz/drinkables/interfaces/IDrink";
import IFood from "../../deliveryz/eatables/interfaces/IFood";

export default interface IDeliveryFactory{
    
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}