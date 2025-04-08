import { TwigContext } from "../context/TwigContext"
import 'reflect-metadata'

export type LeafOptions = {
    name?: string
}

export function Leaf(options?: LeafOptions) : ClassDecorator {
    return function LeafLogic(constructor: any) {
        const prototype =constructor.prototype
        prototype.twig = {}
            Reflect.defineMetadata('aaaa', { value: 1123 }, constructor)
        const twigContext = prototype.twig
        twigContext.dependencies = {}
        twigContext.name = options?.name ?? constructor.name

        prototype.isLeaf = true
        TwigContext.getInstance().addLeaf(constructor)
    }
}
