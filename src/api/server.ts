import { publicKey } from '../../api-keys';
import { privateKey } from '../../api-keys';




// export const marvelCalls = {
//     get : async () => {
//         var ts = new Date().getTime();
//         var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
//         const response = await fetch()
//     }
// }


let token = `bc8a1cc4ea000aec94a4567e58cbba08c02c413e2a945baa`

export const serverCalls = {
    get : async () => {
        const response = await fetch(`https://gifted-respected-handball.glitch.me/api/characters`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create : async (data:any) => {
        const response = await fetch(`https://gifted-respected-handball.glitch.me/api/characters`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id:string, data:any) => {
        const response = await fetch(`https://gifted-respected-handball.glitch.me/api/characters/${id}`, {
            // PUT alters data and POST either updates or creates new data
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    
    delete: async (id:string) => {
        const response = await fetch(`https://gifted-respected-handball.glitch.me/api/characters/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    },
    
    search : async (data:any) => {
        const response = await fetch(`https://gifted-respected-handball.glitch.me/search/searchcharacters`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    }
}