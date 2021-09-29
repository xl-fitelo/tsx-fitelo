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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlVXNlci5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy91c2VyL3VwZGF0ZVVzZXIuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLE9BQU8sRUFDUCxhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBSXpCLE1BQU0sT0FBTyxhQUFhO0lBZ0h4QixnQkFBZSxDQUFDO0lBRVYsUUFBUTs7WUFDWixJQUFJO2dCQUNGLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUF4SEM7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7MkNBQ0M7QUFLZDtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0Q0FDRTtBQUtmO0lBSEMsYUFBYSxFQUFFO0lBQ2YsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFOzRDQUNJO0FBSWY7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7K0NBQ0s7QUFJbEI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NkNBQ0c7QUFJaEI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7MENBQ0E7QUFJYjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDSTtBQUlqQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtrREFDUTtBQUlyQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDYztBQUkzQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0REFDa0I7QUFJL0I7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7MERBQ2dCO0FBSTdCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJEQUN3QjtBQUlyQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtpRUFDOEI7QUFJM0M7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7b0VBQ2lDO0FBSTlDO0lBRkMsVUFBVSxFQUFFO0lBQ1osY0FBYyxFQUFFO21EQUNrQjtBQUluQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt1REFDYTtBQUkxQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt1REFDYTtBQUkxQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt5REFDZTtBQUs1QjtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixVQUFVLEVBQUU7a0RBQ1U7QUFLdkI7SUFIQyxPQUFPLEVBQUU7SUFDVCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEIsVUFBVSxFQUFFO2tEQUNVO0FBS3ZCO0lBSEMsT0FBTyxFQUFFO0lBQ1QsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLFVBQVUsRUFBRTtrREFDVTtBQUt2QjtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixVQUFVLEVBQUU7K0NBQ087QUFLcEI7SUFIQyxPQUFPLEVBQUU7SUFDVCxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzVCLFVBQVUsRUFBRTsrQ0FDTztBQUtwQjtJQUhDLE9BQU8sRUFBRTtJQUNULFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUIsVUFBVSxFQUFFO3FEQUNhO0FBRzFCO0lBREMsVUFBVSxFQUFFO21EQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElzQXJyYXksXG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgSXNFbWFpbCxcbiAgSXNQaG9uZU51bWJlcixcbiAgVmFsaWRhdGVOZXN0ZWQsXG4gIHZhbGlkYXRlT3JSZWplY3QsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vc3Vic2NyaXB0aW9uJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEdG8ge1xuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQElzRW1haWwoKVxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIEBJc1Bob25lTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBwaG9uZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBob3RvVVJMPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZ2VuZGVyPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY291bnRyeT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGRpZXRpdGlhbklkPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc2FsZXNQZXJzb25JZD86IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0aW9uTWFuYWdlcklkPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc3Vic2NyaXB0aW9uX2R1cmF0aW9uPzogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3Vic2NyaXB0aW9uX3N0YXR1cz86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN1YnNjcmlwdGlvbl9lbmREYXRlPzogc3RyaW5nIHwgbnVsbDtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN1YnNjcmlwdGlvbl9wbGFuUGF1c2VEYXRlPzogc3RyaW5nIHwgbnVsbDtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN1YnNjcmlwdGlvbl9leHRlbnNpb25FbmREYXRlPzogc3RyaW5nIHwgbnVsbDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBWYWxpZGF0ZU5lc3RlZCgpXG4gIHN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb3Vuc2VsbGluZ19kYXRlPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY291bnNlbGxpbmdfdGltZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGNvdW5zZWxsaW5nX3N0YXR1cz86IHN0cmluZztcblxuICBASXNBcnJheSgpXG4gIEBJc1N0cmluZyh7IGVhY2g6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBmb2xsb3d1cF9kdD86IHN0cmluZ1tdO1xuXG4gIEBJc0FycmF5KClcbiAgQElzU3RyaW5nKHsgZWFjaDogdHJ1ZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIGZvbGxvd3VwX3NwPzogc3RyaW5nW107XG5cbiAgQElzQXJyYXkoKVxuICBASXNTdHJpbmcoeyBlYWNoOiB0cnVlIH0pXG4gIEBJc09wdGlvbmFsKClcbiAgZm9sbG93dXBfcm0/OiBzdHJpbmdbXTtcblxuICBASXNBcnJheSgpXG4gIEBJc1N0cmluZyh7IGVhY2g6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBkaWV0RGF5cz86IHN0cmluZ1tdO1xuXG4gIEBJc0FycmF5KClcbiAgQElzTnVtYmVyKHt9LCB7IGVhY2g6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBwaW5uZWRCeT86IG51bWJlcltdO1xuXG4gIEBJc0FycmF5KClcbiAgQElzTnVtYmVyKHt9LCB7IGVhY2g6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICByb3N0ZXJQaW5uZWRCeT86IG51bWJlcltdO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY3VzdG9tRmllbGRzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlT3JSZWplY3QodGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEdG8gVmFsaWRhdGlvbiBGYWlsZWQuIEVycm9yczogJywgZXJyb3JzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==