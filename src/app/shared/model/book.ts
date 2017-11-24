import { Model } from './model';
import { VolumeInfo } from './volumeInfo';

export class Book extends Model {

    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo[];
    isFavorite: boolean;

    constructor(obj?) {
        super(obj);

        if (obj && obj.volumeInfo && obj.volumeInfo.length > 0) {
            obj.volumeInfo.forEach((element, index) => {
                obj.volumeInfo[index] = new VolumeInfo(element);
            });
        }
    }
}
