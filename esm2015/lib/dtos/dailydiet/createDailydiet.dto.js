import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
import { MealDto } from '../routine/meal.dto';
export class CreateDailyDietDto {
    constructor() { }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield validateOrReject(this);
                return true;
            }
            catch (errors) {
                console.log('Dto Validation Failed. Errors: ', errors);
                return false;
            }
        });
    }
}
__decorate([
    IsString(),
    IsOptional()
], CreateDailyDietDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], CreateDailyDietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateDailyDietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateDailyDietDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    IsOptional(),
    IsArray(),
    Type(() => MealDto)
], CreateDailyDietDto.prototype, "meals", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGFpbHlkaWV0LmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RzeC1maXRlbG8vc3JjL2xpYi9kdG9zL2RhaWx5ZGlldC9jcmVhdGVEYWlseWRpZXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxrQkFBa0I7SUFzQjdCLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTlCQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtnREFDQztBQUdkO0lBREMsUUFBUSxFQUFFO3VEQUNVO0FBSXJCO0lBRkMsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFO3NEQUNTO0FBSXBCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO2tEQUNHO0FBTWhCO0lBSkMsY0FBYyxFQUFFO0lBQ2hCLFVBQVUsRUFBRTtJQUNaLE9BQU8sRUFBRTtJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBWYWxpZGF0ZU5lc3RlZCxcbiAgdmFsaWRhdGVPclJlamVjdCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IE1lYWxEdG8gfSBmcm9tICcuLi9yb3V0aW5lL21lYWwuZHRvJztcblxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlRGFpbHlEaWV0RHRvIHtcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIHN1Ym1pdHRlZEJ5PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzTnVtYmVyKClcbiAgYXBwcm92ZWRCeT86IG51bWJlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXR1cz86IHN0cmluZztcblxuICBAVmFsaWRhdGVOZXN0ZWQoKVxuICBASXNPcHRpb25hbCgpXG4gIEBJc0FycmF5KClcbiAgQFR5cGUoKCkgPT4gTWVhbER0bylcbiAgbWVhbHM/OiBNZWFsRHRvW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=