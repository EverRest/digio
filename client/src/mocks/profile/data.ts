import { UserProfileTests } from "../../components/profile/tabs/generalInformation/types";
import { salutations } from "../salutations/data";
export const companyMock = {
  id: 1,
  title: "Title",
  company_type: {
    id: 1,
    name: "general",
  },
}

export const userWithIdOne = 1;
export const firstNameAndLastNameFirstLetters = "FL";
export const profileDate = new Date();

export const profileData = {
  id: 1,
  is_active: 1,
  email: "admin@mail.com",
  first_name: UserProfileTests.FIRST_NAME,
  last_name: UserProfileTests.LAST_NAME,
  phone_number: "+499653773233",
  mobile_number: "+49965377323354",
  company_name: "Zona",
  company: companyMock,
  salutation: salutations[0],
  salutation_id: 2,
  permissions: ["property.release"],
  created_at: 1643718856,
  updated_at: 1644141635,
  role: { id: 3, name: "Asset Manager", code: "asset_manager" },
  birthday: "1999-01-01",
  is_new_password: true,
  locale: "en",
  has_relation: false,
};

export const profileDataWithoutPermissions = {
  id: 1,
  is_active: 1,
  email: "admin@mail.com",
  first_name: UserProfileTests.FIRST_NAME,
  last_name: UserProfileTests.LAST_NAME,
  phone_number: "+499653773233",
  mobile_number: "+49965377323354",
  company_name: "Zona",
  company: companyMock,
  salutation: salutations[0],
  salutation_id: 2,
  permissions: [],
  created_at: 1643718856,
  updated_at: 1644141635,
  role: {
    id: 1,
    name: "Admin",
    code: "admin",
  },
  birthday: "1999-01-01",
  avatar_file: null,
  is_new_password: false,
  has_relation: false,
};

export const profileDataWithPropertyManager = {
  id: 1,
  is_active: 1,
  email: "admin@mail.com",
  first_name: UserProfileTests.FIRST_NAME,
  last_name: UserProfileTests.LAST_NAME,
  phone_number: "+499653773233",
  mobile_number: "+49965377323354",
  company_name: "Zona",
  company: companyMock,
  salutation: salutations[0],
  salutation_id: 2,
  permissions: ["property.release"],
  created_at: 1643718856,
  updated_at: 1644141635,
  role: { id: 3, name: "Property Manager", code: "property_manager" },
  birthday: "1999-01-01",
  avatar_file: null,
  is_new_password: false,
  has_relation: false,
};

export const profileDataWithTenantUser = {
  id: 9611,
  is_active: true,
  is_external: true,
  email: "info@finvia.fa",
  first_name: "Hanna",
  last_name: "Cirmen",
  phone_number: "+492222222222",
  mobile_number: "+49222222222222",
  company_name: "Zona",
  company: companyMock,
  salutation: salutations[0],
  birthday: null,
  role: {
    id: 13646,
    code: "tenant",
    name: "Tenant",
  },
  permissions: [],
  avatar_file: null,
  salutation_id: 2,
  is_new_password: false,
  has_relation: false,
};
