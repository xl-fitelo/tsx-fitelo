import { __awaiter, __decorate } from "tslib";
import { IsOptional, IsString, validateOrReject } from 'class-validator';
export class UpdateGroceryDto {
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
], UpdateGroceryDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateGroceryDto.prototype, "quantity", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateGroceryDto.prototype, "thumbnail", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateGroceryDto.prototype, "buyLink", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlR3JvY2VyeS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9ncm9jZXJ5L3VwZGF0ZUdyb2NlcnkuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE1BQU0sT0FBTyxnQkFBZ0I7SUFpQjNCLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXpCQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs4Q0FDQztBQUlkO0lBRkMsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFO2tEQUNPO0FBSWxCO0lBRkMsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFO21EQUNRO0FBSW5CO0lBRkMsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFO2lEQUNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNTdHJpbmcsIHZhbGlkYXRlT3JSZWplY3QgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZUdyb2NlcnlEdG8ge1xuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBxdWFudGl0eT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHRodW1ibmFpbD86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGJ1eUxpbms/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=