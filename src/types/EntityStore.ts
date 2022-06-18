export interface EntityStore {
  Id: number;
  CustomerId?: number;
  AddressId?: number;
  SourceId?: number;
  Name?: string;
  AddressTypeId?: number;
  Email?: string;
  Phone?: string;
  AddressType2?: string;
  Street?: string;
  Address1?: string;
  Address2?: string;
  Company?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Country?: string;
  AgentCode?: string;
  CustomerType?: string;
  ActivityStatus?: string;
  IsBlacklisted?: boolean;
  BlacklistReason?: string;
  CustomerSegment?: string;
  WholesalerCode?: string;
  CityId?: number;
}
