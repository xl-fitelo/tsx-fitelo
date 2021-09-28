import { __awaiter, __decorate } from "tslib";
import { IsNumber, IsOptional, IsString, validateOrReject, } from 'class-validator';
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
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "reportsPinnedBy", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlQWRtaW4uZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHN4LWZpdGVsby9zcmMvbGliL2R0b3MvYWRtaW4vdXBkYXRlQWRtaW4uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsTUFBTSxPQUFPLGNBQWM7SUFxRXpCLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTdFQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0Q0FDQztBQUlkO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO2dEQUNLO0FBSWxCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNRO0FBSXJCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3NEQUNXO0FBSXhCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3FEQUNVO0FBSXZCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNRO0FBSXJCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3dEQUNhO0FBSTFCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOytDQUNJO0FBSWpCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO2tEQUNPO0FBSXBCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzRDQUNDO0FBSWQ7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NENBQ0M7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtnREFDSztBQUlsQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDUztBQUl0QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDVTtBQUl2QjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDRztBQUloQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt1REFDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJc051bWJlcixcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmcsXG4gIHZhbGlkYXRlT3JSZWplY3QsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVBZG1pbkR0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBob3RvVVJMPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBlbWVyZ2VuY3lQaG9uZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBlcnNvbmFsRW1haWw/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBqb2luaW5nRGF0ZT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHJlcG9ydGluZ01hbmFnZXI/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZXhwZXJpZW5jZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc2tpbGxTZXQ/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBzcGVjaWFsU2tpbGw/OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICByb2xlSWQ/OiBudW1iZXIgfCBudWxsO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdGVhbUlkPzogbnVtYmVyIHwgbnVsbDtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXR1cz86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHJlcG9ydHNQaW5uZWRCeT86IG51bWJlcltdIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlT3JSZWplY3QodGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEdG8gVmFsaWRhdGlvbiBGYWlsZWQuIEVycm9yczogJywgZXJyb3JzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==