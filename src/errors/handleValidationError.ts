import { IGenericErrorResponse } from '../interfaces/common';
import { Prisma } from '@prisma/client';
function extractErrorMessage(errorMessage: string) {
  // const format = '`[^`]+`';
  let regex;
  if (errorMessage.includes(': Invalid value provided. Expected ')) {
    regex = /Argument `[^`]+`: Invalid value provided/;
  } else if (errorMessage.includes(' is missing')) {
    regex = /Argument `[^`]+` is missing/;
  } else {
    regex = /''/;
  }
  // const regex = /Argument `[^`]+` is missing/;
  const match = errorMessage.match(regex);
  if (match) {
    return match[0];
  } else {
    return 'Sentence not found in the error message';
  }
}
const handleValidationError = (
  error: Prisma.PrismaClientValidationError
): IGenericErrorResponse => {
  // console.log('xxxxxxxx', extractErrorMessage(error.message));

  const errors = [
    {
      path: `${extractErrorMessage(error.message).split(' ')[1]}`,
      message: `Invalid property ${
        extractErrorMessage(error.message).split(' ')[1]
      }`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
