import { __awaiter, __decorate } from "tslib";
import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, validateOrReject } from 'class-validator';
export class CreateAdminDto {
    constructor(password, roleId) {
        this.password = password;
        this.roleId = roleId;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.phone && !this.email)
                    return false;
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
], CreateAdminDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    IsOptional(),
    IsString()
], CreateAdminDto.prototype, "phone", void 0);
__decorate([
    IsString()
], CreateAdminDto.prototype, "password", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "displayName", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "emergencyPhone", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "personalEmail", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "joiningDate", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], CreateAdminDto.prototype, "reportingManager", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "address", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "experience", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "city", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "code", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "skillSet", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "specialSkill", void 0);
__decorate([
    IsNumber()
], CreateAdminDto.prototype, "roleId", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWRtaW4uZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHN4LWZpdGVsby9zcmMvbGliL2R0b3MvYWRtaW4vY3JlYXRlQWRtaW4uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsYUFBYSxFQUNiLFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixNQUFNLE9BQU8sY0FBYztJQWlFekIsWUFBYSxRQUFnQixFQUFFLE1BQWM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVLLFFBQVE7O1lBQ1osSUFBSTtnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU8sS0FBSyxDQUFDO2dCQUM3QyxNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUM7S0FBQTtDQUNGO0FBNUVDO0lBSEMsT0FBTyxFQUFFO0lBQ1QsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzZDQUNFO0FBS2Y7SUFIQyxhQUFhLEVBQUU7SUFDZixVQUFVLEVBQUU7SUFDWixRQUFRLEVBQUU7NkNBQ0k7QUFHZjtJQURDLFFBQVEsRUFBRTtnREFDTTtBQUlqQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs0Q0FDQztBQUlkO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNRO0FBSXJCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3NEQUNXO0FBSXhCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3FEQUNVO0FBSXZCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNRO0FBSXJCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3dEQUNhO0FBSTFCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOytDQUNJO0FBSWpCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO2tEQUNPO0FBSXBCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzRDQUNDO0FBSWQ7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NENBQ0M7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtnREFDSztBQUlsQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDUztBQUd0QjtJQURDLFFBQVEsRUFBRTs4Q0FDSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElzRW1haWwsXG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1Bob25lTnVtYmVyLFxuICBJc1N0cmluZyxcbiAgdmFsaWRhdGVPclJlamVjdFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWRtaW5EdG8ge1xuICBASXNFbWFpbCgpXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgQElzUGhvbmVOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBlbWVyZ2VuY3lQaG9uZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBlcnNvbmFsRW1haWw/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBqb2luaW5nRGF0ZT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHJlcG9ydGluZ01hbmFnZXI/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZXhwZXJpZW5jZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc2tpbGxTZXQ/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBzcGVjaWFsU2tpbGw/OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgcm9sZUlkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoIHBhc3N3b3JkOiBzdHJpbmcsIHJvbGVJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIHRoaXMucm9sZUlkID0gcm9sZUlkO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5waG9uZSAmJiAhdGhpcy5lbWFpbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19