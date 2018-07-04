describe("network response", function() {
    it('connects without error', function(done) {
        request.get('/v0')
            .end(function(err, res) {
                done(err);
            });
    });
    it('returns status code of 200', function(done) {
        request.get('/v0')
            .expect(200)
            .end(function(err, res) {
                done(err);
            });
    });

    it('invalid endpoint returns 404', function(done) {
        request.get('/invalidPath')
            .expect(404)
            .end(function(err, res) {
                done(err);
            });
    });
});

// /v0/info endpoint
describe("info endpoint", function() {
    it('connects without error', function(done) {
        request.get('/v0/info')
            .end(function(err, res) {
                done(err);
            });
    });
    it('returns status code of 200', function(done) {
        request.get('/v0/info')
            .expect(200)
            .end(function(err, res) {
                done(err);
            });
    });

    it('has documentation link', function(done) {
        request.get('/v0/info')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.documentation).to.equal('https://github.com/UWEC-ITC/segregatedFees-API')
                done(err);
            });
    });
});
