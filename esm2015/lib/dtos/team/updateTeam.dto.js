import { __awaiter, __decorate } from "tslib";
import { IsNumber, IsOptional, IsString, validateOrReject } from 'class-validator';
export class UpdateTeamDto {
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
], UpdateTeamDto.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateTeamDto.prototype, "teamLeader", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlVGVhbS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy90ZWFtL3VwZGF0ZVRlYW0uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsTUFBTSxPQUFPLGFBQWE7SUFTeEIsZ0JBQWUsQ0FBQztJQUVWLFFBQVE7O1lBQ1osSUFBSTtnQkFDRixNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUM7S0FBQTtDQUNGO0FBakJDO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJDQUNDO0FBSWQ7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7aURBQ08iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJc0FycmF5LFxuICBJc051bWJlcixcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmcsXG4gIHZhbGlkYXRlT3JSZWplY3Rcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVRlYW1EdG8ge1xuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICB0ZWFtTGVhZGVyPzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19