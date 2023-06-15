import { ROLETYPE } from '@/store/types/role'

export interface userModel {
  role?: ROLETYPE;
  token?: string;
  name?: string;
  image?: string;
  email?: string;
  id?: string;
  phone?: string;
}


