import photoConfig from '../../configs/photos.json';

export default {
    paths: () => {
        let pathslist: { params: { subject: string, category: string }}[] = [];
        for ( let item of photoConfig.items ) {
            const subject: string = item.text;
            for ( let it of item.items ) {
                const category: string = it.text;
                pathslist.push({ params: { subject, category }});
            }
        }
        return pathslist;
    }
}