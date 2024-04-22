import config from '../../public/photos/config.json';

export default {
    paths: () => {
        let pathslist: { params: { people: string, cate: string }}[] = [];
        for ( let k in config ) {
            const people = k;
            for ( let kk in config[k] ) {
                const cate = kk;
                pathslist.push({ params: { people, cate }});
            }
        }
        return pathslist;
    }
}