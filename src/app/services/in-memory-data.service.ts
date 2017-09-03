import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
        { id: 1, name: 'banana', lost: true, found: false },
        { id: 2, name: 'car', lost: true, found: false },
        { id: 3, name: 'dog', lost: false, found: true },
        { id: 4, name: 'pc', lost: true, found: false },
        { id: 5, name: 'mug', lost: false, found: true },
        { id: 6, name: 'umbrella', lost: false, found: true },
        { id: 7, name: 'keys', lost: false, found: true },
    ];

    return {items};
  }
}