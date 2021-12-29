import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
import { DailyDietDto } from './dailyDiet.dto';
export class CreateWeeklydietDto {
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
], CreateWeeklydietDto.prototype, "name", void 0);
__decorate([
    IsString({ each: true }),
    IsOptional(),
    IsArray()
], CreateWeeklydietDto.prototype, "conditions", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "dietPreference", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "firstMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "secondMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "target", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "portionSize", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "residenceType", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], CreateWeeklydietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateWeeklydietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    IsArray(),
    Type(() => DailyDietDto)
], CreateWeeklydietDto.prototype, "dailyDiets", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2Vla2x5ZGlldC5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy93ZWVrbHlkaWV0L2NyZWF0ZVdlZWtseWRpZXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU0sT0FBTyxtQkFBbUI7SUFvRDlCLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTVEQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtpREFDQztBQUtkO0lBSEMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLFVBQVUsRUFBRTtJQUNaLE9BQU8sRUFBRTt1REFDWTtBQUl0QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTsyREFDVztBQUl4QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTsyREFDVztBQUl4QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0REFDWTtBQUl6QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTttREFDRztBQUloQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDUTtBQUlyQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTswREFDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDUTtBQUlyQjtJQUZDLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTt1REFDUztBQUlwQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTttREFDRztBQU1oQjtJQUpDLFVBQVUsRUFBRTtJQUNaLGNBQWMsRUFBRTtJQUNoQixPQUFPLEVBQUU7SUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO3VEQUNHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIElzQXJyYXksXG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgVmFsaWRhdGVOZXN0ZWQsXG4gIHZhbGlkYXRlT3JSZWplY3QsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBEYWlseURpZXREdG8gfSBmcm9tICcuL2RhaWx5RGlldC5kdG8nO1xuZXhwb3J0IGNsYXNzIENyZWF0ZVdlZWtseWRpZXREdG8ge1xuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKHsgZWFjaDogdHJ1ZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIEBJc0FycmF5KClcbiAgY29uZGl0aW9ucz86IHN0cmluZ1tdO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlldFByZWZlcmVuY2U/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBmaXJzdE1ham9yRm9vZD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHNlY29uZE1ham9yRm9vZD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHRhcmdldD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBvcnRpb25TaXplPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcmVzaWRlbmNlVHlwZT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHN1Ym1pdHRlZEJ5PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzTnVtYmVyKClcbiAgYXBwcm92ZWRCeT86IG51bWJlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXR1cz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBWYWxpZGF0ZU5lc3RlZCgpXG4gIEBJc0FycmF5KClcbiAgQFR5cGUoKCkgPT4gRGFpbHlEaWV0RHRvKVxuICBkYWlseURpZXRzPzogRGFpbHlEaWV0RHRvW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=