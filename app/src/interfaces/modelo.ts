import { Imprimible } from './imprimible.js';
import { Comparable } from './comparable.js';
export interface Modelo<T> extends Imprimible, Comparable<T> {

}