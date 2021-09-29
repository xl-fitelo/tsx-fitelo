import { __awaiter, __decorate } from "tslib";
import { IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString, validateOrReject } from 'class-validator';
export class CreateUserDto {
    constructor(password) {
        this.password = password;
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
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    IsOptional(),
    IsString()
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    IsString()
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateUserDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    IsString(),
    IsDateString(),
    IsOptional()
], CreateUserDto.prototype, "dob", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy91c2VyL2NyZWF0ZVVzZXIuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixNQUFNLE9BQU8sYUFBYTtJQTJCeEIsWUFBYSxRQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUssUUFBUTs7WUFDWixJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQzdDLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFyQ0M7SUFIQyxPQUFPLEVBQUU7SUFDVCxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NENBQ0U7QUFLZjtJQUhDLGFBQWEsRUFBRTtJQUNmLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTs0Q0FDSTtBQUdmO0lBREMsUUFBUSxFQUFFOytDQUNNO0FBSWpCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJDQUNDO0FBSWQ7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7NkNBQ0c7QUFLaEI7SUFIQyxRQUFRLEVBQUU7SUFDVixZQUFZLEVBQUU7SUFDZCxVQUFVLEVBQUU7MENBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJc0RhdGVTdHJpbmcsXG4gIElzRW1haWwsXG4gIElzT3B0aW9uYWwsXG4gIElzUGhvbmVOdW1iZXIsXG4gIElzU3RyaW5nLFxuICB2YWxpZGF0ZU9yUmVqZWN0XG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VyRHRvIHtcbiAgQElzRW1haWwoKVxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIEBJc1Bob25lTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBwaG9uZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGdlbmRlcj86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNEYXRlU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkb2I/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoIHBhc3N3b3JkOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5waG9uZSAmJiAhdGhpcy5lbWFpbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19