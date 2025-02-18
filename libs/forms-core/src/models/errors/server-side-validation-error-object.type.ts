export interface NgsServerSideValidationErrorObjectType {
  key: string;
  path: string;
  hasErrors: boolean;
  errorList: string[];
  children: NgsServerSideValidationErrorObjectType[];
}
