import { Vector2 } from "three";
import { Node, NodeRepresentation, ShaderNodeObject, TempNode, TextureNode } from "three/tsl";

declare class GaussianBlurNode extends TempNode {
    textureNode: TextureNode;
    directionNode: Node | null;
    sigma: number;

    resolution: Vector2;

    premultipliedAlpha: boolean;

    constructor(textureNode: TextureNode, directionNode?: Node | null, sigma?: number);

    setPremultipliedAlpha(value: boolean): this;

    getPremultipliedAlpha(): boolean;

    setSize(width: number, height: number): void;

    getTextureNode(): TextureNode;
}

export default GaussianBlurNode;

export const gaussianBlur: (
    node: NodeRepresentation,
    directionNode?: NodeRepresentation | null,
    sigma?: number,
) => ShaderNodeObject<GaussianBlurNode>;
export const premultipliedGaussianBlur: (
    node: NodeRepresentation,
    directionNode?: NodeRepresentation | null,
    sigma?: number,
) => ShaderNodeObject<GaussianBlurNode>;