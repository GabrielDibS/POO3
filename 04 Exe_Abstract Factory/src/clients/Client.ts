import IDrink from "../deliveryz/drinkables/interfaces/IDrink";
import IFood from "../deliveryz/eatables/interfaces/IFood";
import IDeliveryFactory from "../factory/interface/IDeliveryFactory";

export default class Client{

    private eatables: IFood;
    private drinkables: IDrink;

    constructor(factory : IDeliveryFactory){

        this.drinkables = factory.createDeliveryDrink();
        this.eatables = factory.createDeliveryFood();
    }
    startDelivery(){

        this.eatables.getFood();
        this.drinkables.getDrink();
    }
}