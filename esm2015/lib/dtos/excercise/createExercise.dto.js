import { __awaiter, __decorate } from "tslib";
import { IsNumber, IsOptional, IsString, validateOrReject } from 'class-validator';
export class CreateExerciseDto {
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
], CreateExerciseDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateExerciseDto.prototype, "videoLink", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateExerciseDto.prototype, "thumbnail", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateExerciseDto.prototype, "duration", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateExerciseDto.prototype, "caloriesBurn", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRXhlcmNpc2UuZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHN4LWZpdGVsby9zcmMvbGliL2R0b3MvZXhjZXJjaXNlL2NyZWF0ZUV4ZXJjaXNlLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFXLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUYsTUFBTSxPQUFPLGlCQUFpQjtJQXFCNUIsZ0JBQWUsQ0FBQztJQUVWLFFBQVE7O1lBQ1osSUFBSTtnQkFDRixNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUM7S0FBQTtDQUNGO0FBN0JDO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOytDQUNDO0FBSWQ7SUFGQyxVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7b0RBQ1E7QUFJbkI7SUFGQyxVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7b0RBQ1E7QUFJbkI7SUFGQyxVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7bURBQ087QUFJbEI7SUFGQyxVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7dURBQ1ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0FycmF5LCBJc051bWJlciwgSXNPcHRpb25hbCwgSXNTdHJpbmcsIHZhbGlkYXRlT3JSZWplY3QgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuZXhwb3J0IGNsYXNzIENyZWF0ZUV4ZXJjaXNlRHRvIHtcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgdmlkZW9MaW5rPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgdGh1bWJuYWlsPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNOdW1iZXIoKVxuICBjYWxvcmllc0J1cm4/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=