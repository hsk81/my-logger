function my_logfunc() {
    // eslint-disable-next-line no-console
    console.log('[MY:LOGGER]', new Date());
}

exports.log = my_logfunc;
