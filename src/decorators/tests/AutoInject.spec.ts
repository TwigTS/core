import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { AutoInject } from "../AutoInject";
import { Leaf } from "../Leaf";



describe("Tesiting the AutoInject decorator", () =>{


    it("should work", () => {

        @Leaf()
        class B{
            constructor(){}
        }


        @Leaf()
        class A{

            @AutoInject()
            public bSerivice: string



        }


        const x = new A()


    })

})
