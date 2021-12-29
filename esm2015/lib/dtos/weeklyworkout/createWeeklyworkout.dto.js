import { __awaiter, __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested, validateOrReject, } from 'class-validator';
import { DailyWorkoutDto } from './dailyWorkout.dto';
export class CreateWeeklyworkoutDto {
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
], CreateWeeklyworkoutDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "bmi", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "level", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "ageGroup", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "target", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "type", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "equipment", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateWeeklyworkoutDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklyworkoutDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    IsArray(),
    Type(() => DailyWorkoutDto)
], CreateWeeklyworkoutDto.prototype, "dailyWorkouts", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2Vla2x5d29ya291dC5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy93ZWVrbHl3b3Jrb3V0L2NyZWF0ZVdlZWtseXdvcmtvdXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE1BQU0sT0FBTyxzQkFBc0I7SUErQ2pDLGdCQUFlLENBQUM7SUFFVixRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXZEQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDQztBQUlkO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO21EQUNBO0FBSWI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7cURBQ0U7QUFJZjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTt3REFDSztBQUlsQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtzREFDRztBQUloQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtvREFDQztBQUlkO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3lEQUNNO0FBSW5CO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFOzJEQUNRO0FBSXJCO0lBRkMsVUFBVSxFQUFFO0lBQ1osUUFBUSxFQUFFOzBEQUNTO0FBSXBCO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3NEQUNHO0FBTWhCO0lBSkMsVUFBVSxFQUFFO0lBQ1osY0FBYyxFQUFFO0lBQ2hCLE9BQU8sRUFBRTtJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7NkRBQ00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNBcnJheSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBWYWxpZGF0ZU5lc3RlZCxcbiAgdmFsaWRhdGVPclJlamVjdCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IERhaWx5V29ya291dER0byB9IGZyb20gJy4vZGFpbHlXb3Jrb3V0LmR0byc7XG5leHBvcnQgY2xhc3MgQ3JlYXRlV2Vla2x5d29ya291dER0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGJtaT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGxldmVsPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgYWdlR3JvdXA/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB0YXJnZXQ/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB0eXBlPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZXF1aXBtZW50Pzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc3VibWl0dGVkQnk/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNOdW1iZXIoKVxuICBhcHByb3ZlZEJ5PzogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhdHVzPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQFZhbGlkYXRlTmVzdGVkKClcbiAgQElzQXJyYXkoKVxuICBAVHlwZSgoKSA9PiBEYWlseVdvcmtvdXREdG8pXG4gIGRhaWx5V29ya291dHM/OiBEYWlseVdvcmtvdXREdG9bXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlT3JSZWplY3QodGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEdG8gVmFsaWRhdGlvbiBGYWlsZWQuIEVycm9yczogJywgZXJyb3JzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==