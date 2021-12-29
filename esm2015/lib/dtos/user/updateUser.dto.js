import { __awaiter, __decorate } from "tslib";
import { IsArray, IsNumber, IsOptional, IsString, IsEmail, IsPhoneNumber, ValidateNested, validateOrReject, } from 'class-validator';
export class UpdateUserDto {
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
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    IsEmail(),
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    IsOptional(),
    IsString()
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "photoURL", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "gender", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "dob", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "country", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "dietitianId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "salesPersonId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "relationManagerId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_duration", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_status", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_endDate", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_planPauseDate", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_extensionEndDate", void 0);
__decorate([
    IsOptional(),
    ValidateNested()
], UpdateUserDto.prototype, "subscription", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "counselling_date", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "counselling_time", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "counselling_status", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "followup_dt", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "followup_sp", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "followup_rm", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "dietDays", void 0);
__decorate([
    IsArray(),
    IsNumber({}, { each: true }),
    IsOptional()
], UpdateUserDto.prototype, "pinnedBy", void 0);
__decorate([
    IsArray(),
    IsNumber({}, { each: true }),
    IsOptional()
], UpdateUserDto.prototype, "rosterPinnedBy", void 0);
__decorate([
    IsOptional()
], UpdateUserDto.prototype, "customFields", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "age", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "height", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlVXNlci5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy91c2VyL3VwZGF0ZVVzZXIuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLE9BQU8sRUFDUCxhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBSXpCLE1BQU0sT0FBTyxhQUFhO0lBd0h4QixnQkFBZSxDQUFDO0lBRVYsUUFBUTs7WUFDWixJQUFJO2dCQUNGLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFoSUM7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7MkNBQ0M7QUFLZDtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0Q0FDRTtBQUtmO0lBSEMsYUFBYSxFQUFFO0lBQ2YsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFOzRDQUNJO0FBSWY7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7K0NBQ0s7QUFJbEI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NkNBQ0c7QUFJaEI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7MENBQ0E7QUFJYjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDSTtBQUlqQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtrREFDUTtBQUlyQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDYztBQUkzQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0REFDa0I7QUFJL0I7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7MERBQ2dCO0FBSTdCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJEQUN3QjtBQUlyQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtpRUFDOEI7QUFJM0M7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7b0VBQ2lDO0FBSTlDO0lBRkMsVUFBVSxFQUFFO0lBQ1osY0FBYyxFQUFFO21EQUNrQjtBQUluQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt1REFDYTtBQUkxQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt1REFDYTtBQUkxQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt5REFDZTtBQUs1QjtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixVQUFVLEVBQUU7a0RBQ1U7QUFLdkI7SUFIQyxPQUFPLEVBQUU7SUFDVCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEIsVUFBVSxFQUFFO2tEQUNVO0FBS3ZCO0lBSEMsT0FBTyxFQUFFO0lBQ1QsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLFVBQVUsRUFBRTtrREFDVTtBQUt2QjtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixVQUFVLEVBQUU7K0NBQ087QUFLcEI7SUFIQyxPQUFPLEVBQUU7SUFDVCxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzVCLFVBQVUsRUFBRTsrQ0FDTztBQUtwQjtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUIsVUFBVSxFQUFFO3FEQUNhO0FBRzFCO0lBREMsVUFBVSxFQUFFO21EQUN5QjtBQUl0QztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTswQ0FDQTtBQUliO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzZDQUNHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBJc0VtYWlsLFxuICBJc1Bob25lTnVtYmVyLFxuICBWYWxpZGF0ZU5lc3RlZCxcbiAgdmFsaWRhdGVPclJlamVjdCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9zdWJzY3JpcHRpb24nO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckR0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNFbWFpbCgpXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgQElzUGhvbmVOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcGhvdG9VUkw/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBnZW5kZXI/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkb2I/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb3VudHJ5Pzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlldGl0aWFuSWQ/OiBudW1iZXI7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBzYWxlc1BlcnNvbklkPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRpb25NYW5hZ2VySWQ/OiBudW1iZXI7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBzdWJzY3JpcHRpb25fZHVyYXRpb24/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBzdWJzY3JpcHRpb25fc3RhdHVzPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3Vic2NyaXB0aW9uX2VuZERhdGU/OiBzdHJpbmcgfCBudWxsO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3Vic2NyaXB0aW9uX3BsYW5QYXVzZURhdGU/OiBzdHJpbmcgfCBudWxsO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3Vic2NyaXB0aW9uX2V4dGVuc2lvbkVuZERhdGU/OiBzdHJpbmcgfCBudWxsO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQFZhbGlkYXRlTmVzdGVkKClcbiAgc3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGNvdW5zZWxsaW5nX2RhdGU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb3Vuc2VsbGluZ190aW1lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY291bnNlbGxpbmdfc3RhdHVzPzogc3RyaW5nO1xuXG4gIEBJc0FycmF5KClcbiAgQElzU3RyaW5nKHsgZWFjaDogdHJ1ZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIGZvbGxvd3VwX2R0Pzogc3RyaW5nW107XG5cbiAgQElzQXJyYXkoKVxuICBASXNTdHJpbmcoeyBlYWNoOiB0cnVlIH0pXG4gIEBJc09wdGlvbmFsKClcbiAgZm9sbG93dXBfc3A/OiBzdHJpbmdbXTtcblxuICBASXNBcnJheSgpXG4gIEBJc1N0cmluZyh7IGVhY2g6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBmb2xsb3d1cF9ybT86IHN0cmluZ1tdO1xuXG4gIEBJc0FycmF5KClcbiAgQElzU3RyaW5nKHsgZWFjaDogdHJ1ZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIGRpZXREYXlzPzogc3RyaW5nW107XG5cbiAgQElzQXJyYXkoKVxuICBASXNOdW1iZXIoe30sIHsgZWFjaDogdHJ1ZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIHBpbm5lZEJ5PzogbnVtYmVyW107XG5cbiAgQElzQXJyYXkoKVxuICBASXNOdW1iZXIoe30sIHsgZWFjaDogdHJ1ZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIHJvc3RlclBpbm5lZEJ5PzogbnVtYmVyW107XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjdXN0b21GaWVsZHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgYWdlPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19