import { TwigContext } from "../../context/TwigContext";
import { NonLeafError } from "../../errors/BeanErrors/NonBean";
import { Leaf } from "../Leaf";
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { LeafAlreadyExists } from "../../errors/BeanErrors/LeafAlreadyExists";

describe("Testing Beans",()=>{
    class NonLeafClass{}

    beforeEach(()=>{
        @Leaf()
        class LeafClass{}

    })

    const context = TwigContext.getInstance();

    afterEach(() => {
        context.dumpLeaves()
    })


    it("should add a leaf to the context", () => {
        expect(context.getLeavesSize()).toBe(1)
    })

    it("should thorw on duplicate leaf", () => {
        @Leaf()
        class LeafClass2{}

        expect(() => context.addLeaf(LeafClass2, "LeafClass")).toThrowError(LeafAlreadyExists)
            
    })

    it("should throw on non leaf", () => {
        expect(() => context.addLeaf(NonLeafClass)).toThrowError(NonLeafError)
    })
})



