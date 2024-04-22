import config from '../../public/photos/config.json';

export default {
    paths: () => {
        return Object.keys( config ).map(( value: string ) => ({ params: { people: value }}));
    }
}