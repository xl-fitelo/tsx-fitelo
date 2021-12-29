import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
import { Macro } from './macro';
export class UpdateRecipeDto {
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
], UpdateRecipeDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsArray()
], UpdateRecipeDto.prototype, "conditions", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateRecipeDto.prototype, "calories", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateRecipeDto.prototype, "blogLink", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsNumber({}, { each: true })
], UpdateRecipeDto.prototype, "groceryIds", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested(),
    Type(() => Macro)
], UpdateRecipeDto.prototype, "macros", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWRwYXRlUmVjaXBlLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RzeC1maXRlbG8vc3JjL2xpYi9kdG9zL3JlY2lwZS91ZHBhdGVSZWNpcGUuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVoQyxNQUFNLE9BQU8sZUFBZTtJQTRCMUIsZ0JBQWUsQ0FBQztJQUVWLFFBQVE7O1lBQ1osSUFBSTtnQkFDRixNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUM7S0FBQTtDQUNGO0FBcENDO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzZDQUNDO0FBSWQ7SUFGQyxVQUFVLEVBQUU7SUFDWixPQUFPLEVBQUU7bURBQ1k7QUFJdEI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7aURBQ0s7QUFJbEI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7aURBQ0s7QUFLbEI7SUFIQyxVQUFVLEVBQUU7SUFDWixPQUFPLEVBQUU7SUFDVCxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO21EQUNQO0FBTXRCO0lBSkMsVUFBVSxFQUFFO0lBQ1osT0FBTyxFQUFFO0lBQ1QsY0FBYyxFQUFFO0lBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBWYWxpZGF0ZU5lc3RlZCxcbiAgdmFsaWRhdGVPclJlamVjdCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IE1hY3JvIH0gZnJvbSAnLi9tYWNybyc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVSZWNpcGVEdG8ge1xuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNBcnJheSgpXG4gIGNvbmRpdGlvbnM/OiBzdHJpbmdbXTtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGNhbG9yaWVzPzogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgYmxvZ0xpbms/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNBcnJheSgpXG4gIEBJc051bWJlcih7fSwgeyBlYWNoOiB0cnVlIH0pXG4gIGdyb2NlcnlJZHM/OiBudW1iZXJbXTtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0FycmF5KClcbiAgQFZhbGlkYXRlTmVzdGVkKClcbiAgQFR5cGUoKCkgPT4gTWFjcm8pXG4gIG1hY3Jvcz86IE1hY3JvW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=