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
exports.VenuesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const venue_schema_1 = require("./schemas/venue.schema");
let VenuesService = class VenuesService {
    constructor(venueModel) {
        this.venueModel = venueModel;
    }
    async create(name, location, capacity) {
        const newVenue = new this.venueModel({ name, location, capacity });
        return newVenue.save();
    }
    async findAll() {
        return this.venueModel.find().exec();
    }
    async findById(id) {
        return this.venueModel.findById(id).exec();
    }
    async update(id, name, location, capacity) {
        return this.venueModel.findByIdAndUpdate(id, { name, location, capacity }, { new: true }).exec();
    }
    async delete(id) {
        const result = await this.venueModel.findByIdAndDelete(id);
        if (!result) {
            throw new common_1.NotFoundException('Venue not found');
        }
    }
};
exports.VenuesService = VenuesService;
exports.VenuesService = VenuesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(venue_schema_1.Venue.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VenuesService);
//# sourceMappingURL=venues.service.js.map