import Item from "./things/interface/Item"

export default abstract class Location(
    startItem(): void{
        const item = this.createItem()
        Item.start()
    }
)