import mongoose from "mongoose";

const { Schema, model } = mongoose;

interface IAddress {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

interface ISettings {
  currency?: string;
  timezone?: string;
  taxRate?: number;
  invoiceTerms?: string;
  invoicePrefix?: string;
  invoiceCounter?: number;
}

interface ISubscription {
  plan?: string;
  status?: string;
  expiresAt?: Date;
}

interface ICompany {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  address?: IAddress;
  taxId?: string;
  logo?: string;
  settings?: ISettings;
  subscription?: ISubscription;
  createdAt: Date;
  updatedAt: Date;
}

const companySchema = new Schema<ICompany>(
  {
    _id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
      country: { type: String }
    },
    taxId: { type: String },
    logo: { type: String },
    settings: {
      currency: { type: String, default: "USD" },
      timezone: { type: String, default: "UTC" },
      taxRate: { type: Number, default: 0 },
      invoiceTerms: { type: String },
      invoicePrefix: { type: String },
      invoiceCounter: { type: Number, default: 0 }
    },
    subscription: {
      plan: { type: String },
      status: { type: String },
      expiresAt: { type: Date }
    },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  },
  { collection: "company" }
);

const Company = model<ICompany>("Company", companySchema);

export { Company };