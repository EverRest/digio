/* istanbul ignore next */
export const route = (...params: (string | number | undefined)[]): string => {
    switch (params[0]) {
        //auth
        case "root":
            return `/`;
        case "sign-in":
            return `auth/sign-in`;
        case "forgot-password":
            return `auth/password/forgot`;
        case "reset-password":
            return `auth/password/reset`;
        case "profile.general-information":
            return `profile/general-information`;
        case "profile.notification-settings":
            return `profile/notification-settings`;

        //Users
        case "users":
            return `/users`;
        case "users.create":
            return `create`;

        //News
        case "news":
            return `/news`;

        // Accounts
        case "account":
            return `/accounts`;
        case "accounts.create":
            return `/accounts/create`;

        // Wallets
        case "wallet":
            return `/wallets`;
        case "wallets.create":
            return `/wallets/create`;

        // Resources
        case "resources":
            return `/resources`;
        case "resources.create":
            return `/resources/create`;

        // Projects
        case "projects":
            return `/projects`;
        case "projects.create":
            return `/projects/create`;

        // Bindings
        // case "bindings":
        //   return `/bindings`;
        // case "binding.add":
        //   return `/bindings/add`;

        default:
            return `/`;
    }
};
