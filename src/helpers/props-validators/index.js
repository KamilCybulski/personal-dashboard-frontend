/* eslint-disable import/prefer-default-export */

/**
 * @description Validates if given prop is one of the allowed values
 * @param {Array} allowedValues - an array of allowed values
 */
export const oneOf = (allowedValues = []) => (value) => allowedValues.includes(value);
