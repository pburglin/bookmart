import { BaseEntity } from './../../shared';

export class Book implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public price?: number,
        public author?: BaseEntity,
    ) {
    }
}
