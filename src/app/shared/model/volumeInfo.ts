import { Model } from './model';

export class VolumeInfo extends Model {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    height: string;
    width: string;
    thickness: string;
    printType: string;
    mainCategory: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    contentVersion: string;
    imageLinks: Object;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;

    constructor(obj?) {
        super(obj);
    }
}
