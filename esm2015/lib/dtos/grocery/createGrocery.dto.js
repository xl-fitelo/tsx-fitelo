import { __awaiter, __decorate } from "tslib";
import { IsOptional, IsString, validateOrReject } from 'class-validator';
export class CreateGroceryDto {
    constructor(name, quantity, thumbnail, buyLink) {
        this.name = name;
        this.quantity = quantity;
        this.thumbnail = thumbnail;
        this.buyLink = buyLink;
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
], CreateGroceryDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateGroceryDto.prototype, "quantity", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateGroceryDto.prototype, "thumbnail", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateGroceryDto.prototype, "buyLink", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR3JvY2VyeS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9ncm9jZXJ5L2NyZWF0ZUdyb2NlcnkuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE1BQU0sT0FBTyxnQkFBZ0I7SUFnQjNCLFlBQVksSUFBWSxFQUFFLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxPQUFnQjtRQUMvRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUssUUFBUTs7WUFDWixJQUFJO2dCQUNGLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUE5QkM7SUFEQyxRQUFRLEVBQUU7OENBQ0U7QUFJYjtJQUZDLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTtrREFDTztBQUlsQjtJQUZDLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTttREFDUTtBQUluQjtJQUZDLFVBQVUsRUFBRTtJQUNaLFFBQVEsRUFBRTtpREFDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzT3B0aW9uYWwsIElzU3RyaW5nLCB2YWxpZGF0ZU9yUmVqZWN0IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmV4cG9ydCBjbGFzcyBDcmVhdGVHcm9jZXJ5RHRvIHtcbiAgQElzU3RyaW5nKClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgcXVhbnRpdHk/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICB0aHVtYm5haWw/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBidXlMaW5rPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcXVhbnRpdHk/OiBzdHJpbmcsIHRodW1ibmFpbD86IHN0cmluZywgYnV5TGluaz86IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgIHRoaXMudGh1bWJuYWlsID0gdGh1bWJuYWlsO1xuICAgIHRoaXMuYnV5TGluayA9IGJ1eUxpbms7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19