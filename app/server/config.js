export default {
    port: foxtrel.config.get('port'),
    static: foxtrel.config.get('outputPath') + '/static',
    page: foxtrel.config.get('outputPath') + '/page',
}
