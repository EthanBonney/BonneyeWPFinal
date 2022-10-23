import { reactive } from "vue";

const session = reactive( {
    user: null as User | null,
    
    get token() {
        return this.user?.token;
    },

    set token( token: string | undefined)
    {
        if (this.user)
        {
            this.user.token = token;
        }
    }
});

export function login(firstName: string, lastName: string, token: string) {
    session.user = {
        firstName,
        lastName,
        token,
    };
}

export function logout() {
    session.user = null;
}

export function userToken()
{
    return session.user?.token;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public token?: string | undefined;
}

export default session;