describe('configuration error test', function() {
    var sdk,
        provider,
        log,
        url;

    beforeEach(function () {

        angular.module('testApp', ['veridu.angular.sdk'])
            .config(function (VeriduProvider) {
                // not configuring should throw errors to console
                // VeriduProvider.client = 'client';
                // VeriduProvider.session = 'session';
                // VeriduProvider.user = 'user';
            })
            .run(function (Veridu) {
                sdk = Veridu;
            });

        // Initialize myApp injector
        module('veridu.angular.sdk', 'testApp');

        inject(function (_$log_) {
            log = _$log_
        });
    });

    it('should throw an console.error if not configured properly', function () {
        expect(log.error.logs).toContain(["Please specify Veridu 'client' on the  confguration phase of your application."]);
        expect(log.error.logs).toContain(["Please specify Veridu 'user' on the  confguration phase of your application."]);
        expect(log.error.logs).toContain(["Please specify Veridu 'session' on the  confguration phase of your application."]);
    });
});
