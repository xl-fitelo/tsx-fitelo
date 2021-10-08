import { __decorate } from "tslib";
import { Type } from 'class-transformer';
import { IsString, IsArray, IsNumber, IsBoolean, IsOptional, ValidateNested } from 'class-validator';
export class ExerciseDto {
    constructor() { }
    ;
}
__decorate([
    IsOptional()
], ExerciseDto.prototype, "id", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ExerciseDto.prototype, "sets", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], ExerciseDto.prototype, "repsPerSet", void 0);
__decorate([
    IsString(),
    IsOptional()
], ExerciseDto.prototype, "duration", void 0);
export class WorkoutDto {
    constructor() { }
}
__decorate([
    IsNumber(),
    IsOptional()
], WorkoutDto.prototype, "id", void 0);
__decorate([
    IsString(),
    IsOptional()
], WorkoutDto.prototype, "time", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], WorkoutDto.prototype, "workoutDone", void 0);
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    IsArray(),
    Type(() => ExerciseDto)
], WorkoutDto.prototype, "exercises", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dC5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy9yb3V0aW5lL3dvcmtvdXQuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckcsTUFBTSxPQUFPLFdBQVc7SUFnQnRCLGdCQUFlLENBQUM7SUFBQSxDQUFDO0NBQ2xCO0FBZkM7SUFEQyxVQUFVLEVBQUU7dUNBQ1E7QUFJckI7SUFGQyxRQUFRLEVBQUU7SUFDVixVQUFVLEVBQUU7eUNBQ0M7QUFJZDtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTsrQ0FDTztBQUlwQjtJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTs2Q0FDSztBQUtwQixNQUFNLE9BQU8sVUFBVTtJQW1CckIsZ0JBQWUsQ0FBQztDQUNqQjtBQWpCQztJQUZDLFFBQVEsRUFBRTtJQUNWLFVBQVUsRUFBRTtzQ0FDRDtBQUlaO0lBRkMsUUFBUSxFQUFFO0lBQ1YsVUFBVSxFQUFFO3dDQUNDO0FBSWQ7SUFGQyxTQUFTLEVBQUU7SUFDWCxVQUFVLEVBQUU7K0NBQ1M7QUFNdEI7SUFKQyxVQUFVLEVBQUU7SUFDWixjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsT0FBTyxFQUFFO0lBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc1N0cmluZywgSXNBcnJheSwgSXNOdW1iZXIsIElzQm9vbGVhbiwgSXNPcHRpb25hbCwgVmFsaWRhdGVOZXN0ZWQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRXhlcmNpc2VEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc2V0cz86IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHJlcHNQZXJTZXQ/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkdXJhdGlvbj86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9O1xufVxuXG5leHBvcnQgY2xhc3MgV29ya291dER0byB7XG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgaWQ/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB0aW1lPzogc3RyaW5nO1xuXG4gIEBJc0Jvb2xlYW4oKVxuICBASXNPcHRpb25hbCgpXG4gIHdvcmtvdXREb25lPzogYm9vbGVhbjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBWYWxpZGF0ZU5lc3RlZCh7IGVhY2g6IHRydWUgfSlcbiAgQElzQXJyYXkoKVxuICBAVHlwZSgoKSA9PiBFeGVyY2lzZUR0bylcbiAgZXhlcmNpc2VzPzogRXhlcmNpc2VEdG9bXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=