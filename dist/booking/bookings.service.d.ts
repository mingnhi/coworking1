import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { BookingDto } from './dto/booking.dto';
export declare class BookingsService {
    private bookingModel;
    constructor(bookingModel: Model<BookingDocument>);
    create(BookingDto: BookingDto): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findById(id: string): Promise<Booking>;
    delete(id: string): Promise<void>;
    updateStatus(id: string, status: string): Promise<Booking>;
}
