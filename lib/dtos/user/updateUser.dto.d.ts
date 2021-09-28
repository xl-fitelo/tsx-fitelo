import { Subscription } from './subscription';
export declare class UpdateUserDto {
    name?: string;
    photoURL?: string;
    gender?: string;
    dob?: string;
    country?: string;
    dietitianId?: number;
    salesPersonId?: number;
    relationManagerId?: number;
    subscription_duration?: number;
    subscription_status?: string;
    subscription_endDate?: string | null;
    subscription_planPauseDate?: string | null;
    subscription_extensionEndDate?: string | null;
    subscription?: Subscription | null;
    counselling_date?: string;
    counselling_time?: string;
    counselling_status?: string;
    followup_dt?: string[];
    followup_sp?: string[];
    followup_rm?: string[];
    dietDays?: string[];
    pinnedBy?: number[];
    rosterPinnedBy?: number[];
    customFields?: {
        [key: string]: any;
    };
    constructor();
    validate(): Promise<boolean>;
}
