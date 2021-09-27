import { __awaiter, __decorate } from 'tslib';
import { validateOrReject, IsEmail, IsString, IsOptional, IsPhoneNumber, IsNumber, IsBoolean, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

class CreateAdminDto {
    constructor(password, roleId) {
        this.password = password;
        this.roleId = roleId;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.phone && !this.email)
                    return false;
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
    IsEmail(),
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    IsOptional(),
    IsString()
], CreateAdminDto.prototype, "phone", void 0);
__decorate([
    IsString()
], CreateAdminDto.prototype, "password", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "displayName", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "emergencyPhone", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "personalEmail", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "joiningDate", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], CreateAdminDto.prototype, "reportingManager", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "address", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "experience", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "city", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "code", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "skillSet", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateAdminDto.prototype, "specialSkill", void 0);
__decorate([
    IsNumber()
], CreateAdminDto.prototype, "roleId", void 0);

class UpdateAdminDto {
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
], UpdateAdminDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "photoURL", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "displayName", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "emergencyPhone", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "personalEmail", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "joiningDate", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateAdminDto.prototype, "reportingManager", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "address", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "experience", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "city", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "code", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "skillSet", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "specialSkill", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateAdminDto.prototype, "roleId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateAdminDto.prototype, "teamId", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "status", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateAdminDto.prototype, "reportsPinnedBy", void 0);

class MealDto {
    constructor() { }
}
__decorate([
    IsNumber(),
    IsOptional()
], MealDto.prototype, "id", void 0);
__decorate([
    IsString(),
    IsOptional()
], MealDto.prototype, "time", void 0);
__decorate([
    IsBoolean(),
    IsOptional()
], MealDto.prototype, "mealTaken", void 0);
__decorate([
    IsString(),
    IsOptional()
], MealDto.prototype, "mealNote", void 0);
__decorate([
    IsArray(),
    IsOptional()
], MealDto.prototype, "recipes", void 0);

class CreateDailyDietDto {
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
], CreateDailyDietDto.prototype, "name", void 0);
__decorate([
    IsNumber()
], CreateDailyDietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateDailyDietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateDailyDietDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    IsOptional(),
    IsArray(),
    Type(() => MealDto)
], CreateDailyDietDto.prototype, "meals", void 0);

class UpdateDailyDietDto {
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
    IsString()
], UpdateDailyDietDto.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateDailyDietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateDailyDietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateDailyDietDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    IsOptional(),
    IsArray()
], UpdateDailyDietDto.prototype, "meals", void 0);

class ExerciseDto {
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
class WorkoutDto {
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

class CreateDailyWorkoutDto {
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

class UpdateDailyWorkoutDto {
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
    IsString()
], UpdateDailyWorkoutDto.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateDailyWorkoutDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateDailyWorkoutDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateDailyWorkoutDto.prototype, "status", void 0);
__decorate([
    ValidateNested(),
    IsOptional(),
    IsArray(),
    Type(() => WorkoutDto)
], UpdateDailyWorkoutDto.prototype, "workouts", void 0);

class CreateExerciseDto {
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
], CreateExerciseDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateExerciseDto.prototype, "videoLink", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateExerciseDto.prototype, "thumbnail", void 0);
__decorate([
    IsOptional(),
    IsString()
], CreateExerciseDto.prototype, "duration", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateExerciseDto.prototype, "caloriesBurn", void 0);

class UpdateExerciseDto {
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
], UpdateExerciseDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateExerciseDto.prototype, "videoLink", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateExerciseDto.prototype, "thumbnail", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateExerciseDto.prototype, "duration", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateExerciseDto.prototype, "caloriesBurn", void 0);

class CreateGroceryDto {
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

class UpdateGroceryDto {
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
], UpdateGroceryDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateGroceryDto.prototype, "quantity", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateGroceryDto.prototype, "thumbnail", void 0);
__decorate([
    IsOptional(),
    IsString()
], UpdateGroceryDto.prototype, "buyLink", void 0);

class Macro {
}
__decorate([
    IsString(),
    IsOptional()
], Macro.prototype, "name", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Macro.prototype, "value", void 0);

class CreateRecipeDto {
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
], CreateRecipeDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsArray()
], CreateRecipeDto.prototype, "conditions", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], CreateRecipeDto.prototype, "calories", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateRecipeDto.prototype, "blogLink", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsNumber({}, { each: true })
], CreateRecipeDto.prototype, "groceryIds", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested(),
    Type(() => Macro)
], CreateRecipeDto.prototype, "macros", void 0);

class UpdateRecipeDto {
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
], UpdateRecipeDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsArray()
], UpdateRecipeDto.prototype, "conditions", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateRecipeDto.prototype, "calories", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateRecipeDto.prototype, "blogLink", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsNumber({}, { each: true })
], UpdateRecipeDto.prototype, "groceryIds", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested(),
    Type(() => Macro)
], UpdateRecipeDto.prototype, "macros", void 0);

class Permission {
    constructor(name, menu, view, add, edit, remove) {
        this.name = name;
        this.menu = menu;
        this.view = view;
        this.add = add;
        this.edit = edit;
        this.delete = remove;
    }
}
class CreateRoleDto {
    constructor(name, permissions) {
        this.name = name;
        this.permissions = permissions;
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
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    IsArray()
], CreateRoleDto.prototype, "permissions", void 0);

class UpdateRoleDto {
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
], UpdateRoleDto.prototype, "name", void 0);
__decorate([
    IsArray(),
    IsOptional()
], UpdateRoleDto.prototype, "permissions", void 0);

class CreateRoutineDto {
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

class UpdateRoutineDto {
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

class CreateTeamDto {
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

class UpdateTeamDto {
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

class AssignedAdmins {
}
__decorate([
    IsString()
], AssignedAdmins.prototype, "dietitian", void 0);
__decorate([
    IsString()
], AssignedAdmins.prototype, "sp", void 0);
__decorate([
    IsString()
], AssignedAdmins.prototype, "rm", void 0);

class Counselling {
}
__decorate([
    IsDateString()
], Counselling.prototype, "date", void 0);
__decorate([
    IsString()
], Counselling.prototype, "time", void 0);
__decorate([
    IsString()
], Counselling.prototype, "status", void 0);

class CreateUserDto {
    constructor(password) {
        this.password = password;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.phone && !this.email)
                    return false;
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
    IsEmail(),
    IsString(),
    IsOptional()
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    IsOptional(),
    IsString()
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    IsString()
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateUserDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    IsString(),
    IsDateString(),
    IsOptional()
], CreateUserDto.prototype, "dob", void 0);

class Subscription {
}
__decorate([
    IsString(),
    IsOptional()
], Subscription.prototype, "planName", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Subscription.prototype, "discount", void 0);
__decorate([
    IsDateString(),
    IsOptional()
], Subscription.prototype, "startDate", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Subscription.prototype, "price", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], Subscription.prototype, "extension", void 0);
__decorate([
    IsArray(),
    IsOptional()
], Subscription.prototype, "pause_history", void 0);
__decorate([
    IsNumber()
], Subscription.prototype, "transactionId", void 0);

class UpdateUserDto {
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
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "photoURL", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "gender", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "dob", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "country", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "dietitianId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "salesPersonId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "relationManagerId", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_duration", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_status", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_endDate", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_planPauseDate", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "subscription_extensionEndDate", void 0);
__decorate([
    IsOptional(),
    ValidateNested()
], UpdateUserDto.prototype, "subscription", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "counselling_date", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "counselling_time", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateUserDto.prototype, "counselling_status", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "followup_dt", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "followup_sp", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "followup_rm", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    IsOptional()
], UpdateUserDto.prototype, "dietDays", void 0);
__decorate([
    IsArray(),
    IsNumber({}, { each: true }),
    IsOptional()
], UpdateUserDto.prototype, "pinnedBy", void 0);
__decorate([
    IsArray(),
    IsNumber({}, { each: true }),
    IsOptional()
], UpdateUserDto.prototype, "rosterPinnedBy", void 0);
__decorate([
    IsOptional()
], UpdateUserDto.prototype, "customFields", void 0);

class DailyDietDto {
    constructor() { }
}
__decorate([
    IsNumber(),
    IsOptional()
], DailyDietDto.prototype, "day", void 0);
__decorate([
    ValidateNested(),
    IsArray(),
    Type(() => MealDto),
    IsOptional()
], DailyDietDto.prototype, "meals", void 0);

class CreateWeeklydietDto {
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
], CreateWeeklydietDto.prototype, "name", void 0);
__decorate([
    IsString({ each: true }),
    IsOptional(),
    IsArray()
], CreateWeeklydietDto.prototype, "conditions", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "dietPreference", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "firstMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "secondMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "target", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "portionSize", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "residenceType", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], CreateWeeklydietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], CreateWeeklydietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], CreateWeeklydietDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    IsArray(),
    Type(() => DailyDietDto)
], CreateWeeklydietDto.prototype, "dailyDiets", void 0);

class UpdateWeeklydietDto {
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
], UpdateWeeklydietDto.prototype, "name", void 0);
__decorate([
    IsString({ each: true }),
    IsOptional(),
    IsArray()
], UpdateWeeklydietDto.prototype, "conditions", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "dietPreference", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "firstMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "secondMajorFood", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "target", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "portionSize", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "residenceType", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateWeeklydietDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklydietDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    IsArray(),
    Type(() => DailyDietDto)
], UpdateWeeklydietDto.prototype, "dailyDiets", void 0);

class DailyWorkoutDto {
    constructor() { }
}
__decorate([
    IsNumber(),
    IsOptional()
], DailyWorkoutDto.prototype, "day", void 0);
__decorate([
    ValidateNested(),
    IsArray(),
    Type(() => WorkoutDto),
    IsOptional()
], DailyWorkoutDto.prototype, "workouts", void 0);

class CreateWeeklyworkoutDto {
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

class UpdateWeeklyworkoutDto {
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
], UpdateWeeklyworkoutDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "bmi", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "level", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "ageGroup", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "target", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "type", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "equipment", void 0);
__decorate([
    IsNumber(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "submittedBy", void 0);
__decorate([
    IsOptional(),
    IsNumber()
], UpdateWeeklyworkoutDto.prototype, "approvedBy", void 0);
__decorate([
    IsString(),
    IsOptional()
], UpdateWeeklyworkoutDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    IsArray(),
    Type(() => DailyWorkoutDto)
], UpdateWeeklyworkoutDto.prototype, "dailyWorkouts", void 0);

class PagingImp {
    constructor() {
        this.limit = 10;
        this.page = 0;
        this.total = 0;
    }
}
class GetResourcesResponse {
    constructor(data, paging, query) {
        this.data = data;
        this.paging = paging;
        this.query = query;
    }
}

/*
 * Public API Surface of tsx-models
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AssignedAdmins, Counselling, CreateAdminDto, CreateDailyDietDto, CreateDailyWorkoutDto, CreateExerciseDto, CreateGroceryDto, CreateRecipeDto, CreateRoleDto, CreateRoutineDto, CreateTeamDto, CreateUserDto, CreateWeeklydietDto, CreateWeeklyworkoutDto, DailyDietDto, DailyWorkoutDto, ExerciseDto, GetResourcesResponse, Macro, MealDto, PagingImp, Permission, Subscription, UpdateAdminDto, UpdateDailyDietDto, UpdateDailyWorkoutDto, UpdateExerciseDto, UpdateGroceryDto, UpdateRecipeDto, UpdateRoleDto, UpdateRoutineDto, UpdateTeamDto, UpdateUserDto, UpdateWeeklydietDto, UpdateWeeklyworkoutDto, WorkoutDto };
//# sourceMappingURL=tsx-fitelo.js.map
