declare type VertexIndexList = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
declare type TransitionVertexIndexList = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare class CellData {
    geometryCounts: number;
    vertexIndex: number[] | Uint8Array;
    vertexCount: number;
    triangleCount: number;
    constructor(geometryCounts: number, vertexIndex: Uint8Array);
    static getVertexCount(geometryCounts: number): number;
    static getTriangleCount(geometryCounts: number): number;
}
export declare class RegularCellData extends CellData {
    vertexIndex: VertexIndexList;
}
export declare class TransitionCellData extends CellData {
    vertexIndex: TransitionVertexIndexList;
}
export declare const regularCellClass: Uint8Array;
export declare const regularCellData: RegularCellData[];
export declare function getLocalIndexA(edgeCode: number): number;
export declare function getLocalIndexB(edgeCode: number): number;
export declare const regularVertexData: number[][];
export declare const transitionCellClass: number[];
export declare const transitionCornerData: number[];
export declare const transitionVertexData: number[][];
export {};
