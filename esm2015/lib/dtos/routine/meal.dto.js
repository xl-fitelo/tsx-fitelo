import { __decorate } from "tslib";
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
export class MealDto {
    constructor() { }
}
__decorate([
    IsNumber(),
    IsOptional()
], MealDto.prototype, "id", void 0);
__decorate([
    IsString(),
    IsOptional()
], MealDto.prototype, "time", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], MealDto.prototype, "mealTaken", void 0);
__decorate([
    IsString(),
    IsOptional()
], MealDto.prototype, "mealNote", void 0);
__decorate([
    IsArray(),
    IsOptional()
], MealDto.prototype, "recipes", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhbC5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yb3V0aW5lL21lYWwuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJGLE1BQU0sT0FBTyxPQUFPO0lBcUJsQixnQkFBZSxDQUFDO0NBQ2pCO0FBbkJDO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21DQUNEO0FBSVo7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7cUNBQ0M7QUFJZDtJQUZDLFNBQVMsRUFBRTtJQUNYLFVBQVUsRUFBRTswQ0FDTztBQUlwQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt5Q0FDSztBQUlsQjtJQUZDLE9BQU8sRUFBRTtJQUNULFVBQVUsRUFBRTt3Q0FDaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0FycmF5LCBJc0Jvb2xlYW4sIElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBNZWFsRHRvIHtcbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBpZD86IG51bWJlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHRpbWU/OiBzdHJpbmc7XG5cbiAgQElzQm9vbGVhbigpXG4gIEBJc09wdGlvbmFsKClcbiAgbWVhbFRha2VuPzogYm9vbGVhbjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG1lYWxOb3RlPzogc3RyaW5nO1xuXG4gIEBJc0FycmF5KClcbiAgQElzT3B0aW9uYWwoKVxuICByZWNpcGVzPzogKG51bWJlciB8IHN0cmluZylbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=