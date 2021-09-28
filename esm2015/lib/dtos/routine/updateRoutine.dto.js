import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested, validateOrReject, } from 'class-validator';
import { MealDto } from './meal.dto';
import { WorkoutDto } from './workout.dto';
export class UpdateRoutineDto {
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
    IsOptional(),
    ValidateNested({ each: true }),
    IsArray(),
    Type(() => MealDto)
], UpdateRoutineDto.prototype, "meals", void 0);
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    IsArray(),
    Type(() => WorkoutDto)
], UpdateRoutineDto.prototype, "workouts", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlUm91dGluZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yb3V0aW5lL3VwZGF0ZVJvdXRpbmUuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBYTNCLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQW5CQztJQUpDLFVBQVUsRUFBRTtJQUNaLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM5QixPQUFPLEVBQUU7SUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNGO0FBTWxCO0lBSkMsVUFBVSxFQUFFO0lBQ1osY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzlCLE9BQU8sRUFBRTtJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7a0RBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNPcHRpb25hbCxcbiAgVmFsaWRhdGVOZXN0ZWQsXG4gIHZhbGlkYXRlT3JSZWplY3QsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBNZWFsRHRvIH0gZnJvbSAnLi9tZWFsLmR0byc7XG5pbXBvcnQgeyBXb3Jrb3V0RHRvIH0gZnJvbSAnLi93b3Jrb3V0LmR0byc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVSb3V0aW5lRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBAVmFsaWRhdGVOZXN0ZWQoeyBlYWNoOiB0cnVlIH0pXG4gIEBJc0FycmF5KClcbiAgQFR5cGUoKCkgPT4gTWVhbER0bylcbiAgbWVhbHM/OiBNZWFsRHRvW107XG5cbiAgQElzT3B0aW9uYWwoKVxuICBAVmFsaWRhdGVOZXN0ZWQoeyBlYWNoOiB0cnVlIH0pXG4gIEBJc0FycmF5KClcbiAgQFR5cGUoKCkgPT4gV29ya291dER0bylcbiAgd29ya291dHM/OiBXb3Jrb3V0RHRvW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB2YWxpZGF0ZU9yUmVqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmxvZygnRHRvIFZhbGlkYXRpb24gRmFpbGVkLiBFcnJvcnM6ICcsIGVycm9ycyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=