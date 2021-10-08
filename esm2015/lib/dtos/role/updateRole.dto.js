import { __awaiter, __decorate } from "tslib";
import { IsArray, IsOptional, IsString, validateOrReject } from 'class-validator';
export class UpdateRoleDto {
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
], UpdateRoleDto.prototype, "name", void 0);
__decorate([
    IsArray(),
    IsOptional()
], UpdateRoleDto.prototype, "permissions", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlUm9sZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yb2xlL3VwZGF0ZVJvbGUuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFHekIsTUFBTSxPQUFPLGFBQWE7SUFTeEIsZ0JBQWUsQ0FBQztJQUVWLFFBQVE7O1lBQ1osSUFBSTtnQkFDRixNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUM7S0FBQTtDQUNGO0FBakJDO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJDQUNDO0FBSWQ7SUFGQyxPQUFPLEVBQUU7SUFDVCxVQUFVLEVBQUU7a0RBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJc0FycmF5LFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgdmFsaWRhdGVPclJlamVjdFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgUGVybWlzc2lvbiB9IGZyb20gJy4vY3JlYXRlUm9sZS5kdG8nO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlUm9sZUR0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNBcnJheSgpXG4gIEBJc09wdGlvbmFsKClcbiAgcGVybWlzc2lvbnM/OiBQZXJtaXNzaW9uW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=