import {User as DeprecatedUserInterface} from "../../types/fe/user";
import {UserRoles} from "../../constants";
import {faker} from "@faker-js/faker";
import {salutations} from "../salutations/data";

export const first_name = "Mr. Derick Balistreri";
export const last_name = "Walsh";
export const full_name = `${first_name} ${last_name}`;
export const resetPassword = "11111111";
export const userId = "1";
export const first_name_of_second_user = "Mr. Chase Hilpert";
export const second_name_of_second_user = "Yundt";

export const userData = {
    id: 1,
    is_active: true,
    is_external: false,
    enable_notification: true,
    email: "admin@mail.com",
    first_name: "Admin",
    last_name: "Super",
    phone_number: "+491234567891",
    mobile_number: "+49123445678910",
    company: {
        id: 1,
        title: "Interra Hausverwaltung",
        company_type: {
            id: 1,
            name: "general",
        },
        zip: null,
        street: "",
        city: null,
        part_of_city: null,
        country: null,
        state: null,
        house_number: null,
    },
    salutation: {
        id: 1,
        code: "mr",
        name: "Mr",
    },
    birthday: "1977-12-15",
    role: {
        id: 1,
        code: "admin",
        name: "Admin",
    },
    is_new_password: false,
    permissions: [
        "area.add",
        "area.delete",
        "area.read",
        "area.update",
        "bank_account.add",
        "bank_account.delete",
        "bank_account.read",
        "bank_account.update",
        "confidential_invoice.read",
        "contact.add",
        "contact.delete",
        "contact.read",
        "contact.update",
        "contract.add",
        "contract.delete",
        "contract.read",
        "contract.update",
        "dashboard.read",
        "employee_overview.add",
        "employee_overview.delete",
        "employee_overview.read",
        "employee_overview.update",
        "file_management.add",
        "file_management.delete",
        "file_management.read",
        "file_management.update",
        "inbox.add",
        "inbox.delete",
        "inbox.read",
        "inbox.update",
        "insurance.add",
        "insurance.delete",
        "insurance.read",
        "insurance.update",
        "invoice.add",
        "invoice.delete",
        "invoice.read",
        "invoice.update",
        "meter.add",
        "meter.delete",
        "meter.read",
        "meter.update",
        "news.edit",
        "offer.add",
        "offer.delete",
        "offer.read",
        "offer.update",
        "property.add",
        "property.delete",
        "property.read",
        "property.update",
        "service_request.add",
        "service_request.delete",
        "service_request.read",
        "service_request.update",
        "tenant.add",
        "tenant.delete",
        "tenant.read",
        "tenant.update",
        "user_management.add",
        "user_management.delete",
        "user_management.read",
        "user_management.update",
        "user-schedule.access",
        "user-schedule.hide-employee",
        "user.list",
        "vacation_request.add",
        "vacation_request.delete",
        "vacation_request.read",
        "vacation_request.update",
        "property.release",
        "property.read",
        "invoice.accountant",
        "loi.read",
        "loi.update",
        "loi.add",
        "loi.delete",
        "maintenance.read",
        "maintenance.add",
        "maintenance.update",
        "maintenance.delete",
        "employee_overview.read",
        "employee_overview.add",
        "employee_overview.update",
        "employee_overview.delete",
        "company_ownership.read",
        "company_ownership.add",
        "company_ownership.update",
        "company_ownership.delete",
        "tenant_request.read",
        "tenant_request.add",
        "tenant_request.update",
        "tenant_request.delete",
    ],
    avatar_file: {
        id: 4874,
        url: "https://api-dev.immowin24.de/dev/files/2d76539f-3e7f-4c07-9fe4-980cf6b8a99f",
        path: "mfGBRohyCT9ljkWf.jpg",
        size: "83226",
        has_relation: false,
        name: "blob",
        extension: "jpg",
    },
    locale: "en",
    has_relation: true,
    created_at: 1234645,
};

export const preloadedStateWithPermissions = {
    user: {
        _user: {...userData, permissions: []},
        isAuthenticated: true,
    },
};

export const adminUserPreloadedStateMock = {
    user: {
        _user: {
            ...userData,
            role: {
                id: 1,
                code: "admin",
                name: "Admin",
            },
        },
        isAuthenticated: true,
    },
};

export const tenantUserPreloadedStateMock = {
    user: {
        _user: {
            ...userData,
            role: {
                id: 13646,
                code: "tenant",
                name: "Tenant",
            },
        },
        isAuthenticated: true,
    },
};

export const assetManagerPreloadedStateMock = {
    user: {
        _user: {
            ...userData,
            role: {
                id: 3,
                name: "Asset Manager",
                code: "asset_manager",
            },
        },
        isAuthenticated: true,
    },
};

export const propertyManagerPreloadedStateMock = {
    user: {
        _user: {
            ...userData,
            role: {id: 2, name: "Property Manager", code: "property_manager"},
        },
        isAuthenticated: true,
    },
};

export const caretakerPreloadedStateMock = {
    user: {
        _user: {
            ...userData,
            role: {id: 5, name: "Caretaker", code: "caretaker"},
        },
        isAuthenticated: true,
    },
};

export const userWithoutCompanyOwnershipUpdatePermissionsPreloadedStateMock = {
    user: {
        _user: {
            ...userData,
            role: {id: 5, name: "Other", code: "other"},
            permissions: ["company_ownership.read"],
        },
        isAuthenticated: true,
    },
};

export const editUserData = {
    id: 1,
    is_active: 1,
    email: "testing@gmail.com",
    first_name: "TesterOlunya",
    last_name: "TestingReact",
    phone_number: "+491234567891",
    mobile_number: "+49123445678910",
    company_name: "Zona",
    salutation: salutations[0],
    salutation_id: "1",
    birthday: "1999-01-01",
    role: {
        id: 1,
        code: "admin",
        name: "Admin",
    },
    permissions: ["property.release"],
    avatar_file: null,
    is_new_password: false,
    has_relation: false,
};

export const assetManagerData: DeprecatedUserInterface = {
    birthday: 1399456014,
    company_name: "BMW",
    email: "asset.manager@mail.com",
    first_name: "Asset2",
    id: 4,
    is_active: false,
    is_external: false,
    last_name: "Manager2",
    mobile_number: "+49123445678910",
    permissions: ["property.release"],
    phone_number: "+491234567891",
    salutation_id: 2,
    avatar_file: null,
    is_new_password: false,
    has_relation: false,
};

export const tenantUserData = {
    id: 1,
    is_active: 1,
    email: "testing@gmail.com",
    first_name: "TesterOlunya",
    last_name: "TestingReact",
    phone_number: "+491234567891",
    mobile_number: "+49123445678910",
    company_name: "Zona",
    salutation: salutations[0],
    salutation_id: "1",
    birthday: "1999-01-01",
    role: {
        id: 13646,
        name: "tenant",
        code: "tenant",
    },
    permissions: [],
    avatar_file: null,
    is_new_password: false,
    has_relation: false,
};

export const caretakerData: DeprecatedUserInterface = {
    ...assetManagerData,
    id: 40,
    first_name: "CARETAKER_FIRST_NAME",
    last_name: "CARETAKER_LAST_NAME",
};

export const companyUserData: DeprecatedUserInterface = {
    ...assetManagerData,
    first_name: "COMPANY_USER_FIRST_NAME",
    last_name: "COMPANY_USER_LAST_NAME",
};

export const emailValidationError = "The email must be a valid email address.";

export const usersList = {
    data: [
        {
            id: 1199,
            is_active: 0,
            email: "q@a.t",
            first_name: first_name,
            last_name: last_name,
            phone_number: "+494955350501",
            mobile_number: "+49440392401038",
            company_name: "Schroeder-Harber",
            salutation: salutations[0],
            salutation_id: 2,
            role: {
                id: 1,
                name: "admin",
                code: "admin",
            },
            permissions: ["property.release", "user.list"],
            birthday: "",
            avatar_file: null,
            is_new_password: false,
            has_relation: false,
        },
        {
            id: 1393,
            is_active: 1,
            email: "yrippin@example.org",
            first_name: first_name_of_second_user,
            last_name: second_name_of_second_user,
            phone_number: "+499439485731",
            mobile_number: "+49970025057469",
            company_name: "Schultz, Trantow and Mann",
            salutation: salutations[0],
            salutation_id: 2,
            role: {
                id: 1,
                name: "Admin",
                code: "admin",
            },
            permissions: [],
            birthday: "",
            avatar_file: null,
            is_new_password: false,
            has_relation: false,
        },
        {...assetManagerData, id: 4},
    ],
    meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        path: "http://api-dev.immowin24.de/api/users",
        per_page: 10,
        to: 1,
        total: 2,
    },
};

export const userTableData: DeprecatedUserInterface[] = [
    {
        id: 1393,
        is_active: 1,
        email: "yrippin@example.org",
        first_name: "Mr. Chase Hilpert",
        last_name: "Yundt",
        phone_number: "+499439485731",
        mobile_number: "+49970025057469",
        company_name: "Schultz, Trantow and Mann",
        salutation_id: 2,
        permissions: [],
        birthday: "",
        avatar_file: null,
        is_new_password: false,
        has_relation: false,
    },
];

export const editInternalUserData = {
    id: 1,
    is_active: 1,
    email: "testing@gmail.com",
    first_name: "TesterOlunya",
    last_name: "TestingReact",
    phone_number: "+491234567891",
    mobile_number: "+49123445678910",
    company_name: "Zona",
    salutation: salutations[0],
    salutation_id: "1",
    birthday: "1999-01-01",
    role: {
        id: 1,
        name: "Admin",
        code: "admin",
    },
    permissions: ["property.release"],
    avatar_file: null,
    is_new_password: false,
    has_relation: false,
};

export const propertyManagerUser = {
    ...editInternalUserData,
    birthday: null,
    role: {
        id: 2,
        name: "Manager",
        code: UserRoles.PROPERTY_MANAGER,
    },
    company: {
        id: 6448,
        title: "Miss",
        company_type_id: 2,
        zip: 42402 - 3666,
        street: "35476 Jakubowski Extension",
        city: "Bednarshire",
        part_of_city: null,
        created_at: "2022-02-21T14:57:29.000000Z",
        updated_at: "2022-02-21T14:57:29.000000Z",
        company_type: {
            id: 1,
            name: "general",
        },
    },
};

export const editExternalUserData = {
    id: 1,
    is_active: 1,
    email: "testing@gmail.com",
    first_name: "TesterOlunya",
    last_name: "TestingReact",
    phone_number: "+491234567891",
    mobile_number: "+49123445678910",
    company_name: "Zona",
    company: null,
    salutation: salutations[0],
    salutation_id: "1",
    birthday: "1999-01-01",
    role: {
        id: 7,
        name: "Other",
    },
    permissions: [],
};

export const submitUserData: DeprecatedUserInterface = {
    birthday: "1990-01-01",
    company_name: null,
    email: "test.test@technoji.io",
    first_name: "wdsfsfsffsdfsff",
    id: 13,
    is_active: false,
    is_external: true,
    last_name: "Super12",
    mobile_number: "+49574757475757",
    permissions: [],
    phone_number: "+495747574757",
    salutation_id: 2,
    avatar_file: null,
    is_new_password: false,
    has_relation: false,
};


export const resetPasswordData = {
    token: "1",
    password: resetPassword,
    password_confirmation: resetPassword,
};

export const userIdMock = 1199;
/* istanbul ignore next */
export const usersListMock = (): DeprecatedUserInterface[] => {
    const users: DeprecatedUserInterface[] = userTableData;
    for (let i = 0; i < 98; i++) {
        users.push({
            id: i,
            is_active: i % 2 === 0,
            email: faker.internet.email(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            phone_number: faker.phone.number(),
            mobile_number: faker.phone.number(),
            company_name: faker.company.name(),
            salutation_id: 2,
            permissions: ["property.release"],
            birthday: "",
            avatar_file: null,
            is_new_password: false,
            has_relation: i % 2 === 0,
        });
    }
    return users;
};

export const mockUserDetails = {
    data: {
        id: userId,
        is_active: true,
        is_external: true,
        enable_notification: true,
        email: "ss4@ss.ss",
        first_name: "John",
        last_name: "Smith",
        phone_number: "+493232323232",
        mobile_number: "+49232323232323",
        company: {
            id: 17,
            title: "Peter Hahn GmbH",
            company_type: {id: 1, name: "general"},
            zip: "73650",
            street: "Peter-Hahn-Platz 1",
            city: "Winterbach",
            part_of_city: null,
            country: null,
            state: null,
            house_number: null,
        },
        salutation: {id: 1, code: "mr", name: "Mr"},
        birthday: "1993-07-19",
        role: {id: 13646, code: "tenant", name: "Tenant"},
        configuration: [],
        is_new_password: true,
        permissions: [
            "meter.add",
            "meter.delete",
            "meter.read",
            "meter.update",
            "tenant_request.read",
            "tenant_request.add",
            "tenant_request.update",
            "tenant_request.delete",
            "user.list",
            "user-schedule.hide-employee",
            "user-schedule.access",
        ],
        avatar_file: null,
        locale: "en",
        has_relation: true,
        created_at: 52325992075824,
        updated_at: 1680692507,
    },
};
