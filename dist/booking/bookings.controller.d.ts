import { BookingsService } from './bookings.service';
import { BookingDto } from './dto/booking.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(BookingDto: BookingDto): Promise<import("./schemas/booking.schema").Booking>;
    findAll(): Promise<import("./schemas/booking.schema").Booking[]>;
    delete(id: string): Promise<void>;
    updateStatus(id: string, body: {
        status: string;
    }): Promise<import("./schemas/booking.schema").Booking>;
}
export declare class AvailabilityController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    checkAvailability(date: string, time: string): Promise<{
        available: boolean;
    }>;
}
