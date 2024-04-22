export const buildPhotoConfig = ( files: FileList ) => {
    const json: { [ key: string ]: { [ key: string ]: string [] } } = {};
    for ( let file of files ) {
        const path: string = file.webkitRelativePath;
        const [ base, cate, name ] = path.split(/\//g);
        if (!json.hasOwnProperty( base )) {
            json[base] = {};
            if (!json[base].hasOwnProperty( cate )) {
                json[base][cate] = [];
            }   
            json[base][cate].push( path );
        } else {
            if (!json[base].hasOwnProperty( cate )) {
                json[base][cate] = [];
            }   
            json[base][cate].push( path );
        }
    }
    return json;
}