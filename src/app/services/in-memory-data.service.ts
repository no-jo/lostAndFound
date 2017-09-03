import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
        { id: 1, name: 'banana', lostDate: "1990-02-08", foundDate: null },
        { id: 2, name: 'car', lostDate: "1991-02-08", foundDate: null },
        { id: 3, name: 'dog', lostDate: "1992-02-08", foundDate: null },
        { id: 4, name: 'pc', lostDate: null, foundDate: "1990-02-26" },
        { id: 5, name: 'mug', lostDate:"1993-02-08", foundDate: null },
        { id: 6, name: 'umbrella', lostDate: null, foundDate: "1990-02-26"},
        { id: 7, name: 'keys', lostDate: null, foundDate: "1990-02-25" },
    ];

    const requests = [
        {id: 1, user: 'john', submissionDate: "2017-07-02", itemId: 2, status: 'pending', adminDecision: null}
    ];

    return {items, requests};
  }
}
