import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsOptional, ValidateNested, validateOrReject, } from 'class-validator';
import { MealDto } from './meal.dto';
import { WorkoutDto } from './workout.dto';
export class CreateRoutineDto {
    constructor(date) {
        this.date = date;
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
    IsDateString()
], CreateRoutineDto.prototype, "date", void 0);
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    IsArray(),
    Type(() => MealDto)
], CreateRoutineDto.prototype, "meals", void 0);
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    IsArray(),
    Type(() => WorkoutDto)
], CreateRoutineDto.prototype, "workouts", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUm91dGluZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yb3V0aW5lL2NyZWF0ZVJvdXRpbmUuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osVUFBVSxFQUNWLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxPQUFPLGdCQUFnQjtJQWdCM0IsWUFBWSxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFSyxRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTNCQztJQURDLFlBQVksRUFBRTs4Q0FDRjtBQU1iO0lBSkMsVUFBVSxFQUFFO0lBQ1osY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzlCLE9BQU8sRUFBRTtJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ0Y7QUFNbEI7SUFKQyxVQUFVLEVBQUU7SUFDWixjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsT0FBTyxFQUFFO0lBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztrREFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQge1xuICBJc0FycmF5LFxuICBJc0RhdGVTdHJpbmcsXG4gIElzT3B0aW9uYWwsXG4gIFZhbGlkYXRlTmVzdGVkLFxuICB2YWxpZGF0ZU9yUmVqZWN0LFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBNZWFsRHRvIH0gZnJvbSAnLi9tZWFsLmR0byc7XG5pbXBvcnQgeyBXb3Jrb3V0RHRvIH0gZnJvbSAnLi93b3Jrb3V0LmR0byc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVSb3V0aW5lRHRvIHtcbiAgQElzRGF0ZVN0cmluZygpXG4gIGRhdGU6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBWYWxpZGF0ZU5lc3RlZCh7IGVhY2g6IHRydWUgfSlcbiAgQElzQXJyYXkoKVxuICBAVHlwZSgoKSA9PiBNZWFsRHRvKVxuICBtZWFscz86IE1lYWxEdG9bXTtcblxuICBASXNPcHRpb25hbCgpXG4gIEBWYWxpZGF0ZU5lc3RlZCh7IGVhY2g6IHRydWUgfSlcbiAgQElzQXJyYXkoKVxuICBAVHlwZSgoKSA9PiBXb3Jrb3V0RHRvKVxuICB3b3Jrb3V0cz86IFdvcmtvdXREdG9bXTtcblxuICBjb25zdHJ1Y3RvcihkYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlT3JSZWplY3QodGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEdG8gVmFsaWRhdGlvbiBGYWlsZWQuIEVycm9yczogJywgZXJyb3JzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==