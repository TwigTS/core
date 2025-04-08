import { Leaf, LeafOptions } from "../Leaf";

type ComponentOptions = LeafOptions

export function Component(options?:  ComponentOptions) {
    
    return function(constructor: Function){
        Leaf()(constructor)
        constructor.prototype.isService = true;
    }
}

