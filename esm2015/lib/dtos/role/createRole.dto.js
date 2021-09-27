import { __awaiter, __decorate } from "tslib";
import { IsArray, IsString, validateOrReject } from 'class-validator';
export class Permission {
    constructor(name, menu, view, add, edit, remove) {
        this.name = name;
        this.menu = menu;
        this.view = view;
        this.add = add;
        this.edit = edit;
        this.delete = remove;
    }
}
export class CreateRoleDto {
    constructor(name, permissions) {
        this.name = name;
        this.permissions = permissions;
    }
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
    IsString()
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    IsArray()
], CreateRoleDto.prototype, "permissions", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUm9sZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yb2xlL2NyZWF0ZVJvbGUuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixNQUFNLE9BQU8sVUFBVTtJQVNyQixZQUFZLElBQVksRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLEdBQVksRUFBRSxJQUFhLEVBQUUsTUFBZTtRQUNsRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxhQUFhO0lBT3hCLFlBQVksSUFBWSxFQUFFLFdBQXlCO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFSyxRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQW5CQztJQURDLFFBQVEsRUFBRTsyQ0FDRTtBQUdiO0lBREMsT0FBTyxFQUFFO2tEQUNnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElzQXJyYXksXG4gIElzU3RyaW5nLFxuICB2YWxpZGF0ZU9yUmVqZWN0XG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBtZW51OiBib29sZWFuO1xuICB2aWV3OiBib29sZWFuO1xuICBhZGQ6IGJvb2xlYW47XG4gIGVkaXQ6IGJvb2xlYW47XG4gIGRlbGV0ZTogYm9vbGVhbjtcblxuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVudTogYm9vbGVhbiwgdmlldzogYm9vbGVhbiwgYWRkOiBib29sZWFuLCBlZGl0OiBib29sZWFuLCByZW1vdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWVudSA9IG1lbnU7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB0aGlzLmFkZCA9IGFkZDtcbiAgICB0aGlzLmVkaXQgPSBlZGl0O1xuICAgIHRoaXMuZGVsZXRlID0gcmVtb3ZlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVSb2xlRHRvIHtcbiAgQElzU3RyaW5nKClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBJc0FycmF5KClcbiAgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25bXTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW10pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=