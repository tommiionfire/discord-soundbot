export type ConfigValue = boolean | number | string | string[];

export default interface ConfigInterface {
  [key: string]: Nullable<ConfigValue>;

  clientId: string;
  token: string;
  language?: string;
  prefix?: string;
  acceptedExtensions?: string[];
  maximumFileSize?: number;
  deleteMessages?: boolean;
  stayInChannel?: boolean;
  timeout?: number;
  game?: string;
  elevatedRoles: string[];
}
