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
__decorate([
    IsString(),
    IsOptional()
], Macro.prototype, "unit", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjcm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yZWNpcGUvbWFjcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpFLE1BQU0sT0FBTyxLQUFLO0NBWWpCO0FBVEM7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7bUNBQ0M7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvQ0FDRTtBQUlmO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21DQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOdW1iZXIsIElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIE1hY3JvIHtcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBuYW1lITogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdmFsdWUhOiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB1bml0ITogc3RyaW5nO1xufVxuIl19