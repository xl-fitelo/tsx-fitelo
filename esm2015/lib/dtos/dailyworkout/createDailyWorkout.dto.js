import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
import { WorkoutDto } from '../routine/workout.dto';
export class CreateDailyWorkoutDto {
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
], CreateDailyWorkoutDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], CreateDailyWorkoutDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateDailyWorkoutDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateDailyWorkoutDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    IsOptional(),
    IsArray(),
    Type(() => WorkoutDto)
], CreateDailyWorkoutDto.prototype, "workouts", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGFpbHlXb3Jrb3V0LmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RzeC1maXRlbG8vc3JjL2xpYi9kdG9zL2RhaWx5d29ya291dC9jcmVhdGVEYWlseVdvcmtvdXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBELE1BQU0sT0FBTyxxQkFBcUI7SUFzQmhDLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTlCQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTttREFDQztBQUdkO0lBREMsUUFBUSxFQUFFOzBEQUNVO0FBSXJCO0lBRkMsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFO3lEQUNTO0FBSXBCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3FEQUNHO0FBTWhCO0lBSkMsY0FBYyxFQUFFO0lBQ2hCLFVBQVUsRUFBRTtJQUNaLE9BQU8sRUFBRTtJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7dURBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBWYWxpZGF0ZU5lc3RlZCxcbiAgdmFsaWRhdGVPclJlamVjdCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IFdvcmtvdXREdG8gfSBmcm9tICcuLi9yb3V0aW5lL3dvcmtvdXQuZHRvJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZURhaWx5V29ya291dER0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBzdWJtaXR0ZWRCeT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc051bWJlcigpXG4gIGFwcHJvdmVkQnk/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBzdGF0dXM/OiBzdHJpbmc7XG5cbiAgQFZhbGlkYXRlTmVzdGVkKClcbiAgQElzT3B0aW9uYWwoKVxuICBASXNBcnJheSgpXG4gIEBUeXBlKCgpID0+IFdvcmtvdXREdG8pXG4gIHdvcmtvdXRzPzogV29ya291dER0b1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVPclJlamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgY29uc29sZS5sb2coJ0R0byBWYWxpZGF0aW9uIEZhaWxlZC4gRXJyb3JzOiAnLCBlcnJvcnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19