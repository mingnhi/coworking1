import { VenuesService } from './venues.service';
export declare class VenuesController {
    private readonly venuesService;
    constructor(venuesService: VenuesService);
    create(body: {
        name: string;
        location: string;
        capacity: number;
    }): Promise<import("./schemas/venue.schema").Venue>;
    findAll(): Promise<import("./schemas/venue.schema").Venue[]>;
    update(id: string, body: {
        name: string;
        location: string;
        capacity: number;
    }): Promise<import("./schemas/venue.schema").Venue>;
    delete(id: string): Promise<void>;
}
