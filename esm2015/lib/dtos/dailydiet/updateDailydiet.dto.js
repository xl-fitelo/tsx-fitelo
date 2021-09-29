import { __awaiter, __decorate } from "tslib";
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
export class UpdateDailyDietDto {
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
    IsOptional(),
    IsString()
], UpdateDailyDietDto.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateDailyDietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateDailyDietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateDailyDietDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    IsOptional(),
    IsArray()
], UpdateDailyDietDto.prototype, "meals", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlRGFpbHlkaWV0LmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RzeC1maXRlbG8vc3JjL2xpYi9kdG9zL2RhaWx5ZGlldC91cGRhdGVEYWlseWRpZXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixNQUFNLE9BQU8sa0JBQWtCO0lBc0I3QixnQkFBZSxDQUFDO0lBRVYsUUFBUTs7WUFDWixJQUFJO2dCQUNGLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUE5QkM7SUFGQyxVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7Z0RBQ0c7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt1REFDUTtBQUlyQjtJQUZDLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTtzREFDUztBQUlwQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtrREFDRztBQUtoQjtJQUhDLGNBQWMsRUFBRTtJQUNoQixVQUFVLEVBQUU7SUFDWixPQUFPLEVBQUU7aURBQ1EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBWYWxpZGF0ZU5lc3RlZCxcbiAgdmFsaWRhdGVPclJlamVjdCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IE1lYWxEdG8gfSBmcm9tICcuLi9yb3V0aW5lL21lYWwuZHRvJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVEYWlseURpZXREdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBzdWJtaXR0ZWRCeT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc051bWJlcigpXG4gIGFwcHJvdmVkQnk/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBzdGF0dXM/OiBzdHJpbmc7XG5cbiAgQFZhbGlkYXRlTmVzdGVkKClcbiAgQElzT3B0aW9uYWwoKVxuICBASXNBcnJheSgpXG4gIG1lYWxzPzogTWVhbER0b1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19