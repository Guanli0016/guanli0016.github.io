import config from '../../configs/photos.json';

export default {
    paths: () => {
        return Object.keys( config ).map(( value: string ) => ({ params: { people: value }}));
    }
}