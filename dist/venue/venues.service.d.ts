import { Model } from 'mongoose';
import { Venue, VenueDocument } from './schemas/venue.schema';
export declare class VenuesService {
    private venueModel;
    constructor(venueModel: Model<VenueDocument>);
    create(name: string, location: string, capacity: number): Promise<Venue>;
    findAll(): Promise<Venue[]>;
    findById(id: string): Promise<Venue>;
    update(id: string, name: string, location: string, capacity: number): Promise<Venue>;
    delete(id: string): Promise<void>;
}
