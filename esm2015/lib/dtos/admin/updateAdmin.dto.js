import { __awaiter, __decorate } from "tslib";
import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, validateOrReject, } from 'class-validator';
export class UpdateAdminDto {
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
    IsEmail(),
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    IsOptional(),
    IsString()
], UpdateAdminDto.prototype, "phone", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "photoURL", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "displayName", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "emergencyPhone", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "personalEmail", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "joiningDate", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateAdminDto.prototype, "reportingManager", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "address", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "experience", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "city", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "code", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "skillSet", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "specialSkill", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateAdminDto.prototype, "roleId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateAdminDto.prototype, "teamId", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "status", void 0);
__decorate([
    IsOptional()
], UpdateAdminDto.prototype, "reportsPinnedBy", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlQWRtaW4uZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHN4LWZpdGVsby9zcmMvbGliL2R0b3MvYWRtaW4vdXBkYXRlQWRtaW4uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsYUFBYSxFQUNiLFFBQVEsRUFDUixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixNQUFNLE9BQU8sY0FBYztJQThFekIsZ0JBQWUsQ0FBQztJQUVWLFFBQVE7O1lBQ1osSUFBSTtnQkFDRixNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUM7S0FBQTtDQUNGO0FBckZDO0lBSEMsT0FBTyxFQUFFO0lBQ1QsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzZDQUNFO0FBS2Y7SUFIQyxhQUFhLEVBQUU7SUFDZixVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7NkNBQ0k7QUFJZjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0Q0FDQztBQUlkO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO2dEQUNLO0FBSWxCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNRO0FBSXJCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3NEQUNXO0FBSXhCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3FEQUNVO0FBSXZCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNRO0FBSXJCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3dEQUNhO0FBSTFCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOytDQUNJO0FBSWpCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO2tEQUNPO0FBSXBCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzRDQUNDO0FBSWQ7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NENBQ0M7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtnREFDSztBQUlsQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDUztBQUl0QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDRztBQUdoQjtJQURDLFVBQVUsRUFBRTt1REFDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJc0FycmF5LFxuICBJc0VtYWlsLFxuICBJc051bWJlcixcbiAgSXNPcHRpb25hbCxcbiAgSXNQaG9uZU51bWJlcixcbiAgSXNTdHJpbmcsXG4gIHZhbGlkYXRlT3JSZWplY3QsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVBZG1pbkR0byB7XG4gIEBJc0VtYWlsKClcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBlbWFpbD86IHN0cmluZztcblxuICBASXNQaG9uZU51bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcGhvdG9VUkw/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkaXNwbGF5TmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGVtZXJnZW5jeVBob25lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcGVyc29uYWxFbWFpbD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGpvaW5pbmdEYXRlPzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgcmVwb3J0aW5nTWFuYWdlcj86IG51bWJlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBleHBlcmllbmNlPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY2l0eT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGNvZGU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBza2lsbFNldD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHNwZWNpYWxTa2lsbD86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHJvbGVJZD86IG51bWJlciB8IG51bGw7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICB0ZWFtSWQ/OiBudW1iZXIgfCBudWxsO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhdHVzPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVwb3J0c1Bpbm5lZEJ5PzogbnVtYmVyW10gfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19