import { Model } from './model';
import { Book } from './book';

export class Volume extends Model {
    kind: string;
    totalItems: number;
    items: Book[];

    constructor(obj?) {
        super(obj);

        if (obj && obj.items.length > 0) {
            obj.items.forEach((element, index) => {
                obj.items[index] = new Book(element);
            });
        }
    }
}
