import { LeafAlreadyExists } from "../errors/BeanErrors/LeafAlreadyExists";
import { NonLeafError } from "../errors/BeanErrors/NonBean";

export class TwigContext{

    private static instance: TwigContext;

    private constructor(){}

    public static getInstance(){
        if(!TwigContext.instance)
            TwigContext.instance = new TwigContext();
        return TwigContext.instance
    }

    private leaves : Map<string, Function> = new Map<string, Function>();

    public addLeaf(classToAdd: any): void;
    public addLeaf(classToAdd: any, leafName?: string): void{

        if(!classToAdd.prototype.isLeaf){
            throw NonLeafError;
        }else{
            if(this.leaves.has(leafName ?? classToAdd.name)){
                throw LeafAlreadyExists;
            }
            this.leaves.set(leafName ?? classToAdd.name, classToAdd)
        }
    
    }

    public getLeavesSize(){
        return this.leaves.size;
    }


    public dumpLeaves(){
        this.leaves = new Map<string, Function>()
    }

    public getLeaves(): Map<string, Function>{
        return this.leaves;
    }


}
