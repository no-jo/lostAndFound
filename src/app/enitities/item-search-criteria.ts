export class ItemSearchCriteria {
    idIs: number;
    nameLike: string;
    lostDateAfter: Date;
    lostDateBefore: Date;
    foundDateAfter: Date;
    foundDateBefore: Date;
    creationDateAfter: Date;
    creationDateBefore: Date;
    sizeIs: string;
    categoryLike: string;
    colorLike: string;
    ratingHigherThan: string;
    statusIs: string;
    materialLike: string;
}
