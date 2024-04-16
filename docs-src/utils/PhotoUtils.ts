export const getPhotoConfig = async ( name: string ): Promise<any> => {
    const callback = async ( resolve, reject ) => {
        const url: string = `/photos/${ name }/config.json`;
        const data: any = await fetch( url ).then( response => response.json() );
        resolve( data );
    }
    return new Promise<any>(callback);
}