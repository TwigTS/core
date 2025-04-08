import "reflect-metadata";

export function AutoInject() : MethodDecorator {
    return function(target: Object, propertyKey: string | symbol,) {
        setTimeout(() => {

            const type = Reflect.getMetadata("design:type", target);
            console.log("aaaaaaaaaa", type);
        }, 0);
    };
}
