import path from 'path';
import fs from 'fs';

type PhotoPaths = {
    params: {
        subject: string,
        category: string
    }
}

type ConfigItem = {
    text: string,
    items: ( ConfigItem | string )[]
}

const photoBase: string = path.resolve( __dirname, '../../public/photos' );
const configBase: string = path.resolve( __dirname, '../../configs/photos.json' );

// 写入照片墙配置文件
const writeConfig = async ( paths: PhotoPaths[] ) => {
    const json: ConfigItem = emptyItem('照片墙');
    for ( let path of paths ) {
        addPhoto( json, path.params.subject, path.params.category );
    }
    fs.writeFileSync( configBase, JSON.stringify( json ), { flag: 'w' } );
}

const addPhoto = ( json: ConfigItem, subject: string, category: string ) => {

    let subjectItem: ConfigItem | undefined = findItem( json.items as ConfigItem[], subject );

    if ( !subjectItem ) {
        subjectItem = emptyItem( subject );
        json.items.push( subjectItem );
    }

    let categoryItem: ConfigItem | undefined = findItem( subjectItem.items as ConfigItem[], category );

    if ( !categoryItem ) {
        categoryItem = emptyItem( category );
        subjectItem.items.push( categoryItem );
    }

    const photos: string[] = fs.readdirSync( `${ photoBase }/${ subject }/${ category }` );
    categoryItem.items.push( ...photos.map(( photo: string ) => `/photos/${ subject }/${ category }/${ photo }`));
}

const emptyItem = ( text: string ): ConfigItem => ({ text: text, items: [] });
const findItem = ( items: ConfigItem[], text: string ): ConfigItem | undefined => items.find( item => item.text === text );

export default {
    paths: (): PhotoPaths[] => {

        const paths: PhotoPaths[] = [];
        const subjects: string[] = fs.readdirSync( photoBase );

        for ( let subject of subjects ) {
            const subjectPath: string = photoBase + '/' + subject;
            const categorys: string[] = fs.readdirSync( subjectPath );
            for ( let category of categorys ) {
                const param: PhotoPaths = { params: { subject, category }};
                paths.push( param );
            }
        }
        writeConfig( paths );
        return paths;
    }
}