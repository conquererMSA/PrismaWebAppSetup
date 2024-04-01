import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { createUserService } from './useService';

export const createUserCon = catchAsync(async (req, res) => {
  const user = await createUserService(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User create successfully',
    data: user,
  });
});
