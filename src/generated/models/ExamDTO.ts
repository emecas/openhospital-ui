// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ExamTypeDTO,
} from './';

/**
 * @export
 * @interface ExamDTO
 */
export interface ExamDTO {
    /**
     * @type {ExamTypeDTO}
     * @memberof ExamDTO
     */
    examtype?: ExamTypeDTO;
    /**
     * Exam Code
     * @type {string}
     * @memberof ExamDTO
     */
    code?: string;
    /**
     * Exam Description
     * @type {string}
     * @memberof ExamDTO
     */
    description?: string;
    /**
     * Exam Procedure
     * @type {number}
     * @memberof ExamDTO
     */
    procedure?: number;
    /**
     * Exam Default Result
     * @type {string}
     * @memberof ExamDTO
     */
    defaultResult?: string;
    /**
     * Exam Db Version to increment
     * @type {number}
     * @memberof ExamDTO
     */
    lock?: number;
}
