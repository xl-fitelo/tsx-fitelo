import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
import { DailyDietDto } from './dailyDiet.dto';
export class UpdateWeeklydietDto {
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
], UpdateWeeklydietDto.prototype, "name", void 0);
__decorate([
    IsString({ each: true }),
    IsOptional(),
    IsArray()
], UpdateWeeklydietDto.prototype, "conditions", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "dietPreference", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "firstMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "secondMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "target", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "portionSize", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "residenceType", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateWeeklydietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    IsArray(),
    Type(() => DailyDietDto)
], UpdateWeeklydietDto.prototype, "dailyDiets", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlV2Vla2x5ZGlldC5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy93ZWVrbHlkaWV0L3VwZGF0ZVdlZWtseWRpZXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxtQkFBbUI7SUFvRDlCLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTVEQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtpREFDQztBQUtkO0lBSEMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLFVBQVUsRUFBRTtJQUNaLE9BQU8sRUFBRTt1REFDWTtBQUl0QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTsyREFDVztBQUl4QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTsyREFDVztBQUl4QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0REFDWTtBQUl6QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTttREFDRztBQUloQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDUTtBQUlyQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTswREFDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDUTtBQUlyQjtJQUZDLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTt1REFDUztBQUlwQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTttREFDRztBQU1oQjtJQUpDLFVBQVUsRUFBRTtJQUNaLGNBQWMsRUFBRTtJQUNoQixPQUFPLEVBQUU7SUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO3VEQUNHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIElzQXJyYXksXG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgVmFsaWRhdGVOZXN0ZWQsXG4gIHZhbGlkYXRlT3JSZWplY3QsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBEYWlseURpZXREdG8gfSBmcm9tICcuL2RhaWx5RGlldC5kdG8nO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlV2Vla2x5ZGlldER0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoeyBlYWNoOiB0cnVlIH0pXG4gIEBJc09wdGlvbmFsKClcbiAgQElzQXJyYXkoKVxuICBjb25kaXRpb25zPzogc3RyaW5nW107XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkaWV0UHJlZmVyZW5jZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGZpcnN0TWFqb3JGb29kPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc2Vjb25kTWFqb3JGb29kPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcG9ydGlvblNpemU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICByZXNpZGVuY2VUeXBlPzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc3VibWl0dGVkQnk/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNOdW1iZXIoKVxuICBhcHByb3ZlZEJ5PzogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhdHVzPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQFZhbGlkYXRlTmVzdGVkKClcbiAgQElzQXJyYXkoKVxuICBAVHlwZSgoKSA9PiBEYWlseURpZXREdG8pXG4gIGRhaWx5RGlldHM/OiBEYWlseURpZXREdG9bXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlT3JSZWplY3QodGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEdG8gVmFsaWRhdGlvbiBGYWlsZWQuIEVycm9yczogJywgZXJyb3JzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==