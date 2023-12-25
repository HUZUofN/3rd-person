import * as THREE from 'three';
import * as CANNON from 'cannon';
import { Vehicle } from './Vehicle';
import { IControllable } from '../interfaces/IControllable';
import { IWorldEntity } from '../interfaces/IWorldEntity';
import { EntityType } from '../enums/EntityType';
export declare class Airplane extends Vehicle implements IControllable, IWorldEntity {
    entityType: EntityType;
    rotor: THREE.Object3D;
    currentSpeed: number;
    private steeringSimulator;
    private enginePower;
    private lastDrag;
    constructor(gltf: any);
    noDirectionPressed(): boolean;
    update(timeStep: number): void;
    physicsPreStep(body: CANNON.Body, plane: Airplane): void;
    onInputChange(): void;
    readAirplaneData(gltf: any): void;
    inputReceiverInit(): void;
}
