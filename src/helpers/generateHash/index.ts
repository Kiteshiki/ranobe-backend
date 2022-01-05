import * as bcrypt from 'bcrypt';

export const generateHash = async (value: string | Buffer) => {
  const salt = await bcrypt.genSalt();
  const hashedValue = await bcrypt.hash(value, salt);

  return hashedValue;
};
