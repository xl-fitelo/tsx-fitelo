import { __decorate } from "tslib";
import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
export class Subscription {
}
__decorate([
    IsString(),
    IsOptional()
], Subscription.prototype, "planName", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Subscription.prototype, "discount", void 0);
__decorate([
    IsDateString(),
    IsOptional()
], Subscription.prototype, "startDate", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Subscription.prototype, "price", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Subscription.prototype, "extension", void 0);
__decorate([
    IsArray(),
    IsOptional()
], Subscription.prototype, "pause_history", void 0);
__decorate([
    IsNumber()
], Subscription.prototype, "transactionId", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHN4LWZpdGVsby9zcmMvbGliL2R0b3MvdXNlci9zdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEYsTUFBTSxPQUFPLFlBQVk7Q0EyQnhCO0FBeEJDO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzhDQUNLO0FBSWxCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzhDQUNLO0FBSWxCO0lBRkMsWUFBWSxFQUFFO0lBQ2QsVUFBVSxFQUFFOytDQUNNO0FBSW5CO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJDQUNFO0FBSWY7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7K0NBQ007QUFJbkI7SUFGQyxPQUFPLEVBQUU7SUFDVCxVQUFVLEVBQUU7bURBQ29DO0FBR2pEO0lBREMsUUFBUSxFQUFFO21EQUNZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNBcnJheSwgSXNEYXRlU3RyaW5nLCBJc051bWJlciwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIHtcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBwbGFuTmFtZT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGRpc2NvdW50PzogbnVtYmVyO1xuXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXJ0RGF0ZT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHByaWNlPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgZXh0ZW5zaW9uPzogbnVtYmVyO1xuXG4gIEBJc0FycmF5KClcbiAgQElzT3B0aW9uYWwoKVxuICBwYXVzZV9oaXN0b3J5PzogeyBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyB9W107XG5cbiAgQElzTnVtYmVyKClcbiAgdHJhbnNhY3Rpb25JZD86IHN0cmluZztcbn1cblxuIl19