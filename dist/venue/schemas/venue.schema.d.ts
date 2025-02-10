import { Document } from 'mongoose';
export type VenueDocument = Venue & Document;
export declare class Venue {
    name: string;
    location: string;
    capacity: number;
}
export declare const VenueSchema: import("mongoose").Schema<Venue, import("mongoose").Model<Venue, any, any, any, Document<unknown, any, Venue> & Venue & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Venue, Document<unknown, {}, import("mongoose").FlatRecord<Venue>> & import("mongoose").FlatRecord<Venue> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
