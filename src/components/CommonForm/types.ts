export type ValidateFnType = (rule: any, value: any, callback: any) => any

export interface RuleType {
  trigger?: 'blur' | 'change' | ['change', 'blur'];
  enum?: string;
  len?: number;
  max?: number;
  message?: string;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  type?: string;
  validator?: ValidateFnType;
  whitespace?: boolean;
}

export interface ValidateType {
  required: boolean;
  customs: RuleType[]
}

export interface FormAttrType {
  validate: boolean | ValidateType;
  [key: string]: any
}

interface slotType {
  [key: string]: (...args: any[]) => any | string;
}

interface eventType {
  [key: string]: (...args: any[]) => any;
}

export interface FormSchemaType {
  element?: string;
  label?: string;
  field?: string;
  hidden?: boolean;
  validate?: boolean | ValidateType | undefined;
  elementSlots?: slotType;
  slot?: string;
  on?: eventType;
  [key: string]: any;
  read?: boolean;
}
