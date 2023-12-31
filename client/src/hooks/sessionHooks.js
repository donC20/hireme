// normal session
export const LoginToJobsSession = async (navigate) => {
    try {
        const response = await fetch('https://hireme-api-97hy.onrender.com/api/jobposts/session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        console.log(response);
        if (response.ok) {
            const sessionData = await response.json();
            console.log(sessionData);
            if (sessionData.valid) {
                navigate('/jobs', { replace: true });
            }
        } else {
            console.error('Failed to fetch session data');
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}


// common session
export const CommonSession = async (navigate) => {
    try {
        const response = await fetch('https://hireme-api-97hy.onrender.com/api/jobposts/session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.ok) {
            const sessionData = await response.json();
            if (!sessionData.valid) {
                navigate('/login', { replace: true });
            }
        } else {
            console.error('Failed to fetch session data');
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}
// common session
export const SessionValue = async () => {
    try {
        const response = await fetch('https://hireme-api-97hy.onrender.com/api/jobposts/session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.ok) {

            const sessionData = await response.json();
            return sessionData;
        } else {
            console.error('Failed to fetch session data');
            return false;
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}


// session destroy
export const EndLife = async (navigate) => {
    try {
        const response = await fetch('https://hireme-api-97hy.onrender.com/api/jobposts/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.ok) {
            const sessionData = await response.json();
            if (sessionData.output) {
                navigate('/login', { replace: true });
            } else {
                console.log('Failed to log out');
            }
        } else {
            console.error('Failed to fetch session data');
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}