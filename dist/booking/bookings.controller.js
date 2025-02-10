"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityController = exports.BookingsController = void 0;
const common_1 = require("@nestjs/common");
const bookings_service_1 = require("./bookings.service");
const booking_dto_1 = require("./dto/booking.dto");
const common_2 = require("@nestjs/common");
let BookingsController = class BookingsController {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
    }
    async create(BookingDto) {
        return this.bookingsService.create(BookingDto);
    }
    async findAll() {
        return this.bookingsService.findAll();
    }
    async delete(id) {
        return this.bookingsService.delete(id);
    }
    async updateStatus(id, body) {
        return this.bookingsService.updateStatus(id, body.status);
    }
};
exports.BookingsController = BookingsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_dto_1.BookingDto]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "updateStatus", null);
exports.BookingsController = BookingsController = __decorate([
    (0, common_1.Controller)('bookings'),
    __metadata("design:paramtypes", [bookings_service_1.BookingsService])
], BookingsController);
let AvailabilityController = class AvailabilityController {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
    }
    async checkAvailability(date, time) {
        const bookings = await this.bookingsService.findAll();
        const isAvailable = !bookings.some(b => b.date === date && b.time === time);
        return { available: isAvailable };
    }
};
exports.AvailabilityController = AvailabilityController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)('date')),
    __param(1, (0, common_2.Query)('time')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AvailabilityController.prototype, "checkAvailability", null);
exports.AvailabilityController = AvailabilityController = __decorate([
    (0, common_1.Controller)('availability'),
    __metadata("design:paramtypes", [bookings_service_1.BookingsService])
], AvailabilityController);
//# sourceMappingURL=bookings.controller.js.map