export const buildPhotoConfig = ( files: FileList ) => {
    const json: { [ key: string ]: string[] } = {};
    for ( let file of files ) {
        const path: string = file.webkitRelativePath;
        const [ mainDir, cateDir, fileName ] = path.split(/\//g);
        if ( json.hasOwnProperty(cateDir) ) {
            json[ cateDir ].push( path );
        } else {
            json[ cateDir ] = [];
            json[ cateDir ].push( path );
        }
    }
    return json;
}