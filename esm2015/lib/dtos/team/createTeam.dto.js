import { __awaiter, __decorate } from "tslib";
import { IsArray, IsNumber, IsString, validateOrReject } from 'class-validator';
export class CreateTeamDto {
    constructor(name, teamLeader, ids) {
        this.name = name;
        this.teamLeader = teamLeader;
        this.memberIds = ids;
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
], CreateTeamDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], CreateTeamDto.prototype, "teamLeader", void 0);
__decorate([
    IsArray(),
    IsNumber({}, { each: true })
], CreateTeamDto.prototype, "memberIds", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVGVhbS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90c3gtZml0ZWxvL3NyYy9saWIvZHRvcy90ZWFtL2NyZWF0ZVRlYW0uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsTUFBTSxPQUFPLGFBQWE7SUFXeEIsWUFBWSxJQUFZLEVBQUUsVUFBa0IsRUFBRSxHQUFhO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFSyxRQUFROztZQUNaLElBQUk7Z0JBQ0YsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXhCQztJQURDLFFBQVEsRUFBRTsyQ0FDRTtBQUdiO0lBREMsUUFBUSxFQUFFO2lEQUNRO0FBSW5CO0lBRkMsT0FBTyxFQUFFO0lBQ1QsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnREFDVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElzQXJyYXksXG4gIElzTnVtYmVyLFxuICBJc1N0cmluZyxcbiAgdmFsaWRhdGVPclJlamVjdFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlVGVhbUR0byB7XG4gIEBJc1N0cmluZygpXG4gIG5hbWU6IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICB0ZWFtTGVhZGVyOiBudW1iZXI7XG5cbiAgQElzQXJyYXkoKVxuICBASXNOdW1iZXIoe30sIHsgZWFjaDogdHJ1ZSB9KVxuICBtZW1iZXJJZHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdGVhbUxlYWRlcjogbnVtYmVyLCBpZHM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlYW1MZWFkZXIgPSB0ZWFtTGVhZGVyO1xuICAgIHRoaXMubWVtYmVySWRzID0gaWRzO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlT3JSZWplY3QodGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEdG8gVmFsaWRhdGlvbiBGYWlsZWQuIEVycm9yczogJywgZXJyb3JzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==