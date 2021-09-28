import { __decorate } from "tslib";
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class Macro {
}
__decorate([
    IsString(),
    IsOptional()
], Macro.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Macro.prototype, "value", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjcm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yZWNpcGUvbWFjcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpFLE1BQU0sT0FBTyxLQUFLO0NBUWpCO0FBTEM7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7bUNBQ0M7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvQ0FDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBNYWNybyB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZSE6IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHZhbHVlITogbnVtYmVyO1xufVxuIl19