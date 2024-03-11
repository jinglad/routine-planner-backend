import { IPartTimeJobInfo } from './partTimeJobInfo.interface';
import { PartTimeJobInfo } from './partTimeJobInfo.model';

const addPartTimeJobInfo = async (partTimeJobInfo: IPartTimeJobInfo) => {
  const isExist = await PartTimeJobInfo.findOne({ user: partTimeJobInfo.user });
  if (isExist) {
    const result = await PartTimeJobInfo.findOneAndUpdate(
      { user: partTimeJobInfo.user },
      partTimeJobInfo,
      { new: true }
    );
    return result;
  }
  const result = await PartTimeJobInfo.create(partTimeJobInfo);
  return result;
};

const getPartTimeJobInfo = async (userId: string) => {
  const result = await PartTimeJobInfo.findOne({ user: userId });
  return result;
};

export const PartTimeJobInfoService = {
  addPartTimeJobInfo,
  getPartTimeJobInfo,
};
