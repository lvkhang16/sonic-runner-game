import k from "../kaplayCtx";

export function makeRing(pos) {
    const ring = k.add([
        k.sprite("ring", {anim: "spin"}),
        k.pos(pos),
        k.area(),
        k.anchor("center"),
        k.scale(4),
        k.offscreen(),
        "ring",
    ]);

    return ring;
}