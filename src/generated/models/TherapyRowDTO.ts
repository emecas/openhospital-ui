// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    PatientDTO,
} from './';

/**
 * @export
 * @interface TherapyRowDTO
 */
export interface TherapyRowDTO {
    /**
     * The therapy\'s ID
     * @type {number}
     * @memberof TherapyRowDTO
     */
    therapyID?: number;
    /**
     * @type {PatientDTO}
     * @memberof TherapyRowDTO
     */
    patID?: PatientDTO;
    /**
     * The start date of therapy
     * @type {string}
     * @memberof TherapyRowDTO
     */
    startDate?: string;
    /**
     * The end date of the therapy
     * @type {string}
     * @memberof TherapyRowDTO
     */
    endDate?: string;
    /**
     * The ID of the medical concerned by the therapy
     * @type {number}
     * @memberof TherapyRowDTO
     */
    medicalId?: number;
    /**
     * The quantity of medicals
     * @type {number}
     * @memberof TherapyRowDTO
     */
    qty?: number;
    /**
     * The unit\'s ID
     * @type {number}
     * @memberof TherapyRowDTO
     */
    unitID?: number;
    /**
     * The frequence in day
     * @type {number}
     * @memberof TherapyRowDTO
     */
    freqInDay?: number;
    /**
     * The frequence in period
     * @type {number}
     * @memberof TherapyRowDTO
     */
    freqInPeriod?: number;
    /**
     * A note for the therapy
     * @type {string}
     * @memberof TherapyRowDTO
     */
    note?: string;
    /**
     * the notify flag: 1 if the notification need to be activated, 0 otherwise
     * @type {number}
     * @memberof TherapyRowDTO
     */
    notifyInt?: number;
    /**
     * the sms flag: 1 if sms need to be sent to patient, 0 otherwise
     * @type {number}
     * @memberof TherapyRowDTO
     */
    smsInt?: number;
}
