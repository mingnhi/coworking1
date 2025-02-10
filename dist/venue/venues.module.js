"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const venues_service_1 = require("./venues.service");
const venues_controller_1 = require("./venues.controller");
const venue_schema_1 = require("./schemas/venue.schema");
let VenuesModule = class VenuesModule {
};
exports.VenuesModule = VenuesModule;
exports.VenuesModule = VenuesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: venue_schema_1.Venue.name, schema: venue_schema_1.VenueSchema }])],
        controllers: [venues_controller_1.VenuesController],
        providers: [venues_service_1.VenuesService],
    })
], VenuesModule);
//# sourceMappingURL=venues.module.js.map