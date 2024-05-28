type ConfigItem = {
    text: string,
    items: (ConfigItem | string)[]
}

export const buildPhotoConfig = ( files: FileList ): any => {
    const json: ConfigItem = emptyItem('照片墙');
    for ( let file of files ) {
        addPhoto( json, file )
    }
    return json;
}

const addPhoto = ( json: ConfigItem, file: File ): void => {
    const path: string = file.webkitRelativePath;
    const [ base, sub, cate, name ] = path.split(/\//);

    let subject: ConfigItem | undefined = findItem( json.items as ConfigItem[], sub );

    if ( !subject ) {
        subject = emptyItem( sub );
        json.items.push( subject );
    }

    let category: ConfigItem | undefined = findItem( subject.items as ConfigItem[], cate );

    if ( !category ) {
        category = emptyItem( cate );
        subject.items.push( category );
    }

    category.items.push( path );

}

const emptyItem = ( text: string ): ConfigItem => ({ text: text, items: [] });

const findItem = ( items: ConfigItem[], text: string ): ConfigItem | undefined => items.find( item => item.text === text );